import React from "react";
import alienimg from "../Images/3.png";
const NewWaySection = () => {
  return (
    <section className="py-10 relative">
      <div className="main-container">
        <h1 className="main-heading">Experience New Way Of Booking</h1>
        <div className="">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h3 className="text-lg text-center">
              Welcome to{" "}
              <span className="font-bold text-2xl">UFO Bookings</span>, the
              future of interstellar travel! We are pioneers in UFO booking
              technology, making space tourism and celestial exploration a
              reality. Whether you're looking for a thrilling ride across the
              stars or a relaxing cruise above Earth's atmosphere, we bring you
              next-gen travel like never before.
            </h3>
            <p className="text-sm text-center">
              Join us and be a part of the next era of space travel. The future
              is no longer a dream—it’s just a booking away! 🚀🌌
            </p>
            <button className="themebutton w-fit">Join Us</button>
          </div>
        </div>
      </div>
      <span className="absolute bottom-2 left-10 w-28 h-28 opacity-20 -z-10">
        <img src={alienimg} className="h-full w-full animate-bounce" />
      </span>
    </section>
  );
};

export default NewWaySection;
