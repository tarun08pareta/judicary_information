import React from 'react';
import { Container, Card } from 'react-bootstrap';

const TermsOfUse = () => {
  return (
    <Container className="py-5">
      <Card className="p-4 shadow">
        <h2 className="mb-4">Welcome to the Judiciary Information System ("JIS")</h2>
        <p className="mb-4">
          By accessing and using this platform, you agree to the following terms and conditions:
        </p>
        <h4>Use of the Platform:</h4>
        <p className="mb-4">
          JIS is a web-based platform designed to streamline legal cases and court proceedings. You may use JIS solely for the purpose of managing your legal cases and accessing relevant information. Any unauthorized use or access to JIS is strictly prohibited.
        </p>
        <h4>User Accounts:</h4>
        <p className="mb-4">
          To access JIS, you must create a user account. You are responsible for maintaining the confidentiality of your account login credentials, and you agree to notify JIS immediately of any unauthorized use of your account.
        </p>
        <h4>Prohibited Conduct:</h4>
        <p className="mb-4">
          You agree not to use JIS for any unlawful, abusive, or fraudulent activity. You also agree not to interfere with or disrupt the operation of JIS or any related systems or networks.
        </p>
        <h4>Intellectual Property:</h4>
        <p className="mb-4">
          The content and design of JIS are protected by intellectual property laws, including copyright and trademark laws. You may not reproduce, distribute, or otherwise use any content from JIS without the express written permission of JIS.
        </p>
        <h4>Disclaimers and Limitation of Liability:</h4>
        <p className="mb-4">
          JIS is provided "as is" without any warranties or guarantees. JIS does not guarantee the accuracy or completeness of any information on the platform, and JIS is not liable for any damages arising from your use of the platform.
        </p>
        <h4>Governing Law:</h4>
        <p className="mb-4">
          These terms and conditions are governed by the laws of the jurisdiction in which JIS is operated, without regard to conflict of law principles.
        </p>
        <h4>Modifications:</h4>
        <p>
          JIS may modify these terms and conditions at any time, and any such modifications will be effective immediately upon posting on the platform.
        </p>
      </Card>
    </Container>
  );
};

export default TermsOfUse;
 