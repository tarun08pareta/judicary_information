import React from 'react';
import img from "../images/img11.jpg"
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const Navigate=useNavigate();
    const goToLogin=(e)=>{
        e.preventDefault();
        Navigate('/Login')
    }
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <h1>Welcome to the Judiciary Information System!</h1>
          <p>Our mission is to provide a modern and user-friendly platform for managing legal cases and court proceedings. Our system is designed to streamline the entire process, from case creation to final judgment.</p>
          <p>We're committed to providing excellent customer support, and our team is always here to help you with any questions or issues you may have. We believe that everyone deserves access to justice, and we're proud to be a part of making that a reality.</p>
          <button className="btn btn-primary" onClick={goToLogin}>Get Started</button>
        </div>
        <div className="col-md-6">
          <img src={img} alt="Judiciary Information System" className="img-fluid" />
        </div>
      </div>
      <hr />
      <div className="row mb-2">
        <div className="col-md-4">
          <h2>Create Cases</h2>
          <p>Easily create new cases and manage all of your legal cases in one place.</p>
        </div>
        <div className="col-md-4">
          <h2>Schedule Hearings</h2>
          <p>Schedule hearings and manage your court calendar with ease.</p>
        </div>
        <div className="col-md-4">
          <h2>Search Cases</h2>
          <p>Quickly find the information you need with our powerful search tools.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
