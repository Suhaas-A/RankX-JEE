import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import RankXJEE from "./components/home";
import Maths from "./components/maths";
import Physics from "./components/physics";
import Chemistry from "./components/chemistry";
import AI from "./components/ai";
import ForgetPassword from "./components/forget_password";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/register" element={ <Register /> }></Route>
        <Route path="/" element={ <RankXJEE /> }></Route>
        <Route path="/home" element={ <RankXJEE /> }></Route>
        <Route path="/maths" element={ <Maths /> }></Route>
        <Route path="/physics" element={ <Physics /> }></Route>
        <Route path="/chemistry" element={ <Chemistry /> }></Route>
        <Route path="/ai" element={ <AI /> }></Route>
        <Route path="/forget-password" element={ <ForgetPassword /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App