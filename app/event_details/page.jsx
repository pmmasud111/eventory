import React from "react";
import HeroDetails from "../components/eventDetails/HeroDetails";
import EventDetails from "../components/eventDetails/EventDetails";
import EventVanue from "../components/eventDetails/EventVanue";

const EventDetailsPage = () => {
  return (
    <section className="container">
      <HeroDetails />
      <div className="grid grid-cols-5 gap-12 my-12">
        <EventDetails />
        <EventVanue />
      </div>
    </section>
  );
};

export default EventDetailsPage;
