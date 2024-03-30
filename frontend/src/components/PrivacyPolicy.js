import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PrivacyPolicy() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center mb-4">Privacy Policy</h1>
          <p className="lead mb-4">
            Our website is committed to protecting the privacy and security of
            our users' personal information. This privacy policy outlines the
            types of information we collect, how we use it, and how we keep it
            secure.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h3>Information We Collect</h3>
          <ul>
            <li>
              Personal information such as your name, email address, and phone
              number when you sign up for an account
            </li>
            <li>
              Usage information such as your IP address, browser type, and
              operating system when you use our website
            </li>
            <li>Payment information when you make a purchase on our website</li>
          </ul>
        </Col>
        <Col md={6}>
          <h3>How We Use Your Information</h3>
          <ul>
            <li>To provide and improve our services to you</li>
            <li>
              To personalize your user experience and communicate with you about
              our products and services
            </li>
            <li>To process payments and prevent fraudulent activity</li>
            <li>
              To comply with legal obligations and respond to requests from law
              enforcement agencies
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3>How We Protect Your Information</h3>
          <ul>
            <li>
              We use encryption technology to protect your personal and payment
              information
            </li>
            <li>
              We regularly update and maintain our security measures to ensure
              the protection of your data
            </li>
            <li>
              We restrict access to your personal information to only those
              employees and third-party service providers who need it to perform
              their duties
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3>Third-Party Service Providers</h3>
          <ul>
            <li>
              We may use third-party service providers to help us operate our
              website and provide our services
            </li>
            <li>
              These providers may have access to your personal information, but
              only to the extent necessary to perform their duties
            </li>
            <li>
              We require all third-party service providers to comply with this
              privacy policy and applicable laws and regulations
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3>Your Rights</h3>
          <ul>
            <li>
              You have the right to access and update your personal information
            </li>
            <li>
              You have the right to request that we delete your personal
              information, subject to any legal or regulatory obligations
            </li>
            <li>
              You have the right to opt-out of receiving marketing
              communications from us
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3>Updates to this Privacy Policy</h3>
          <p>
            We may update this privacy policy from time to time to reflect
            changes in our practices and services. We will notify you of any
            material changes to this policy by posting a notice on our website.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>
            If you have any questions or concerns about our privacy policy,
            please contact us at privacy@ourwebsite.com.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default PrivacyPolicy;
