import "./App.css";

import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Setting from "./pages/Setting/Setting";

 
import Team from "./pages/Team/Team";
import TestForm from "./components/TestForm";
import Signature from "./pages/Signature/Signature";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agreement from "./pages/Agreement/Agreement";
// import "./responsive.css"s
function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<TestForm />} /> */}
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
