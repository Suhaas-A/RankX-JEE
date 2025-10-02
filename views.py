import os.path
from datetime import datetime, timezone, timedelta
from sqlalchemy import or_
from flask import request, jsonify, render_template, send_from_directory
from app import app, db, jwt
from models import Users, RecyclingData, Notifications
import bcrypt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt
import random
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import google.generativeai as genai

genai.configure(api_key='AIzaSyAd-nxdKAERmQ7P-OpgWkPh9c-y__zIVoM')

frontend_folder = os.path.join(os.getcwd(), "..", "frontend",)
dist_folder = os.path.join(frontend_folder, "dist")

@app.route("/<path:filename>")
def index(filename):
    return send_from_directory(dist_folder, "index.html")

BLOCKLIST = set()

@jwt.token_in_blocklist_loader
def check_if_token_revoked(jwt_header, jwt_payload):
    return jwt_payload["jti"] in BLOCKLIST

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode(), salt)
    return hashed.decode()

def check_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode(), hashed.encode())

@app.route('/api/register', methods=["POST"])
def register():
    username = request.json.get('username')
    password = str(request.json.get('password'))
    hashed_password = hash_password(password)
    email = request.json.get('email')
    phone_number = request.json.get('phoneNumber')
    address = request.json.get('address')
    account_type = request.json.get('accountType')

    if username is None:
        return jsonify({'message': 'Username Is Not Valid'})

    if password is None:
        return jsonify({'message': 'Password Is Not Valid'})

    if email is None:
        return jsonify({'message': 'Email Is Not Valid'})

    if phone_number is None:
        return jsonify({'message': 'Phone Number Is Not Valid'})

    if account_type is None:
        return jsonify({'message': 'Account Type Is Not Valid'})

    usernames = []
    emails = []
    phone_numbers = []

    users = Users.query.all()

    for user in users:
        usernames.append(user.username)
        emails.append(user.email)
        phone_numbers.append(user.phone_number)

    if username in usernames:
        return jsonify({'message': 'Username Already Exists'})

    if email in emails:
        return jsonify({'message': 'Email Already Exists'})

    if phone_number in phone_numbers:
        return jsonify({'message': 'Phone Number Already Exists'})

    new_account = Users(
        username=username,
        password=hashed_password,
        email=email,
        phone_number=phone_number,
        address=address,
        account_type= account_type
    )

    db.session.add(new_account)
    db.session.commit()

    sender_email = "suhaas062010@gmail.com"
    sender_password = "ogkl cmnc rnnq rgzj"
    receiver_email = 'b.swarag06@gmail.com'

    # create message container - the correct MIME type is multipart/alternative.
    msg = MIMEMultipart('alternative')
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"Reliso New User Login"

    # create the body of the message (a plain-text and an HTML version).
    text = 'New User Login'
    html = f'''
                <html>
                    <body>
                        <p>
                            <div style="font-size: 35px;">
                                <b><i>Username : {username}</i></b> <br>
                                <b><i>Email : {email}</i></b> <br>
                                <b><i>Address : {address}</i></b> <br>
                                <b><i>Phone Number : {phone_number}</i></b>
                            </div>
                        </p>
                    </body>
                </html>
                '''

    # Attach both plain-text and HTML versions of the message to the MIMEMultipart object.
    part1 = MIMEText(text, 'plain')
    part2 = MIMEText(html, 'html')
    msg.attach(part1)
    msg.attach(part2)

    # create SMTP session for sending the mail
    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
    except Exception as e:
        print("Error: Unable to send email.", e)

    return jsonify({'message': 'User Created Successfully'})

@app.route('/api/login', methods=["POST"])
def login():
    username = request.json.get('username')
    password = str(request.json.get('password'))

    usernames = []
    passwords = []

    users = Users.query.all()

    for user in users:
        usernames.append(user.username)
        passwords.append(user.password)

    if username not in usernames:
        return jsonify({'message': 'Invalid Username'})

    correct_password =  passwords[usernames.index(username)]

    if check_password(password, correct_password):
        access_token = create_access_token(identity=username)
        return jsonify({'message': 'Successfully Logged In', 'accessToken': access_token})
    else:
        return jsonify({'message': 'Invalid Password'})

@app.route("/api/forget-password", methods=["POST"])
def forget_password():
    num1 = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    num2 = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    num3 = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    num4 = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    num5 = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    num6 = random.choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    otp = [num1, num2, num3, num4, num5, num6]
    random.shuffle(otp)

    username = request.json.get('username')
    email = Users.query.filter(Users.username == username).first().email

    sender_email = "suhaas062010@gmail.com"
    sender_password = "ogkl cmnc rnnq rgzj"
    receiver_email = email

    # create message container - the correct MIME type is multipart/alternative.
    msg = MIMEMultipart('alternative')
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = f"OTP Verification For Resetting Your Password"

    str_code = ''
    for num in otp:
        str_code += str(num)

    # create the body of the message (a plain-text and an HTML version).
    text = 'Enter the following code. If it was not you then please ignore the email.'
    html = f'''
            <html>
                <body>
                    <p>
                        Hello, <br>
                        This is your code : <br>
                        <div style="font-size: 35px;">
                            <b><i>{int(str_code)}</i></b>
                        </div>
                    </p>
                </body>
            </html>
            '''

    # Attach both plain-text and HTML versions of the message to the MIMEMultipart object.
    part1 = MIMEText(text, 'plain')
    part2 = MIMEText(html, 'html')
    msg.attach(part1)
    msg.attach(part2)

    # create SMTP session for sending the mail
    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
    except Exception as e:
        print("Error: Unable to send email.", e)

    return jsonify({'otp': str_code})

@app.route('/api/reset-password', methods=['POST'])
def reset_password():
    username = request.json.get('username')
    password = request.json.get('password')

    user = Users.query.filter(Users.username == username).first()
    user.password = hash_password(password)

    db.session.commit()

    return jsonify({'message': 'Changed Successfully'})

@app.route("/api/view_account", methods=["GET"])
@jwt_required()
def view_account():
    username = get_jwt_identity()
    details = Users.query.filter(Users.username == username).first().to_json()
    return jsonify({'accountDetails': details})

@app.route("/api/edit_account", methods=["POST"])
@jwt_required()
def edit_account():
    username = get_jwt_identity()
    new_username = request.json.get('username')
    new_email = request.json.get('email')
    new_phone_number = request.json.get('phoneNumber')
    new_address = request.json.get('address')

    user = Users.query.filter(Users.username == username).first()
    user.username = new_username
    user.email = new_email
    user.phone_number = new_phone_number
    user.address = new_address

    access_token = create_access_token(identity=new_username)

    db.session.commit()

    return jsonify({'message': 'Successfully Updated The Details', 'accessToken': access_token})

@app.route('/api/ai-prompt', methods=['GET', 'POST'])
def ai_prompt():
    prompt = request.json.get('prompt')
    model = genai.GenerativeModel("models/gemini-2.5-flash")
    response = model.generate_content(prompt + '' + 'Please write the answer as a paragraph in a simple text without using bold italic etc')
    return jsonify({'response': str(response.text)})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)