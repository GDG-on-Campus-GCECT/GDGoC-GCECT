import React from "react";
import { Container } from "react-bootstrap";
import UpcomingEvents from "../../components/events/UpcomingEvents"; // Import the new component
import PastEvents from "../../components/events/PastEvents"; // Import the new component

function EventsPage() {
  return (
    <Container className="my-5">
      <h1 className="display-4 text-center mb-5">Events</h1>

      {/* Render the dedicated components */}
      <UpcomingEvents />
      <PastEvents />
    </Container>
  );
}

export default EventsPage;
