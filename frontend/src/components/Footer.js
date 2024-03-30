import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Judiciary Information System</h5>
            <p>The Judiciary Information System is an online platform that provides access to court case information, court schedules, and other legal resources.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@judiciaryinfosys.com</p>
            <p>Phone: 555-555-5555</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><Link href="#">Facebook</Link ></li>
              <li><Link href="#">Twitter</Link ></li>
              <li><Link href="#">LinkedIn</Link ></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">&copy; 2023 Judiciary Information System. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
