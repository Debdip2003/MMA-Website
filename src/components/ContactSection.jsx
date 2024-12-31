import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { maindb } from "../utils/firebase";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmit, setisSubmit] = useState(false);

  // SUBMIT FORM
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const isEmailValid =
  //     /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  //   const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);

  //   if (!name) return alert("Please Enter your Name");
  //   if (!isPhoneNumberValid) return alert("Please Enter a Proper Phone Number");
  //   if (!isEmailValid) return alert("Please Enter a Proper Email");
  //   if (!comment) return alert("Please Enter your message");

  //   console.log("message sent");

  //   writeUserData(name, email, phoneNumber, comment);
  // };

  // async function writeUserData(name, email, phoneNumber, comment) {
  //   setisSubmit(true);
  //   try {
  //     const docRef = await addDoc(collection(maindb, "contacts"), {
  //       name: name,
  //       email: email,
  //       phoneNumber: phoneNumber,
  //       comment: comment,
  //     });

  //     console.log("Document written with ID: ", docRef.id);
  //     alert("Message has been sent!");
  //     setName("");
  //     setEmail("");
  //     setPhoneNumber("");
  //     setComment("");
  //     setisSubmit(false);
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //     alert(error.message);
  //     setisSubmit(false);
  //   }
  // }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex flex-col md:flex-row">
      <div className="w-full  md:w-1/2 flex justify-center items-center p-2 py-20 md:p-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4224166246286!2d88.41188787481218!3d22.6006958319409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275beb66b93cd%3A0xe450002abc60305d!2sNext%20Level%20MMA!5e0!3m2!1sen!2sin!4v1721451616040!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0", maxWidth: "600px", maxHeight: "600px" }}
          allowFullScreen
          loading="lazy"
          title="Next Level MMA Location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* <div className="flex flex-col justify-center items-center gap-4 p-4 md:w-1/2">
        <h1 className="text-2xl md:text-4xl mb-4 text-white">
          Send Us a Message
        </h1>
        <input
          type="text"
          placeholder="Enter your Full Name"
          className="rounded-2xl w-full md:w-2/3 p-3 bg-transparent border border-white text-white"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="Enter your Phone Number"
          className="rounded-2xl w-full md:w-2/3 p-3 bg-transparent border border-white text-white"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className="rounded-2xl w-full md:w-2/3 p-3 bg-transparent border border-white text-white"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          placeholder="Write down some comments"
          className="rounded-2xl w-full md:w-2/3 p-3 bg-transparent border border-white text-white"
          rows={6}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button
          className="bg-blue-600 p-3 w-1/2 md:w-1/5 text-lg hover:cursor-pointer hover:bg-blue-900 duration-200 rounded-2xl text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div> */}
      <div className="flex flex-col justify-center items-start gap-4 p-4 md:w-1/2  text-white">
        <p className="text-4xl">Contact Us</p>
        <p className="">
          {" "}
          Address: 669, A.E. Block sector 1, AE Block, Sector 1, Bidhannagar,
          Kolkata, West Bengal 700064
        </p>
        <p className="flex">
          <FaPhoneAlt className="text-2xl mx-3 pt-2" />
          9831585746
        </p>
        <p className="flex">
          <FaWhatsapp className="text-2xl mx-3 pt-2" />
          9831585746
        </p>
        <p className="flex">
          <CiMail className="text-2xl mx-3 pt-2" />
          nextlevelmmatrust@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
