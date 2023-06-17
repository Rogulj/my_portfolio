import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-r from-black to-gray-800 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/7544daac-99f7-4f44-bf1f-1c28892a4ee3"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline  text-white border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <input
          className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"
          type="text"
          placeholder="Enter your name"
          name="name"
        />
        <input
          className=" my-4 bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"
          type="email"
          placeholder="Enter your email"
          name="email"
        />
        <textarea
          className="bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"
          name="message"
          rows="10"
          placeholder="Enter your message"
        ></textarea>
        <button className="text-black  bg-gradient-to-r from-blue-200 to-purple-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
