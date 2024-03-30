import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CaseCard from './CaseCard';
import case1img from '../images/case1.jpg'
import case2img from '../images/case2.jpg'
import case3img from '../images/case3.jpg'
import CaseDetails from './CaseDetails'

const SearchPastCase = () => {
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

    const Navigate=useNavigate();
    const getdetails=async (e)=>{
        e.preventDefault();
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
            setCrimeType(res.crimeType); 
            setStatus(res.status);
        }
        localStorage.setItem('case',JSON.stringify(res));
        console.log(res);
        Navigate('/pastcases/casedetails')
    }
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h2>Past Case Studies</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form>
            <Form.Group controlId="formBasicSearch">
              <Form.Control type="text" placeholder="Search for a case" onChange={(e)=>{setSearchItem(e.target.value);}}/>
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-2' onClick={getdetails}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <CaseCard
            title="John Doe vs. Jane Smith"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor odio nec ipsum hendrerit, sed commodo sapien dictum. Sed vel sem id ipsum bibendum pretium. Suspendisse potenti."
            imgUrl={case1img}
          />
        </Col>
        <Col>
          <CaseCard
            title="Mark Johnson vs. Sarah Lee"
            description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed lobortis lacus vel neque suscipit, ac commodo odio ullamcorper. Nullam ut faucibus lectus."
            imgUrl={case2img}
          />
        </Col>
        <Col>
          <CaseCard
            title="David Kim vs. Rachel Park"
            description="Sed elementum turpis eget purus bibendum, nec eleifend odio vehicula. Nulla at nisl luctus, rhoncus elit sit amet, tristique elit. Proin sed consectetur lorem. Ut id mauris eu dolor sagittis faucibus. "
            imgUrl={case3img}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPastCase;
