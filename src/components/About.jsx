import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-black to-gray-800 text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-white font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Ivana Rogulj, nice to meet you.</p>
          </div>
          <div>
            <p>
              I am a 4th year FESB student. Responsible and highly motivated
              person, with a desire to learn and acquire new knowledge as well
              as advancements in the profession. Willing to invest the effort
              and time necessary to get the best out of the internship program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
