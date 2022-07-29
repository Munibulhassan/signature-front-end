import "./App.css";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Team from "./pages/Team";
import Signature from "./pages/Signature";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agreement from "./pages/Agreement";
import "./responsive.css"
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Login />} />
        <Route path="/signature" element={<Signature />} />
        <Route path="/team" element={<Team />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/agreement" element = {<Agreement/>}

        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
