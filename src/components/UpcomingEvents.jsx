import React from "react";
import { Link } from "react-router-dom";
import eventpageImage6 from "../assests/eventpageImage6.jpg";
import events from "../data/events";

const UpcomingEvents = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-10 md:py-0">
      <div className="mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
          <img
            src={eventpageImage6}
            alt="aboutPage"
            className="rounded-2xl grayscale w-full md:w-[90%] hover:cursor-pointer hover:grayscale-0 hover:scale-105 duration-200"
          />
        </div>
        <div className="flex flex-col justify-center h-full text-center md:text-left px-4 md:px-10 md:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-500 py-4 text-sm md:text-base">
            At Next Level MMA, we're dedicated to bringing the thrill of combat
            sports to enthusiasts and athletes alike. Our upcoming events are
            designed to challenge, inspire, and showcase the best talent in the
            industry. Whether you're a seasoned fighter or a passionate fan,
            there's something for everyone. Check out our lineup of upcoming
            events:
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-20">
            {events.map(({ id, title, link }) => (
              <div
                key={id}
                className="py-2 w-full md:w-1/2 lg:w-1/4 flex justify-center md:justify-start items-center"
              >
                <Link to={`/${link}`}>
                  <p className="cursor-pointer text-3xl md:text-2xl lg:text-3xl text-gray-400 font-medium hover:scale-105 duration-200 hover:text-white">
                    {title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
