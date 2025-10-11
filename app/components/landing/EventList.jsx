import React from "react";
import EventCard from "./EventCard";
import { getAllEvents } from "@/app/db/queries";
import { replaceMongoIdInArray } from "@/app/utils/data_utils";

const EventList = async () => {
  // Fetch all events from the database
  const allEvents = await getAllEvents();

  // Optional: log events to verify data
  console.log("Fetched events:", allEvents);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {allEvents && allEvents.length > 0 ? (
        allEvents.map((event) => <EventCard key={event._id} event={event} />)
      ) : (
        <p className="col-span-full text-center text-gray-500 text-4xl">
          No events found.
        </p>
      )}
    </div>
  );
};

export default EventList;
