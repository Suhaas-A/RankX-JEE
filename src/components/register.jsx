import { useState } from "react";
import axios from "axios";
import {
  TextField,
  Typography,
  Button,
  Divider,
  MenuItem,
  Grid,
  Paper,
  Box
} from "@mui/material";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [accountType, setAccountType] = useState("");

  async function submit() {
    const data = {
      username: username,
      password: password,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      accountType: accountType,
    };
    const response = await axios.post(
      "http://127.0.0.1:5000/api/register",
      data
    );
    const message = await response.data;

    console.log(message);

    window.location.href = "/home";
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(to right, #0D47A1, #1565C0)",
        padding: 4,
      }}
    >
      {/* Left Branding Section */}
      <Grid
        item
        xs={12}
        md={6}
        textAlign="center"
        sx={{
          mb: { xs: 4, md: 0 },
          pr: { md: 8 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontSize: { xs: 32, md: 54 },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          RankX JEE
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#FFEB3B",
            fontSize: { xs: 15, md: 20 },
            mb: 3,
          }}
        >
          Join thousands of aspirants preparing for IIT & NIT
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#f0f0f0",
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.6,
            maxWidth: 520,
            mx: "auto",
          }}
        >
          Create your free account to access <b>mock tests</b>, <b>study
          material</b>, <b>performance tracking</b>, and more. Start building
          your path to success today.
        </Typography>
      </Grid>

      {/* Right Registration Card */}
      <Grid item xs={12} md={5}>
        <Paper
          elevation={10}
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            backgroundColor: "#fff",
            maxWidth: 460,
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 1,
              fontWeight: "bold",
              color: "#0D47A1",
            }}
          >
            Create a New Account
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 3, color: "text.secondary" }}
          >
            It's quick and easy.
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {/* Form Fields */}
          <TextField
            label="Username"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            size="small"
            type="password"
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Phone Number"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            label="Address"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            select
            label="Role"
            fullWidth
            size="small"
            sx={{ mb: 3 }}
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <MenuItem value={"u"}>Student</MenuItem>
            <MenuItem value={"w"}>Instructor</MenuItem>
          </TextField>

          {/* Terms */}
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mb: 2,
              color: "text.secondary",
              textAlign: "left",
            }}
          >
            By clicking on Register, you agree to share your provided details
            with us. Ensure your information is correct.
          </Typography>

          {/* Register Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: 48,
              mb: 2,
              backgroundColor: "#FF6F00",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: 16,
              "&:hover": { backgroundColor: "#E65100" },
            }}
            onClick={submit}
          >
            Register
          </Button>

          {/* Already have account */}
          <Box mt={2}>
            <Typography variant="body2">
              Already have an account?{" "}
              <a
                href="/login"
                style={{ color: "#0D47A1", fontWeight: "bold" }}
              >
                Login here
              </a>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Register;
