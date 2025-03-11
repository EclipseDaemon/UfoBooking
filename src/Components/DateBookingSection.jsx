import React from "react";
import astro from "../Images/alien.png";
import BookingSystem from "./BookingSystem";

const DateBookingSection = () => {
  const TodaysDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section id="book-a-seat" className="py-10 relative">
      <span className="absolute top-10 left-10 w-32 h-32 opacity-20 -z-10">
        <img src={astro} className="h-full w-full" />
      </span>
      <span className="absolute bottom-5 right-10 w-32 h-32 opacity-10 -z-10">
        <img src={astro} className="h-full w-full" />
      </span>
      <div className="main-container">
        <h1 className="main-heading">Book Your Tickets Now</h1>
        <div className="date-container mb-8">
          <div className="flex gap-1 items-center justify-center flex-col">
            <p className="text-base">Today's Date: </p>
            <p className="font-bold">{TodaysDate}</p>
          </div>
        </div>
        <BookingSystem />
      </div>
    </section>
  );
};

export default DateBookingSection;
