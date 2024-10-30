import Link from "next/link";
import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div className="bg-secondary-light">
      <div className="mx-auto px-20 py-20">
        <h2 className="text-4xl font-bold text-black text-center mb-5 py-2">
          Henly's Journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <p>
              Here at the Pete & Gerry’s Family of Brands, we believe that every
              human and hen deserves a life enriched with freedom, love, and
              nourishment in all forms. That's why we're proud to partner with
              No Kid Hungry, helping provide 1.5 million meals* to children
              facing food insecurity this year. Join our efforts to give
              families all over the country direct access to nutritious, high
              quality staples by making a donation today.
            </p>
            <Button url="" name="More About Us" className="mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
