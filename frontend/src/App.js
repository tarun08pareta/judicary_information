import "./css/App.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Privatejudge from "./components/Privatejudge";
import Privatelawyer from "./components/Privatelawyer";
import Privateregistrar from "./components/Privateregistrar";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AddCase from "./components/AddCase";
import Payment from "./components/Payment";
import UpdateCase from "./components/UpdateCase";
import SearchPastCase from "./components/SearchPastCase";
import CaseDetails from "./components/CaseDetails"
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScheduleForm from "./components/ScheduleForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [userType, setUserType] = useState("");
  const updateUserType = () => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      user = user.userType;
      setUserType(user);
    }
  };

  useEffect(() => {
    updateUserType();
    console.log(userType);
    window.addEventListener("storage", updateUserType);

    return () => {
      window.removeEventListener("storage", updateUserType);
    };
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<h1>Services page</h1>} />

        {userType === "judge" ? (
          <Route element={<Privatejudge />}>
            <Route path="/judge" element={<h1>Judge Dashboard</h1>} />
          </Route>
        ) : null}

        {userType === "lawyer" ? (
          <Route element={<Privatelawyer />}>
            <Route path="/lawyer" element={<h1>Lawyer Dashboard</h1>} />
          </Route>
        ) : null}

        {userType === "registrar" ? (
          <Route element={<Privateregistrar />}>
            <Route path="/registrar" element={<h1>Registrar Dashboard</h1>} />
          </Route>
        ) : null}
        <Route path="/Payment" element={<Payment />} />
        <Route path="/registrar/addnewcase" element={<AddCase />} />
        <Route path="/registrar/updatecase" element={<UpdateCase />} />
        <Route path="/pastcases" element={<SearchPastCase/>} />
        <Route path="/pastcases/casedetails" element={<CaseDetails/>} />
        <Route path="/registrar/schedulecase" element={<ScheduleForm/>} />
        <Route path="/termsofuse" element={<TermsOfUse/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={updateUserType} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
