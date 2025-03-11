import React from "react";

const ContactUs = () => {
  return (
    <section className="py-10  relative">
      <div className="main-container">
        <h1 className="main-heading">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 justify-center items-center md:border-r">
            <i className="fa-solid fa-phone text-white text-lg"></i>
            <p className="text-sm">Call us: +91 12340954</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center md:border-r">
            <i className="fa-solid fa-envelope text-white text-lg"></i>
            <p className="text-sm">Email: ufobookings@newworld.com</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <i className="fa-solid fa-building text-white text-lg"></i>
            <p className="text-sm">Visit us: Mars</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
