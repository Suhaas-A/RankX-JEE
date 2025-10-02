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

// Chemistry books array
const chemistryBooks = [
  { title: "Advanced Problems In organic Chemistry MS Chauhan", link: "https://drive.google.com/file/d/1iy1exdSj-YsZHjX0DZ64S_CBRgaGFtJ0/view?usp=drive_link" },
  { title: "Advanced Problems In Organic Chemistry MS Chauhan", link: "https://drive.google.com/file/d/1z6rA1xEKJiDqkNjBX1hT05UeFvrGJKs5/view?usp=drive_link" },
  { title: "Cengage Inorganic Chemistry Part-1 Solutions", link: "https://drive.google.com/file/d/1BE619z3qoFO5U_7-DEAqIAipdN1sL6Gy/view?usp=drive_link" },
  { title: "Cengage Inorganic Chemistry Part 1", link: "https://drive.google.com/file/d/1NbFYHxWWra75sfAE8BESEIYs5MJhxBXl/view?usp=drive_link" },
  { title: "Cengage Inorganic Chemistry Part-2", link: "https://drive.google.com/file/d/1ZtOHxiJy4e66VDDH32s1CDVUy7KnQX--/view?usp=drive_link" },
  { title: "Cengage Organic Chemistry Part-1 solutions", link: "https://drive.google.com/file/d/1NxM1xBhpNTdtPEz-NybTnOHiW8hHxWVV/view?usp=drive_link" },
  { title: "Cengage Organic Chemistry Part-1", link: "https://drive.google.com/file/d/1uyU-WKDcuaykS-gX1edx93cAEnl2C6Vn/view?usp=drive_link" },
  { title: "Cengage Physical Chemistry Part-1", link: "https://drive.google.com/file/d/1CeJ5JORr2nGAtJZwhgebhG9EbSuKskjP/view?usp=drive_link" },
  { title: "Cengage Physical Chemistry Part-2", link: "https://drive.google.com/file/d/1vi-YiV9axPERoMoaqCcPc1INURSRHFdG/view?usp=drive_link" },
  { title: "Cengage Physical Chemistry Solutions", link: "https://drive.google.com/file/d/1SGE0GxhDEsUuaPYTrJad0bPWHEXmtdQ8/view?usp=drive_link" },
  { title: "Elementary Problems In Organic Chemistry MS Chauhan", link: "https://drive.google.com/file/d/1CMYmEM0o2Fs7GRiniSxw2fEqO_yAPnBL/view?usp=drive_link" },
  { title: "Elementary Problems In Organic Chemistry MS Chauhan", link: "https://drive.google.com/file/d/1k428-Jk0Bsthpk16RdEi7pVDszMIPDpO/view?usp=drive_link" },
  { title: "JD Lee Inorganic Chemistry", link: "https://drive.google.com/file/d/1cVvvfHUzzBqht-0HGZg1mlvBsb9e4TEb/view?usp=drive_link" },
  { title: "Numerical Problems in Physical Chemistry", link: "https://drive.google.com/file/d/1g-yUcx1HvV5hH34mIKAt24nmfiCEMi8T/view?usp=drive_link" },
  { title: "Problems In Physical Chemistry By Narendra Awasthi", link: "https://drive.google.com/file/d/1JIffAFS7aiy0lExHrXt5rplnaRK_zIvY/view?usp=drive_link" },
  { title: "Problems In Physical Chemistry By Narendra Awasthi", link: "https://drive.google.com/file/d/1kTrA93eTcXLhFJDD0HgPZeh6cW2-Xid-/view?usp=drive_link" },
  { title: "Problems In Physical Chemistry By Narendra Awasthi", link: "https://drive.google.com/file/d/1-IIZo25N4FtUwLgn7iCtKVaADs66QyzD/view?usp=drive_link" },
  { title: "Solomon-Fryhle's Organic Chemistry", link: "https://drive.google.com/file/d/1Lugg-koSQASJE8trQGXc3LDy8VF6b4In/view?usp=drive_link" },
  { title: "Solution Manual Advanced Problems In Organic Chemistry", link: "https://drive.google.com/file/d/15FGQGw01jZVdUb7JxMfPHGhcLCmue2Xp/view?usp=drive_link" },
  { title: "Solution Manual Elementary Problems In Organic Chemistry", link: "https://drive.google.com/file/d/1BLICoT1tgROCgJJTUCAaA6lkmGLt3TD9/view?usp=drive_link" },
  { title: "Wiley Inorganic Chemistry", link: "https://drive.google.com/file/d/1pFGHuiDPf_RBu2-5_5QOXebwzMwivtKm/view?usp=drive_link" },
  { title: "Wiley Organic Chemistry", link: "https://drive.google.com/file/d/1xT8kmxUNUiBhigv-1rFPcqWetDRMf3Ms/view?usp=drive_link" },
  { title: "Wiley Physical Chemistry", link: "https://drive.google.com/file/d/135e7vLJEZqhsilxnIWu7fXUsmn9RYlV1/view?usp=drive_link" },
];

