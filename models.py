from app import db
from datetime import datetime, timezone

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    phone_number = db.Column(db.String(80), unique=True, nullable=False)
    address = db.Column(db.String(160), unique=False, nullable=False)
    account_type = db.Column(db.String(1), unique=False, nullable=False)

    def to_json(self):
        return {
            "id" : self.id,
            "username" : self.username,
            "password" : self.password,
            "email" : self.email,
            "phoneNumber" : self.phone_number,
            "address" : self.address,
            "accountType" : self.account_type
        }

class RecyclingData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, unique=False, nullable=False)
    delivery_person_id = db.Column(db.Integer, unique=False, nullable=False)
    location = db.Column(db.String(250), unique=False, nullable=True)
    item_type = db.Column(db.String(1), unique=False, nullable=False)
    item_weight = db.Column(db.Integer, unique=False, nullable=False)
    item_quantity = db.Column(db.Integer, unique=False, nullable=True)
    item_age = db.Column(db.Integer, unique=False, nullable=True)
    total_price = db.Column(db.Integer, unique=False, nullable=True)
    status = db.Column(db.Integer, unique=False, nullable=False)
    delivery_date = db.Column(db.DateTime, unique=False, nullable=True)
    pick_up_date = db.Column(db.Date, unique=False, nullable=False)
    pick_up_time = db.Column(db.Time, unique=False, nullable=True)

    def to_json(self):
        worker = Users.query.filter(Users.id == self.delivery_person_id).first()
        user = Users.query.filter(Users.id == self.user_id).first()
        return {
            "id" : self.id,
            "userId" : self.user_id,
            "deliveryPersonId" : self.delivery_person_id,
            "location" : self.location,
            "itemType" : self.item_type,
            "itemWeight" : self.item_weight,
            "itemQuantity" : self.item_quantity,
            "itemAge" : self.item_age,
            "totalPrice" : self.total_price,
            "status" : self.status,
            "contact": worker.phone_number,
            "userContact": user.phone_number,
            "deliveryDate": self.delivery_date if self.delivery_date is not None else 'Not Delivered',
            "pickUpDate": self.pick_up_date.isoformat(),
            "pickUpTime": self.pick_up_time.isoformat(),
            "address": user.address
        }

class Notifications(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, unique=False, nullable=False)
    delivery_person_id = db.Column(db.Integer, unique=False, nullable=False)
    item_type = db.Column(db.String(1), unique=False, nullable=False)
    item_weight = db.Column(db.Integer, unique=False, nullable=False)
    item_quantity = db.Column(db.Integer, unique=False, nullable=True)
    item_age = db.Column(db.Integer, unique=False, nullable=True)
    total_price = db.Column(db.Integer, unique=False, nullable=True)
    pick_up_date = db.Column(db.Date, unique=False, nullable=False)
    pick_up_time = db.Column(db.Time, unique=False, nullable=True)

    def to_json(self):
        user = Users.query.filter(Users.id == self.user_id).first()
        return {
            "id" : self.id,
            "userId" : self.user_id,
            "deliveryPersonId" : self.delivery_person_id,
            "itemType" : self.item_type,
            "itemWeight" : self.item_weight,
            "itemQuantity" : self.item_quantity,
            "itemAge" : self.item_age,
            "totalPrice" : self.total_price,
            "address": user.address,
            "username": user.username,
            "status": 'Waiting For Delivery Person',
            "deliveryDate": 'Not Delivered',
            "pickUpDate": self.pick_up_date.isoformat(),
            "pickUpTime": self.pick_up_time.isoformat(),
        }
