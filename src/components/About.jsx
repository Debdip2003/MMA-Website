import React from "react";
import AboutImageSection from "./AboutImageSection";

const About = () => {
  return (
    <div>
      <div className="h-full w-full bg-gradient-to-b from-gray-800 via-black to-black">
        <div className="mx-4 md:mx-10 flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-10 py-10 md:py-20">
          <AboutImageSection />
          <div className="flex flex-col justify-center h-full mr-10">
            <h2 className="text-5xl md:text-7xl font-semibold text-white max-w-lg mb-6 text-center">
              About
            </h2>
            <p className="text-gray-500 py-4 max-w-lg text-sm sm:text-base md:text-lg lg:text-xl">
              Next Level MMA is a Non-Profit Trust registered under West Bengal
              Registration Rules 1962, with a visionary goal to establish
              Kolkata as India’s premier Combat Sports capital. We are committed
              to achieving this by setting up cutting-edge martial arts training
              centers across the region, organizing a diverse range of
              high-profile combat sports events throughout the year, and
              developing a Combat Sports University and Center of Excellence to
              foster talent and innovation. Our long-term ambitions include
              creating a Combat Sports equipment manufacturing unit to provide
              top-quality gear and hosting an annual Awards Night to celebrate
              and recognize exceptional individuals in the field. Through these
              comprehensive efforts, we aim to enhance the standards of combat
              sports, inspire a new generation of athletes, and bring both
              national and international recognition to Bengal and its people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
