import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EventCard from '../../components/common/EventCard';
import { getUpcomingEvents } from '../../data/eventsData';

function UpcomingEvents() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="mb-5">
      <h2 className="mb-4 text-center fw-bold">Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        // 👇 Add justify-content-center here
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {upcomingEvents.map(event => (
            <Col key={event.id}>
              <EventCard
                image={event.image}
                title={event.title}
                description={event.description}
                date={new Date(event.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                link={event.link}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-muted">No upcoming events to show at the moment.</p>
      )}
    </div>
  );
}

export default UpcomingEvents;