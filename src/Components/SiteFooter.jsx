"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function SiteFooter() {
  return (
    <Footer container className="rounded-none bg-baseRed">
      <div className="w-full">
        <div className=" max-w-[1536px] w-full mx-auto sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Rajvardhan™"
            year={2025}
            className="nav_link"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <Footer.Icon href="#" icon={BsFacebook} className="nav_link" />
            <Footer.Icon href="#" icon={BsInstagram} className="nav_link" />
            <Footer.Icon href="#" icon={BsTwitter} className="nav_link" />
            <Footer.Icon href="#" icon={BsGithub} className="nav_link" />
            <Footer.Icon href="#" icon={BsDribbble} className="nav_link" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