// Chemistry PYQs array
const chemistryPYQs = [
  { title: "43 Years Chapterwise Topicwise Solved Papers 1979-2021", link: "https://drive.google.com/file/d/13Lt0Oau1k-oC31hd15pj3djUiuzNN5CQ/view?usp=drive_link" },
  { title: "Arihant 20 Years JEE Mains Chemistry", link: "https://drive.google.com/file/d/1E4iU2zkkumh3AFrEyBnDoVFD2aaFFS0c/view?usp=drive_link" },
  { title: "Disha 20 Years JEE MAIN Chapter-wise Solved Papers", link: "https://drive.google.com/file/d/1WrxkTd5GAdFXRwS40QVzFL05G8549_5w/view?usp=drive_link" },
  { title: "Disha Chemistry 43 Years JEE Advanced + JEE Main Chapterwise & Topicwise", link: "https://drive.google.com/file/d/1xWDN8HXcYZwK3xPtStdHc3YlNZYViA5v/view?usp=drive_link" },
  { title: "Wiley's 22 Years JEE Advanced Chapterwise Solved Papers", link: "https://drive.google.com/file/d/1BiXGOTnSQZmwHbdHr11koHhgYFP4tq70/view?usp=drive_link" },
];

// Chemistry Extra Material array
const chemistryExtraMaterial = [
  { title: "ARIHANT Chemistry Handbook", link: "https://drive.google.com/file/d/1ky2esE2gIoPUil-MdPgKN0DrTB1q31G0/view?usp=drive_link" },
  { title: "Disha Chemistry 500+ BlockBuster Problems for JEE Advanced", link: "https://drive.google.com/file/d/1Y8aeEimz8LtaXd6-ef7W9b_7aPsam6Li/view?usp=drive_link" },
  { title: "Hand Book (Chemistry)", link: "https://drive.google.com/file/d/12ADLL18K2i1b5iYVS2QY_5BO9rlCmPGh/view?usp=drive_link" },
  { title: "Handbook of Chemistry ALLEN", link: "https://drive.google.com/file/d/10ppsTnXnLIAmqQt3TPDZRzEeHXnxNWrB/view?usp=drive_link" },
  { title: "NCERT Exemplar Chemistry 11", link: "https://drive.google.com/file/d/1u0FKhRwBZu3cRazDUnzWVV3DS1YXVSEo/view?usp=drive_link" },
  { title: "NCERT Exemplar Chemistry 12", link: "https://drive.google.com/file/d/1nUi4PNcvXY8lBKOHCIICfQygcNf5LVbi/view?usp=drive_link" },
  { title: "NCERT Exemplar Chemistry Solution Class 11 - ARIHANT", link: "https://drive.google.com/file/d/1Nz0hZrRJAnpfhJSP4e1Tclx7eJ7Id7aY/view?usp=drive_link" },
  { title: "NCERT Exemplar Chemistry Solution Class 12 - ARIHANT", link: "https://drive.google.com/file/d/1iiGh64iLicsOBKBv9TuCzynlHN1SYtTN/view?usp=drive_link" },
];

export default function Chemistry() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = chemistryBooks.filter((book) =>
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
            background: "linear-gradient(90deg, #388e3c, #81c784)",
            "&:hover": { background: "linear-gradient(90deg, #2e7d32, #66bb6a)" },
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
            background: "linear-gradient(90deg, #388e3c, #81c784)",
            "&:hover": { background: "linear-gradient(90deg, #2e7d32, #66bb6a)" },
          }}
        >
          {pyq.title}
        </Button>
      </ListItem>
    ));

  return (
    <>
      <Header />
      <Container sx={{ mt: 4, mb: 6 }}>
        <Button onClick={() => (window.location = "/home")} variant="outlined" sx={{ mb: 3, textTransform: "none" }}>
          ← Back
        </Button>

        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#388e3c" }}>
          Chemistry
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for a Chemistry book..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 4 }}
        />

        {/* Books Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2e7d32", mb: 1 }}>
              Books
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List>{generatePdfButtons(filteredBooks)}</List>
          </CardContent>
        </Card>

        {/* PYQs Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2e7d32", mb: 1 }}>
              PYQs
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List>{generatePYQButtons(chemistryPYQs)}</List>
          </CardContent>
        </Card>

        {/* Extra Material Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2e7d32", mb: 1 }}>
              Extra Material
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List>{generatePdfButtons(chemistryExtraMaterial)}</List>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
