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

// Maths Books
const mathsBooks = [
  { title: "Advanced Problem In Mathematics By Vikas Gupta", link: "https://drive.google.com/file/d/1OAeCAfAe-2Q_AAIrGilzyXIQ_pxlwqfc/view?usp=drive_link" },
  { title: "Arihant Algebra", link: "https://drive.google.com/file/d/1eqC22NguO8qbNQ8NOCjXe66Nklx1cdaJ/view?usp=drive_link" },
  { title: "Arihant Coordinate Geometry", link: "https://drive.google.com/file/d/1r8Pg_OLoUtHfoP694DeLj3OaS6qKlLDT/view?usp=drive_link" },
  { title: "Arihant Differential Calculus", link: "https://drive.google.com/file/d/1UEOwi53SxcvKQwgoUPN6XqZ9TdUhTtlz/view?usp=drive_link" },
  { title: "Arihant Integral Calculus", link: "https://drive.google.com/file/d/1cfAtcaurBnKB49-z2fskWgq_wj8Evdxv/view?usp=drive_link" },
  { title: "Arihant Play With Graphs", link: "https://drive.google.com/file/d/1NPDuDgkaA6CEylhFqd8JRgUaO6n1uov7/view?usp=drive_link" },
  { title: "Arihant Trigonometry", link: "https://drive.google.com/file/d/1j6oUsdn0Lv_BS3ixFbd1Mn7_b7G3tI1Q/view?usp=drive_link" },
  { title: "Arihant Vector And 3D Geometry", link: "https://drive.google.com/file/d/1LSBp6tL-E1RLd-BhmRpr7TMzc977Moc6/view?usp=drive_link" },
  { title: "Cengage Algebra", link: "https://drive.google.com/file/d/1hX6ZW07D2KQVE8XE8KCU0egy_XJxtdLh/view?usp=drive_link" },
  { title: "Cengage Calculus", link: "https://drive.google.com/file/d/102l37Uvp7BpeNB2B-utqFU10hR5E7Een/view?usp=drive_link" },
  { title: "Cengage Coordinate Geometry", link: "https://drive.google.com/file/d/15z_U5mxOEOJR1kzx9miiWjygFZKvInSZ/view?usp=drive_link" },
  { title: "Cengage Trigonometry", link: "https://drive.google.com/file/d/1cnsVWIwIGMVQ3qrmxfraWtRsUvwLnPWm/view?usp=drive_link" },
  { title: "Cengage Vectors And 3D Geometry", link: "https://drive.google.com/file/d/12AAeq2W_yVUsX_i3NU1xy7__vng_06Ez/view?usp=drive_link" },
  { title: "Hints And Solutions Of Sameer Bansal Calculus", link: "https://drive.google.com/file/d/1mnYMIG4_SJPkTlPYl4rD7j2MPByuhsVx/view?usp=drive_link" },
  { title: "RD Sharma Objective For JEE", link: "https://drive.google.com/file/d/1xxde2rnB3kh-1rVz2IdT3UDlm7OxNr54/view?usp=drive_link" },
  { title: "RD Sharma Objective For JEE", link: "https://drive.google.com/file/d/1etmhHkDamBFiE5pOaNFl2B3k2uLGbkVy/view?usp=drive_link" },
  { title: "Sameer Bansal Calculus", link: "https://drive.google.com/file/d/1gYSqIbT1FNUDTYaRUoJeUSzyZDR9_A2V/view?usp=drive_link" },
  { title: "Solutions To Advance Problems In Mathematics By Vikas Gupta", link: "https://drive.google.com/file/d/1KG_GKD3d5xTtEfC6Twxgedbxkkwhswdz/view?usp=drive_link" },
  { title: "Willey's Mathematics Algebra", link: "https://drive.google.com/file/d/1qxe92o4n448P-hh81m0rHexBr2HK-PUV/view?usp=drive_link" },
  { title: "Willey's Mathematics Calculus", link: "https://drive.google.com/file/d/1oZ00Px7p81DminqsGD8HbdZPcJtm-q50/view?usp=drive_link" },
  { title: "Willey's Mathematics Coordinate Geometry", link: "https://drive.google.com/file/d/1hYiPRYjyf1SQnn4KDlYh_sGLkstfvjRT/view?usp=drive_link" },
  { title: "Willey's Trigonometry And Vectors", link: "https://drive.google.com/file/d/1kFzXeMAnC6Hq6WFOmO_l6y9VYzl-Laew/view?usp=drive_link" },
];

