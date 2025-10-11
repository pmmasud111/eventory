import Image from "next/image";
import Link from "next/link";
import React from "react";
import ActionButton from "../ActionButton";

const EventCard = ({ event }) => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={event?.imageUrl || "/events/google-io-2023-1.png"}
        alt="Event 1"
        className="w-full"
        width={500}
        height={500}
      />

      <div className="p-3">
        <Link href="./event_details" className="font-bold text-lg">
          {event.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{event?.interested_ids.length}</span>
          <span>|</span>
          <span>{event?.going_ids.length}</span>
        </div>

        {/* Add Action Button */}
        <ActionButton />
      </div>
    </div>
  );
};

export default EventCard;
