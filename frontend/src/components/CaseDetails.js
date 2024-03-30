import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import img from "../images/details.jpg";

const CourtCaseDetails = () => {
  const clearlocalstorage = setTimeout(() => {
    localStorage.removeItem("case");
  }, 3000);
  let caseDetails = JSON.parse(localStorage.getItem("case"));
  const {
    defendantName,
    defendantAddress,
    crimeType,
    dateCommitted,
    locationCommitted,
    arrestingOfficer,
    CIN,
    judge,
    lawyers,
    status,
    victim,
  } = caseDetails;
//   clearlocalstorage();

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2>Court Case Details</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h5>Defendant Name:</h5>
          <p>{defendantName}</p>
        </Col>
        <Col>
          <h5>Defendant Address:</h5>
          <p>{defendantAddress}</p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h5>Crime Type:</h5>
          <p>{crimeType}</p>
        </Col>
        <Col>
          <h5>Date Committed:</h5>
          <p>{new Date(dateCommitted).toLocaleDateString()}</p>
        </Col>
        <Col>
          <h5>Location Committed:</h5>
          <p>{locationCommitted}</p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h5>Arresting Officer:</h5>
          <p>{arrestingOfficer}</p>
        </Col>
        <Col>
          <h5>CIN:</h5>
          <p>{CIN}</p>
        </Col>
        <Col>
          <h5>Judge:</h5>
          <p>{judge}</p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h5>Lawyers:</h5>
          <ul>
            {lawyers.map((lawyer, index) => (
              <li key={index}>{lawyer}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <h5>Status:</h5>
          <p>{status}</p>
        </Col>
        <Col>
          <h5>Victim:</h5>
          <p>{victim}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image src={img} fluid style={{ maxHeight: "12vh" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default CourtCaseDetails;
