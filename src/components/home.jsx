import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, Twitter, YouTube, Instagram, LinkedIn } from "@mui/icons-material";
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Paper } from '@mui/material';
import { useState, useEffect } from "react";
import logo from "./logo.png"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"

// A custom carousel built using MUI styling (no external carousel library)
function MUICarousel() {
  const items = [
    { title: "Boost Your JEE Prep", image: img1 },
    { title: "AI Powered Study Assistant", image: img2 },
    { title: "Access Free PDFs & PYQs", image: img3 },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <Box sx={{ width: "100%", position: "relative", borderRadius: 2, overflow: "hidden", marginTop: '2.5vh'}}>
      {/* Slide */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, md: 600 },
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundImage: `url(${items[index].image})`,
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.5s ease-in-out",
          backgroundColor: 'rgb(20, 20, 20)',
        }}
        role="img"
        aria-label={items[index].title}
      />

      {/* Caption */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: 16,
          bgcolor: "rgba(0,0,0,0.5)",
          color: "#fff",
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6">{items[index].title}</Typography>
      </Box>

      {/* Prev / Next buttons */}
      <Button
        onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
        sx={{ position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)", bgcolor: "rgba(0,0,0,0.35)", color: "#fff", minWidth: 40 }}
      >
        ‹
      </Button>
      <Button
        onClick={() => setIndex((i) => (i + 1) % items.length)}
        sx={{ position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)", bgcolor: "rgba(0,0,0,0.35)", color: "#fff", minWidth: 40 }}
      >
        ›
      </Button>

      {/* Indicators */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1, gap: 1 }}>
        {items.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: i === index ? 14 : 10,
              height: i === index ? 14 : 10,
              borderRadius: "50%",
              bgcolor: i === index ? "primary.main" : "grey.400",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

const subjects = [
  {
    name: 'Maths',
    icon: <CalculateIcon sx={{ fontSize: 48, color: 'white' }} />,
    bgGradient: 'linear-gradient(135deg, #FF6B6B, #FF3D71)',
    subtitle: 'Mathematics',
    description:
      'Explore numbers, equations, and theorems that form the foundation of science and engineering.',
  },
  {
    name: 'Physics',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 48, color: 'white' }} />,
    bgGradient: 'linear-gradient(135deg, #42A5F5, #1E88E5)',
    subtitle: 'Physics',
    description:
      'Understand the principles governing matter, energy, motion, and forces in the universe.',
  },
  {
    name: 'Chemistry',
    icon: <ScienceIcon sx={{ fontSize: 48, color: 'white' }} />,
    bgGradient: 'linear-gradient(135deg, #66BB6A, #43A047)',
    subtitle: 'Chemistry',
    description:
      'Dive into the study of substances, their properties, reactions, and how they interact.',
  },
];

function SubjectsCard() {
  return (
    <Box
  sx={{
    minHeight: '75vh',
    bgcolor: '#f0f2f5',
    px: { xs: 2, sm: 4, md: 6, lg: 8 },
    py: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5vh',
    marginBottom: '5vh'
  }}
>
  <Grid
    container
    spacing={4}
    sx={{
      width: '100%',
      maxWidth: 1200,
    }}
    justifyContent="center"
  >
    {subjects.map(({ name, icon, bgGradient, subtitle, description }) => (
      <Grid
        key={name}
        item
        xs={12}
        md={4}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Paper
          elevation={10}
          onClick={function() {window.location = '/' + name}}
          sx={{
            borderRadius: 4,
            p: 4,
            width: '100%',
            maxWidth: 320, // slightly narrower width
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              mx: 'auto',
              mb: 3,
              borderRadius: '50%',
              background: bgGradient,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            {icon}
          </Box>
          <Typography variant="h5" fontWeight="700" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight="600" gutterBottom>
            {subtitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Box>

  );
}

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#ffffff",
        boxShadow: 1,
        borderBottom: "3px solid #fbc02d",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo + Website Name */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo} // Replace with your logo
            alt="RankX Logo"
            style={{ width: 48, height: 48, marginRight: 12 }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#2c3e50",
              fontFamily: "'Segoe UI', Arial, sans-serif",
            }}
          >
            RankX JEE
          </Typography>
        </Box>

        {/* Navigation buttons like Allen */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button onClick={function() {window.location = '/home'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>Home</Button>
          <Button onClick={function() {window.location = '/maths'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>Maths</Button>
          <Button onClick={function() {window.location = '/physics'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>Physics</Button>
          <Button onClick={function() {window.location = '/chemistry'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>Chemistry</Button>
          <Button onClick={function() {window.location = '/ai'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>AI</Button>
        </Box>

        {/* Login / Signup */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            onClick={function() {window.location = 'login'}}
            sx={{
              borderColor: "#fbc02d",
              color: "#fbc02d",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={function() {window.location = '/register'}}
            sx={{
              bgcolor: "#fbc02d",
              color: "#000",
              fontWeight: 600,
              textTransform: "none",
              ":hover": { bgcolor: "#f9a825" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// ✅ Footer
function Footer() {
  return (
    <Box sx={{ bgcolor: "#212121", color: "#fff", textAlign: "center", p: 3 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Aakash_Institute_Logo.svg/512px-Aakash_Institute_Logo.svg.png"
              alt="Aakash Logo"
              style={{ width: 120 }}
            />
            <Typography variant="body2" sx={{ color: "#fff", mt: 1 }}>
              Medical | JEE | Foundations
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            Follow Us:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <Link href="#" color="inherit" sx={{ mx: 1 }}><Facebook /></Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}><Twitter /></Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}><YouTube /></Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}><Instagram /></Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}><LinkedIn /></Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
            Aakash Educational Services Limited
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            <strong>Registered Office Address:</strong><br />
            No. 52, 2nd Floor, Kundanhalli Gate, Varthur Road,<br />
            Opposite SSK Kalyan Mandap, Whitefield, Bengaluru 560037<br />
            CIN: U80302KA2007PLC150057
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff", mt: 1 }}>
            Telephone: 011-47623300
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            Fax: +91-11-47623472
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            Email: <Link href="mailto:corporate@aesl.in" color="inherit">corporate@aesl.in</Link>
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ color: "#fff", mt: 3 }}>
        © 2025 RankX JEE | Empowering Students with AI
      </Typography>
    </Box>
  );
}

// ✅ Home Page
export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Header />

      <MUICarousel />

      {/* Main Content */}
      <Container sx={{ flex: 1, mt: 6, mb: 6 }}>
        {/* Title */}
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Welcome to RankX JEE
        </Typography>

        <SubjectsCard />

        {/* ✅ Personal AI Tutor Section */}
        <Box
          sx={{
            bgcolor: "#0d1b2a",
            color: "#fff",
            py: 6,
            px: 3,
            borderRadius: 4,
            textAlign: "center",
            marginBottom: '5vh',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Personal AI Tutor 🤖
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            Experience personalized JEE preparation with our advanced AI Tutor. Get instant help with any subject, concept, or problem.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={5}>
              <Box sx={{ bgcolor: "#1b263b", p: 3, borderRadius: 3, height: "100%" }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  💡 Smart Learning Assistant
                </Typography>
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  <li>Ask questions in natural language</li>
                  <li>Get step-by-step explanations</li>
                  <li>Upload study materials for analysis</li>
                  <li>Save chat history across devices</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ bgcolor: "#3a0ca3", p: 3, borderRadius: 3, height: "100%" }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  ⚡ Why Choose AI Tutor?
                </Typography>
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  <li>Available 24/7 for instant help</li>
                  <li>Personalized learning experience</li>
                  <li>Covers all JEE subjects</li>
                  <li>Secure and private conversations</li>
                </ul>
              </Box>
            </Grid>
          </Grid>

          <Button
            component={Link}
            to="/ai"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
          >
            Start Learning with AI Tutor
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
