// AiPage.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Box,
  Divider,
  AppBar,
  Toolbar,
  Paper,
} from "@mui/material";
import axios from "axios"

// Local inline fallback logo
function InlineLogo({ size = 56 }) {
  return (
    <Box
      sx={{
        width: size + 18,
        height: size + 18,
        border: `3px solid #A51C30`,
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#FFFFFF",
        p: 1,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="100" height="100" rx="8" fill="#FFFFFF" />
        <g transform="translate(8,8)">
          <rect x="0" y="0" width="64" height="64" rx="6" fill="#A51C30" stroke="#2E2E2E" strokeWidth="2" />
          <g transform="translate(10,10)" fill="#FFFFFF">
            <rect x="0" y="28" width="6" height="8" />
            <rect x="10" y="20" width="6" height="16" />
            <rect x="22" y="12" width="6" height="24" />
            <rect x="34" y="4" width="6" height="32" />
          </g>
        </g>
      </svg>
    </Box>
  );
}

export default function AiPage({LogoComponent = null }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);

  const LogoToRender = LogoComponent || InlineLogo;

  async function GetResponse() {
    let response_ = await axios.post("http://127.0.0.1:5000/api/ai-prompt", {'prompt': query});
    console.log(response_.data.response);
    setResponse(response_.data.response);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f9f9f9" }}>
      {/* Header */}
      <AppBar position="sticky" sx={{ bgcolor: "#fbc02d" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
            RankX JEE
          </Typography>
          <Button onClick={function() {window.location = '/home'}} sx={{ color: "#000", fontWeight: 500 }}>
            Back to Home
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4, maxWidth: "md", flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
        {/* AI Assistant Card */}
        <Card sx={{ backgroundColor: "background.paper", boxShadow: 4, borderRadius: 3 }}>
          <CardContent>
            {/* Header */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <LogoToRender size={56} />
              <Typography variant="h5" color="primary" gutterBottom>
                AI Study Assistant
              </Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* Input Box */}
            <TextField
              fullWidth
              multiline
              rows={5}
              placeholder="Ask RankX AI anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              variant="outlined"
              margin="normal"
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
              }}
            />

            <Button
              variant="contained"
              onClick={GetResponse}
              sx={{
                bgcolor: "primary.main",
                color: "#fff",
                mt: 1,
                textTransform: "none",
                fontWeight: "bold",
                px: 3,
                ":hover": { bgcolor: "secondary.main" },
              }}
            >
              Submit Query
            </Button>
          </CardContent>
        </Card>

        {/* Response Section styled like ChatGPT */}
        {response && (
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: "#ffffff",
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography variant="subtitle2" sx={{ color: "#555", mb: 1 }}>
              AI Response
            </Typography>
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 2,
                fontFamily: "'Segoe UI', Arial, sans-serif",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                color: "#333",
              }}
            >
              {response}
            </Box>
          </Paper>
        )}
      </Container>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: "#fbc02d", textAlign: "center", p: 2, mt: 4 }}>
        <Typography variant="body2" sx={{ color: "#000" }}>
          © 2025 RankX JEE | Empowering Students with AI
        </Typography>
      </Box>
    </Box>
  );
}
