import React, { useState, useEffect } from "react";

const BookingSystem = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Disable scrolling when modal is open and allow closing with "Escape" key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeForm();
    };

    if (isFormOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // iOS fix
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFormOpen]);

  const generateTimeSlots = () => {
    let slots = [];
    let startHour = 9;
    let endHour = 22;

    for (let hour = startHour; hour <= endHour; hour++) {
      let period = hour < 12 ? "AM" : "PM";
      let formattedHour = hour % 12 || 12;
      slots.push(`${formattedHour}:00 ${period}`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const openForm = (slot) => {
    setSelectedSlot(slot);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedSlot(null);
  };

  const handleForm = (e) => {
    e.preventDefault();
    closeForm();
    alert(`Slot is booked for ${selectedSlot}`);
  };

  return (
    <div className="relative">
      <div className="booking-wrapper grid grid-cols-2 md:grid-cols-5 gap-4">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className="border border-gray-300 p-2 rounded-lg text-center hover:bg-baseRed duration-300"
            onClick={() => openForm(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      {/* Modal Form */}
      {isFormOpen && (
        <div
          className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-6"
          onClick={closeForm}
        >
          <div
            className="relative bg-baseBlue p-5 rounded-lg shadow-lg max-w-lg w-full flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4"
              onClick={() => closeForm()}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h2 className="text-lg text-center">Book Slot</h2>
            <p className="text-center">
              Selected Time: <strong>{selectedSlot}</strong>
            </p>
            <form className="flex flex-col gap-5" onSubmit={handleForm}>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border rounded text-baseBlue"
                required
              />
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full p-2 border rounded text-baseBlue"
                required
              />
              <button className="themebutton" type="submit">
                Book Slot
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;
