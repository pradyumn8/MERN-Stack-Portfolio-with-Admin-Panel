import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/image.png"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[10deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              
            </p>
            <p>
            In my role as a Junior Web Developer at Aspirent Solutions in Mumbai, I honed my skills in web development while contributing to various projects. My proficiency lies in web development technologies, coupled with a strong adaptability to new challenges. I excel in problem-solving, thrive in collaborative team environments, and consistently make meaningful contributions to project success.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
        I have a keen interest in playing chess and enjoy listening to self-awareness audiobooks. These activities not only help me relax but also contribute to my personal growth and strategic thinking. 
</p>
      </div>
    </div>
  );
};

export default About;
