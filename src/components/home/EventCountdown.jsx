import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { getUpcomingEvents } from "../../data/eventsData";
import "./EventCountdown.css";

const EventCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    // Get the next upcoming event
    const upcomingEvents = getUpcomingEvents();
    if (upcomingEvents.length > 0) {
      setNextEvent(upcomingEvents[0]);
    }
  }, []);

  useEffect(() => {
    if (!nextEvent) return;

    const calculateTimeLeft = () => {
      const eventDate = new Date(nextEvent.date);
      // Set event time to end of day if no specific time is provided
      eventDate.setHours(23, 59, 59, 999);

      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [nextEvent]);

  if (!nextEvent) {
    return null; // Don't show countdown if no upcoming events
  }

  const { days, hours, minutes, seconds } = timeLeft;
  const isEventToday =
    days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  return (
    <div className="event-countdown-hero">
      <div className="countdown-compact">
        <span className="countdown-label-text">
          {isEventToday ? "🎉 Event Today!" : "Next Event:"}{" "}
        </span>
        {!isEventToday && (
          <span className="countdown-inline">
            <span className="countdown-time text-google-blue">{days}d</span>
            <span className="countdown-time text-google-red">{hours}h</span>
            <span className="countdown-time text-google-yellow">
              {minutes}m
            </span>
            <span className="countdown-time text-google-green">{seconds}s</span>
          </span>
        )}
        <a
          href={nextEvent.link}
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-link-inline"
        >
          {nextEvent.title} →
        </a>
      </div>
    </div>
  );
};

export default EventCountdown;
