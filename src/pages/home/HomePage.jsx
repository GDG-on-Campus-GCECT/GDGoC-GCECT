import React from "react";
import { Container } from "react-bootstrap";
import HeroSection from "../../components/home/HeroSection";
import UpcomingEvents from "../../components/events/UpcomingEvents";
import PastEvents from "../../components/events/PastEvents";
import Organizers from "../../components/team/Organizers";
import ContactUs from "../../components/contactUs/ContactUs";

function HomePage() {
  return (
    // Use a React Fragment <> to hold your components
    <>
      <HeroSection /> {/* 👈 Render the HeroSection by itself for full width */}
      {/* 👇 All other page content can go inside a container below the hero */}
      <Container className="my-5">
        <UpcomingEvents />
        <PastEvents />
        <Organizers />
        <ContactUs />
      </Container>
    </>
  );
}

export default HomePage;
