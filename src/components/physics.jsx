import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Divider,
  TextField,
} from "@mui/material";
import { AppBar, Toolbar, Box } from "@mui/material";
import { useState } from "react";
import logo from "./logo.png";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#ffffff", boxShadow: 1, borderBottom: "3px solid #fbc02d" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="RankX Logo" style={{ width: 48, height: 48, marginRight: 12 }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2c3e50" }}>
            RankX JEE
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button onClick={function() {window.location = '/home'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>Home</Button>
          <Button onClick={function() {window.location = '/maths'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>Maths</Button>
          <Button onClick={function() {window.location = '/physics'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>Physics</Button>
          <Button onClick={function() {window.location = '/chemistry'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>Chemistry</Button>
          <Button onClick={function() {window.location = '/ai'}} sx={{ color: "#2c3e50", fontWeight: 500 }}>AI</Button>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            onClick={() => (window.location = "login")}
            sx={{ borderColor: "#fbc02d", color: "#fbc02d", fontWeight: 600, textTransform: "none" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => (window.location = "/register")}
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

// Physics books array
const physicsBooks = [
  { title: "DC Pandey Electricity And Magnetism", link: "https://drive.google.com/file/d/1bJ4iPCwf0codjf4Btg7qONshuN288l-/view?usp=drive_link" },
  { title: "DC Pandey Mechanics Volume 1", link: "https://drive.google.com/file/d/1Zn6Tbz5F64O6SFvEXyJyIrd3icQiWQuy/view?usp=drive_link" },
  { title: "DC Pandey Mechanics Volume 2", link: "https://drive.google.com/file/d/1szHPWTwmqYCCwAQl9maQz0M8eQy4qDLt/view?usp=drive_link" },
  { title: "DC Pandey Optics And Modern Physics", link: "https://drive.google.com/file/d/17G9XQWFks2iPGslT1v_T_bMeYljHlbto/view?usp=drive_link" },
  { title: "DC Pandey Waves And Thermodynamics", link: "https://drive.google.com/file/d/1qCU5djxy8yUQPq8gbM5X9PMrDG4YnCZr/view?usp=drive_link" },
  { title: "Halliday_Resnick_Walker", link: "https://drive.google.com/file/d/1Ip1QfJLYuCk_MJJmnoipf8VsY_o4RBw0/view?usp=drive_link" },
  { title: "HCV vol 1", link: "https://drive.google.com/file/d/1iAmlv--KinwPr_2rIAEyQ4ZHJrv9ZXxt/view?usp=drive_link" },
  { title: "HCV vol 2", link: "https://drive.google.com/file/d/1DB6BxIbSnpu9e0pSBJuXGT2B6teWg9L9/view?usp=drive_link" },
  { title: "Irodov-Problems_in_General_Physics", link: "https://drive.google.com/file/d/1Lbn2GO6IeBr83vDniCfqb3hCjnQpC-oo/view?usp=drive_link" },
  { title: "SL Arora - Simplified Physics _ class 11 (vol-1)", link: "https://drive.google.com/file/d/1s6UjFHL8Nm8fBQHUEoaUD1RHBQ1DcztY/view?usp=drive_link" },
  { title: "SL Arora - Simplified Physics _ class 11 (vol-2)", link: "https://drive.google.com/file/d/1kgnKyMWEh-VFVVFm7qTWNq9oId1ognk6/view?usp=drive_link" },
  { title: "SL Arora - Simplified Physics _ class 12 (vol-1)", link: "https://drive.google.com/file/d/1jxPtooGwXOtR-0B3T4cJhrwknEF-0-ku/view?usp=drive_link" },
  { title: "SL Arora - Simplified Physics _ class 12 (vol-2)", link: "https://drive.google.com/file/d/1SIW11Q4krECvGW9yNgHiNd_jPMNPbp4d/view?usp=drive_link" },
  { title: "Solution to H. C. Verma", link: "https://drive.google.com/file/d/1Q2Ng8bLAXgbxfsYvJY9r7v0KaC23yIFn/view?usp=drive_link" },
  { title: "Solutions-to-IE-Irodov-Volume-I", link: "https://drive.google.com/file/d/1nai2ok6YT_Q_ge8YOMGyXWriypk1Rmr2/view?usp=drive_link" },
  { title: "Solutions-to-IE-Irodov-Volume-II", link: "https://drive.google.com/file/d/1l0GxQrUayAUIR_BcaAGB6rBaNimn0Brl/view?usp=drive_link" },
  { title: "SS Krotov–Problems In Physics", link: "https://drive.google.com/file/d/1EPYtFnsg8U3cW-a0tf2U03KJ-eT37voR/view?usp=drive_link" },
];

// Physics PYQs array
const physicsPYQs = [
  { title: "43 Years JEE Physics IIT", link: "https://drive.google.com/file/d/1gJYrYVkQ7jcGYhVxkRoe2Pdm1VtQ1Vp8/view?usp=drive_link" },
  { title: "Arihant 20 Years JEE Mains Physics", link: "https://drive.google.com/file/d/1pCtvgWiULssp4wCzFX4G8YZBR-zYq10W/view?usp=drive_link" },
  { title: "Disha 20 Years JEE MAIN Physics", link: "https://drive.google.com/file/d/1hLvtV8U0Uf8fPSG2rmieMCXEjJObyrIO/view?usp=drive_link" },
  { title: "Disha Physics 43 Years JEE Advanced + JEE Main", link: "https://drive.google.com/file/d/1CD1lroW1TaOQpgpRdFVxtXPnbO7_XMzU/view?usp=drive_link" },
  { title: "Wiley's 22 Years JEE Advanced Physics", link: "https://drive.google.com/file/d/1A0ixq4dpXlSOeXn2Fhgpv9ICgNxKuPwy/view?usp=drive_link" },
];

// Extra Material for Physics
const physicsExtra = [
  { title: "ARIHANT PHYSICS HANDBOOK", link: "https://drive.google.com/file/d/1KzvhJVwEGUgt4T0QcEkpxbFFB52rCOGz/view?usp=drive_link" },
  { title: "Arihant Physics Quick Book By DC Pandey", link: "https://drive.google.com/file/d/166imQbTbfHeobcOHWcqAmeXRXR1_HMZY/view?usp=drive_link" },
  { title: "Disha Physics 500+ BlockBuster Problems for JEE Advanced", link: "https://drive.google.com/file/d/1iCywfKyW7uaeK9Gmw__iB1eACz42AtvY/view?usp=drive_link" },
  { title: "Hand Book (Physics)", link: "https://drive.google.com/file/d/1jqviU0mmmwNDqBPZRaPyFxpEtPJ2n0f8/view?usp=drive_link" },
  { title: "Handbook_of_Physics_ALLEN", link: "https://drive.google.com/file/d/1jEUm59KASzaovhSsTjef7HkFi-r17bgR/view?usp=drive_link" },
  { title: "NCERT Exemplar Physics 11", link: "https://drive.google.com/file/d/1ynBX2NvnmF4Ce_b-M3GC0H5Cs0GuaQ-5/view?usp=drive_link" },
  { title: "NCERT Exemplar Physics 12", link: "https://drive.google.com/file/d/1V_iSEMWYT7riwz6iVrtJ13-olNa-MRk0/view?usp=drive_link" },
  { title: "NCERT EXEMPLAR PHYSICS SOLUTION CLASS 11 - ARIHANT", link: "https://drive.google.com/file/d/1U-uzOxi165pn2_FtpA6EwgCpB8lSURWp/view?usp=drive_link" },
  { title: "NCERT EXEMPLAR PHYSICS SOLUTION CLASS 12 - ARIHANT", link: "https://drive.google.com/file/d/1IgaB4kbIWsE0qR_7cFnS0qxADkJebnU3/view?usp=drive_link" },
  { title: "Physics Formula Sheet by CrashUp (A4 size)", link: "https://drive.google.com/file/d/1NjssOggyRIk0ctROF92cd0aAHoAR07gN/view?usp=drive_link" },
  { title: "Physics Formula Sheet by CrashUp (poster size)", link: "https://drive.google.com/file/d/1vAdpxILOfL9FcwXlsksb0iBzJWj06icl/view?usp=drive_link" },
];

export default function Physics() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = physicsBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const generatePdfButtons = (books) =>
    books.map((book, i) => (
      <ListItem key={i} sx={{ p: 0, mb: 1 }}>
        <Button
          variant="contained"
          href={book.link}
          target="_blank"
          rel="noopener"
          sx={{
            textTransform: "none",
            width: "100%",
            justifyContent: "flex-start",
            borderRadius: 2,
            py: 1.5,
            background: "linear-gradient(90deg, #1976d2, #42a5f5)",
            "&:hover": { background: "linear-gradient(90deg, #1565c0, #1e88e5)" },
          }}
        >
          {book.title}
        </Button>
      </ListItem>
    ));

  const generatePYQButtons = (pyqs) =>
    pyqs.map((pyq, i) => (
      <ListItem key={i} sx={{ p: 0, mb: 1 }}>
        <Button
          variant="contained"
          href={pyq.link}
          target="_blank"
          rel="noopener"
          sx={{
            textTransform: "none",
            width: "100%",
            justifyContent: "flex-start",
            borderRadius: 2,
            py: 1.5,
            background: "linear-gradient(90deg, #1976d2, #42a5f5)",
            "&:hover": { background: "linear-gradient(90deg, #1565c0, #1e88e5)" },
          }}
        >
          {pyq.title}
        </Button>
      </ListItem>
    ));

  const generateExtraButtons = (materials) =>
    materials.map((item, i) => (
      <ListItem key={i} sx={{ p: 0, mb: 1 }}>
        <Button
          variant="outlined"
          href={item.link}
          target="_blank"
          rel="noopener"
          sx={{
            textTransform: "none",
            width: "100%",
            justifyContent: "flex-start",
            borderRadius: 2,
            py: 1.5,
            color: 'white',
            background: "linear-gradient(90deg, #1976d2, #42a5f5)",
            "&:hover": { background: "linear-gradient(90deg, #1565c0, #1e88e5)" },
          }}
        >
          {item.title}
        </Button>
      </ListItem>
    ));

  return (
    <>
      <Header />
      <Container sx={{ mt: 4, mb: 6 }}>
        <Button onClick={() => (window.location = "/home")} variant="outlined" color="primary" sx={{ mb: 3, textTransform: "none" }}>
          ← Back
        </Button>

        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
          Physics
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for a Physics book..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 4 }}
        />

        {/* Books Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0", mb: 1 }}>
              Books
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List>{generatePdfButtons(filteredBooks)}</List>
          </CardContent>
        </Card>

        {/* PYQs Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0", mb: 1 }}>
              PYQs
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List>{generatePYQButtons(physicsPYQs)}</List>
          </CardContent>
        </Card>

        {/* Extra Material Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1565c0", mb: 1 }}>
              Extra Material
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List>{generateExtraButtons(physicsExtra)}</List>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
