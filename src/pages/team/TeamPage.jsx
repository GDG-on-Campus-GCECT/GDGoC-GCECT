import React from 'react';
import { Container } from 'react-bootstrap';
import Organizers from '../../components/team/Organizers';
import Mentors from '../../components/team/Mentors';

function TeamPage() {
  return (
    <Container className="my-5">
      <h1 className="display-4 text-center mb-5">Meet The Team</h1>
      
      {/* Display the Organizers section */}
      <Organizers />
      
      {/* Display the Mentors section */}
      <Mentors />
      
    </Container>
  );
}

export default TeamPage;