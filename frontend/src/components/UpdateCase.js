import React, { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UpdateCase = () => {
  const [defendantName, setDefendantName] = useState("");
  const [defendantAddress, setDefendantAddress] = useState("");
  const [crimeType, setCrimeType] = useState("");
  const [dateCommitted, setDateCommitted] = useState("");
  const [locationCommitted, setLocationCommitted] = useState("");
  const [arrestingOfficer, setArrestingOfficer] = useState("");
  const [CIN, setCIN] = useState("");
  const [judge, setJudge] = useState("");
  const [lawyers, setLawyers] = useState("");
  const [status, setStatus] = useState("pending");
  const [victim, setVictim] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [searchItem,setSearchItem]=useState("");
//   const navigate = useNavigate();

  const handleUpdate = async (event) => {
    event.preventDefault();

    const data = {
      defendantName,
      defendantAddress,
      crimeType,
      dateCommitted,
      locationCommitted,
      arrestingOfficer,
      CIN,
      judge,
      lawyers: [lawyers],
      status,
      victim,
    };

    try {
      const result = await fetch("http://localhost:5000/registrar/updatecase", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await result.json();

      if (responseData.error) {
        setErrorMessage(responseData.error);
        setSuccessMessage("");
      } else {
        setSuccessMessage(responseData.result);
        setErrorMessage("");
        setDefendantName("");
        setDefendantAddress("");
        setArrestingOfficer("");
        setJudge("");
        setLocationCommitted("");
        setLawyers("");
        setCIN("");
        setVictim("");
        setDateCommitted("");
        setDefendantName("");
        setCrimeType("");
        // navigate("/registrar/addnewcase");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong!");
      setSuccessMessage("");
    }
  };

  const handleSearch=async()=>{
    console.log('clicked on handle search')
    let data={CIN:searchItem};
    let res=await fetch("http://localhost:5000/registrar/getdetails",{
        method:'post',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
    })
    res=await res.json();
    if(res.error){
        alert(res.error);
    }
    else{
        setDefendantName(res.defendantName);
        setDefendantAddress(res.defendantAddress);
        setArrestingOfficer(res.arrestingOfficer);
        setJudge(res.judge);
        setLocationCommitted(res.locationCommitted);
        setLawyers(res.lawyers);
        setCIN(res.CIN);
        setVictim(res.victim);
        setDateCommitted(res.dateCommitted);
        console.log(res);
        setCrimeType(res.crimeType); 
        setStatus(res.status);
    }
    // console.log(res);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mx-auto mt-3">Update Case</h1>
        </div>
      </div>
      {/* <div className="row"> */}
      <div className="row justify-content-end">
        <div className="col-md-3 mt-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              onChange={(e)=>{setSearchItem(e.target.value);}}
            />
            
            <button className="btn btn-primary" type="button" onClick={handleSearch}>
              <span>search</span>
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
      {errorMessage && (
        <Alert variant="danger">
          {errorMessage}{" "}
          <button
            type="button"
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => {
              setErrorMessage("");
            }}
          ></button>
        </Alert>
      )}
      {successMessage && (
        <Alert variant="success">
          {successMessage}{" "}
          <button
            type="button"
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => {
              setSuccessMessage("");
            }}
          ></button>
        </Alert>
      )}
      <Form onSubmit={handleUpdate}>
        {/* <Form > */}
        <Row>
          <Col md={6}>
            <Form.Group controlId="defendantName">
              <Form.Label className="mt-3 ps-1">Defendant Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter defendant name"
                value={defendantName}
                onChange={(e) => setDefendantName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="defendantAddress">
              <Form.Label className="mt-3 ps-1">Defendant Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter defendant address"
                value={defendantAddress}
                onChange={(e) => setDefendantAddress(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="crimeType">
              <Form.Label className="mt-3 ps-1">Crime Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter crime type"
                value={crimeType}
                onChange={(e) => setCrimeType(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="dateCommitted">
              <Form.Label className="mt-3 ps-1">Date Committed</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date committed"
                value={dateCommitted}
                onChange={(e) => setDateCommitted(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="locationCommitted">
              <Form.Label className="mt-3 ps-1">Location Committed</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location committed"
                value={locationCommitted}
                onChange={(e) => setLocationCommitted(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="arrestingOfficer">
              <Form.Label className="mt-3 ps-1">Arresting Officer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter arresting officer"
                value={arrestingOfficer}
                onChange={(e) => setArrestingOfficer(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="CIN">
              <Form.Label className="mt-3 ps-1">CIN</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CIN"
                value={CIN}
                onChange={(e) => setCIN(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="judge">
              <Form.Label className="mt-3 ps-1">Judge</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter judge"
                value={judge}
                onChange={(e) => setJudge(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="lawyers">
              <Form.Label className="mt-3 ps-1">Lawyers</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lawyers"
                value={lawyers}
                onChange={(e) => setLawyers(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label className="mt-3 ps-1">Status</Form.Label>
              <Form.Control
                as="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="pending">Pending</option>
                <option value="ongoing">Ongoing</option>
                <option value="closed">Closed</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="victim">
              <Form.Label className="mt-3 ps-1">Victim</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter victim"
                value={victim}
                onChange={(e) => setVictim(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mb-3">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateCase;
