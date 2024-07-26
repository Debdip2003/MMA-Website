import React from "react";

const ContactSection = () => {

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex ">
      <div className="md:w-1/2 flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4224166246286!2d88.41188787481218!3d22.6006958319409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275beb66b93cd%3A0xe450002abc60305d!2sNext%20Level%20MMA!5e0!3m2!1sen!2sin!4v1721451616040!5m2!1sen!2sin"
          width="600"
          height="600"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          title="Net Level Mma Location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 p-4 md:w-1/2">
        <h1 className="text-4xl mb-4 text-white">Send Us a Message</h1>
        <input
          type="text"
          placeholder="Enter your Full Name"
          className="rounded-2xl w-2/3 p-3 bg-transparent border-[1px] border-white "
        ></input>
        <input
          type="number"
          placeholder="Enter your Phone Number"
          className="rounded-2xl w-2/3 p-3 bg-transparent border-[1px] border-white "
        ></input>
        <input
          type="email"
          placeholder="Enter your Email"
          className="rounded-2xl w-2/3 p-3 bg-transparent border-[1px] border-white"
        ></input>
        <textarea
          type="text"
          placeholder="Write down some comments"
          className="rounded-2xl w-2/3 p-3 bg-transparent border-[1px] border-white"
          rows={10}
        ></textarea>
        <button className="bg-blue-600 p-2 w-1/5 text-xl hover:cursor-pointer hover:bg-blue-900 duration-200 rounded-2xl text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
