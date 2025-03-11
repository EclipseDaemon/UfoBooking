import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center flex-col gap-10">
          <div className="flex items-center justify-center flex-col gap-3">
            <img src="/notfound.svg" className="w-80 h-80" />
            <h3 className="text-center text-sm">
              Looks Like You Lost Your Way....
            </h3>
          </div>
          <Link to={"/"}>
            <button className="themebutton">Back To Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
