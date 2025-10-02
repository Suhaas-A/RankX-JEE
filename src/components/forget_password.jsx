import { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Divider, Box, Paper } from "@mui/material";

function ForgetPassword() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [inputOtp, setInputOtp] = useState('');

    async function verifyUser() {
        const response = await axios.post(
            'http://127.0.0.1:5000/api/forget-password', 
            { 'username': username }
        );
        const message = response.data;
        setOtp(message['otp']);
        console.log(message);
    }

    async function ResetPassword() {
        if (String(otp) === String(inputOtp)) {
            const data = { 'username': username, 'password': password };
            await axios.post('http://127.0.0.1:5000/api/reset-password', data);
            window.location.href = '/login';
        } else {
            console.log('Wrong Code');
            window.location.href = '/register';
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                padding: 2,
            }}
        >
            <Paper 
                elevation={6} 
                sx={{
                    p: 4, 
                    width: 420, 
                    borderRadius: 3,
                    textAlign: "center",
                }}
            >
                <Typography variant="h4" sx={{ mb: 1, fontWeight: "bold", color: "#1e3c72" }}>
                    RankX JEE
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
                    Reset your password securely
                </Typography>
                <Divider sx={{ mb: 3 }} />

                {/* Username */}
                <TextField 
                    label="Username" 
                    variant="outlined" 
                    fullWidth 
                    sx={{ mb: 2 }} 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />

                {/* New Password */}
                <TextField 
                    label="New Password" 
                    type="password"
                    variant="outlined" 
                    fullWidth 
                    sx={{ mb: 2 }} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />

                <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                        mb: 3, 
                        background: "linear-gradient(135deg, #1e3c72, #2a5298)", 
                        color: "white", 
                        fontWeight: "bold",
                        ":hover": { background: "linear-gradient(135deg, #2a5298, #1e3c72)" }
                    }} 
                    onClick={verifyUser}
                >
                    Send OTP
                </Button>

                {/* OTP Section */}
                {otp !== '' && (
                    <>
                        <TextField 
                            label="Enter OTP" 
                            variant="outlined" 
                            fullWidth 
                            sx={{ mb: 2 }} 
                            value={inputOtp} 
                            onChange={(e) => setInputOtp(e.target.value)} 
                        />
                        <Button 
                            variant="contained" 
                            fullWidth 
                            sx={{ 
                                background: "linear-gradient(135deg, #28a745, #218838)", 
                                color: "white", 
                                fontWeight: "bold",
                                ":hover": { background: "linear-gradient(135deg, #218838, #28a745)" }
                            }} 
                            onClick={ResetPassword}
                        >
                            Verify & Reset
                        </Button>
                    </>
                )}

                <Typography variant="body2" sx={{ mt: 3 }}>
                    Remembered your password? <a href="/login" style={{ color: "#1e3c72", fontWeight: "bold" }}>Login</a>
                </Typography>
            </Paper>
        </Box>
    );
}

export default ForgetPassword;