// Maths PYQs
const mathsPYQs = [
  { title: "43 Years Chapterwise Topicwise Solved Papers 2021-1979 IIT JEE Mathematics", link: "https://drive.google.com/file/d/1fc2_NCihRQjYiwhvpp1AUhJ6EMhhejXU/view?usp=drive_link" },
  { title: "Arihant 20 Years JEE Mains Mathematics", link: "https://drive.google.com/file/d/1snIVtOnQaQiNFXKHKo48nujJPccCkoh4/view?usp=drive_link" },
  { title: "Disha 20 Years JEE MAIN Chapter-wise Solved Papers", link: "https://drive.google.com/file/d/1njOEuA-j7rkGEmm7ZlEwdKJ4iEJpZN58/view?usp=drive_link" },
  { title: "Disha Mathematics 43 Years JEE Advanced + JEE Main Chapterwise", link: "https://drive.google.com/file/d/12bzgc01XfSWwIjTgdiC8rShNEyr3xv4I/view?usp=drive_link" },
  { title: "Wiley's 22 Years JEE Advanced Chapterwise Solved Papers", link: "https://drive.google.com/file/d/1m-E2M6r28xSdU4vb_uab9heyFotNg5Tx/view?usp=drive_link" },
];

// Extra Material for Maths
const mathsExtraMaterial = [
  { title: "ARIHANT Mathematics Handbook", link: "https://drive.google.com/file/d/1jXH4zln8JoIOG4mhebmkHz37_ytE7OgX/view?usp=drive_link" },
  { title: "Disha Mathematics 500+ BlockBuster Problems for JEE Advanced", link: "https://drive.google.com/file/d/1qZQstChTBbpMZ05O9mlNTKDeWQC1cB8f/view?usp=drive_link/" },
  { title: "Hand Book (Maths)", link: "https://drive.google.com/file/d/1ggXsF232p16gngKdTieX7PAfQKORvHkf/view?usp=drive_link" },
  { title: "Handbook_of_Mathematics_ALLEN", link: "https://drive.google.com/file/d/1hfo69CY-rBud6s5PE1wWKDAnkRU7JYYp/view?usp=drive_link" },
  { title: "NCERT Exemplar Maths 11", link: "https://drive.google.com/file/d/1WVtznoK_2i0-jbLageWDojX3PaI-AtY_/view?usp=drive_link" },
  { title: "NCERT Exemplar Maths 12", link: "https://drive.google.com/file/d/1yTMEueqezw9-p5z6QVH7nmMPBBEfN89Y/view?usp=drive_link" },
  { title: "NCERT EXEMPLAR MATHS SOLUTION CLASS 11 - ARIHANT", link: "https://drive.google.com/file/d/1llNYzjQwFXbIDoFryZ7N4DLEx4vamaQM/view?usp=drive_link" },
  { title: "NCERT EXEMPLAR MATHS SOLUTION CLASS 12 - ARIHANT", link: "https://drive.google.com/file/d/199V8fOc922OQpwXP_JKxsLy5bsqScu0w/view?usp=drive_link" },
];

export default function Maths() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = mathsBooks.filter((book) =>
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
            background: "linear-gradient(90deg, #e53935, #ef5350)",
            "&:hover": { background: "linear-gradient(90deg, #b71c1c, #d32f2f)" },
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
            background: "linear-gradient(90deg, #c62828, #e53935)",
            "&:hover": { background: "linear-gradient(90deg, #b71c1c, #d32f2f)" },
          }}
        >
          {pyq.title}
        </Button>
      </ListItem>
    ));

  const generateExtraMaterialButtons = (books) =>
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
            background: "linear-gradient(90deg, #e53935, #ef5350)",
            "&:hover": { background: "linear-gradient(90deg, #b71c1c, #d32f2f)" },
          }}
        >
          {book.title}
        </Button>
      </ListItem>
    ));

  return (
    <>
      <Header />
      <Container sx={{ mt: 4, mb: 6 }}>
        <Button onClick={() => (window.location = "/home")} variant="outlined" color="error" sx={{ mb: 3, textTransform: "none" }}>
          ← Back
        </Button>

        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#d32f2f" }}>
          Mathematics
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for a Maths book..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ mb: 4 }}
        />

        {/* Books Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#b71c1c", mb: 1 }}>
              Books
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List>{generatePdfButtons(filteredBooks)}</List>
          </CardContent>
        </Card>

        {/* PYQs Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#b71c1c", mb: 1 }}>
              PYQs
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List>{generatePYQButtons(mathsPYQs)}</List>
          </CardContent>
        </Card>

        {/* Extra Material Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 4 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#b71c1c", mb: 1 }}>
              Extra Material
            </Typography>
            <Divider sx={{ my: 1 }} />
            <List>{generateExtraMaterialButtons(mathsExtraMaterial)}</List>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
