"use client";

import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

export function SiteHeader() {
  return (
    <header>
      <Navbar className="bg-baseRed">
        <Navbar.Brand as={Link} href="/">
          <Link to={"/"}>
            <img
              src="/Logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
          </Link>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            UFO Bookings
          </span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to={"/"} className="nav_link">
            Home
          </Link>
          <Link to={"/booked"} className="nav_link">
            Booking
          </Link>
          <Navbar.Link href="#" className="nav_link">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="nav_link">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className="nav_link">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
