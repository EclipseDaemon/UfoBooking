import React from "react";
import DateBookingSection from "../Components/DateBookingSection";
import NewWaySection from "../Components/NewWaySection";
import ContactUs from "../Components/ContactUs";

const Homepage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-[390px] md:h-[500px] bg-heroimg bg-center bg-cover relative">
        <div className="bg-black absolute top-0 right-0 w-full h-full opacity-50" />
        <div className="main-container relative z-10 flex flex-col gap-3 justify-center items-center h-full w-full">
          <p className="text-xl md:text-2xl text-center">Welcome To The</p>
          <h1 className="text-4xl md:text-6xl uppercase text-center font-bold">
            future of booking
          </h1>
          <a href="#book-a-seat">
            <button className="themebutton">Get Started</button>
          </a>
        </div>
      </section>
      {/* Book a seat section */}
      <DateBookingSection />
      {/* New-Way-Booking-Section */}
      <NewWaySection />
      {/* Contact-Us-section */}
      <ContactUs />
    </main>
  );
};

export default Homepage;
