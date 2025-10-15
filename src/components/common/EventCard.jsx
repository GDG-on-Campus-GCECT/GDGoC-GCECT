import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
// Link from react-router-dom is no longer needed here
import "./EventCard.css";

const EventCard = ({ image, title, description, date, link = "#" }) => {
  return (
    <Card className="event-card h-100 shadow-sm">
      <Card.Img variant="top" src={image} className="event-card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h5" className="fw-bold">
          {title}
        </Card.Title>
        <Card.Text className="text-muted small mb-2">{date}</Card.Text>
        <Card.Text className="flex-grow-1 markdown-content">
          <ReactMarkdown>{description}</ReactMarkdown>
        </Card.Text>
        {/* 👇 This Button is now an <a> tag that opens in a new tab */}
        <Button
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="mt-auto align-self-start"
        >
          View More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
