import React from "react";
import img from "../images/img10.jpg"

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
          <h1 className="text-center m12-4">About Us</h1>
        <div className="col-md-7">
          <p className="lead">
            Welcome to the Judiciary Information System! Our mission is to
            provide a modern and user-friendly platform for managing legal cases
            and court proceedings. Our system is designed to streamline the
            entire process, from case creation to final judgment.
          </p>
          <p className="lead">
            We understand that the legal system can be complicated and
            overwhelming, so our platform is designed with simplicity and ease
            of use in mind. Our team has worked hard to ensure that our platform
            is intuitive and straightforward, so that you can focus on what
            matters most - your case.
          </p>
          <p className="lead">
            With the Judiciary Information System, you can create new cases,
            update existing cases, schedule hearings, and more. Our platform
            allows you to easily manage all of your legal cases in one place,
            and our powerful search tools make it easy to find the information
            you need.
          </p>
          <p className="lead">
            We're committed to providing excellent customer support, and our
            team is always here to help you with any questions or issues you may
            have. We believe that everyone deserves access to justice, and we're
            proud to be a part of making that a reality.
          </p>
        </div>
        <div className="col-md-5 center">
          <img
            src={img}
            alt="Office"
            className="img-fluid rounded mx_img"
          />
        </div>

        <div className="col-md-12">
          <h1 className="text-center mb-4">About Our Project</h1>
          <p>
            The Judicary Information System is a comprehensive online platform
            that provides legal professionals with a range of tools to
            streamline their workflow, manage their cases, and communicate with
            clients. Our platform is designed to be user-friendly, efficient,
            and reliable, and we strive to provide our users with the highest
            level of service and support.
          </p>
          <p>
            Whether you're a judge, lawyer, or court registrar, the Judicary
            Information System has something to offer. Our platform includes a
            range of features, including case management tools, scheduling
            tools, and communication tools, all of which are designed to help
            legal professionals work more efficiently and effectively.
          </p>
          <p>
            At the Judicary Information System, we're committed to providing our
            users with the tools they need to succeed. We believe that
            technology can be a powerful force for positive change in the legal
            profession, and we're dedicated to making that change happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
