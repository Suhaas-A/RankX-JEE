import { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Divider,
  Typography,
  Box,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel
} from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    const data = {
      username: username,
      password: password,
    };
    const response = await axios.post(
      "http://127.0.0.1:5000/api/login",
      data
    );
    const message = await response.data;

    console.log(message);

    sessionStorage.setItem("accessToken", message["accessToken"]);

    if (message["accessToken"] != null) {
      window.location.href = "/home";
    }
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
          pr: { md: 8 }, // push login card away
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontSize: { xs: 36, md: 60 },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          RankX JEE
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#FFEB3B",
            fontSize: { xs: 16, md: 22 },
            mb: 3,
          }}
        >
          Crack JEE Mains & Advanced with Smart Practice
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#f0f0f0",
            fontSize: { xs: 14, md: 18 },
            lineHeight: 1.6,
            maxWidth: 520,
            mx: "auto",
          }}
        >
          Access <b>mock tests</b>, <b>past year papers</b>, personalized
          study plans, and <b>performance analytics</b> to supercharge your
          IIT/NIT preparation. Start your journey today 🚀
        </Typography>
      </Grid>

      {/* Right Login Card */}
      <Grid item xs={12} md={5}>
        <Paper
          elevation={10}
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            backgroundColor: "#fff",
            maxWidth: 420,
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: "bold",
              color: "#0D47A1",
              letterSpacing: 0.5,
            }}
          >
            Student Login
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Roll Number / Email"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            sx={{ mb: 2 }}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
            sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={submit}
            sx={{
              height: 48,
              mb: 2,
              backgroundColor: "#FF6F00",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: 16,
              "&:hover": { backgroundColor: "#E65100" },
            }}
          >
            Login
          </Button>

          <Box mb={2}>
            <a href="/forget-password" style={{ color: "#0D47A1", fontWeight: 500 }}>
              Forgot Password?
            </a>
          </Box>

          <Divider sx={{ mb: 2 }}>OR</Divider>

          <Button
            onClick={() => (window.location.href = "/register")}
            fullWidth
            variant="outlined"
            sx={{
              height: 48,
              borderColor: "#0D47A1",
              color: "#0D47A1",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: 16,
              "&:hover": { backgroundColor: "#E3F2FD" },
            }}
          >
            New Student? Register Here
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
