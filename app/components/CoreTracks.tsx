'use client';
import React from "react";
import Button from "./shared/Button";
import QuarterBox from "./shared/QuarterBox";

const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const CoreTracks = () => {
  return (
    <>
      <section className="max-w-screen py-4 px-20 flex items-center bg-gray-100 ">
        {/* content */}
        <div className="text-teal-900 mt-20 ">
          <h4 className=" flex justify-start text-black  mainHeading text-xl font-normal">
            Program of Studies
          </h4>
          <h2 className=" flex justify-start text-black  text-4xl font-extrabold max-w-2xl mx-auto">
            Core Courses
          </h2>
          <h2 className=" flex justify-start text-black  mainHeading text-4xl font-extrabold max-w-2xl mx-auto">
            Common in All Specializations):
          </h2>
          <p className="pt-4 ">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div>
            <button className=" border-2 border-teal-500 hover:bg-teal-600 rounded-lg mt-3 py-1 px-3 font-medium duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* boxes */}
      <section className=" max-w-screen mx-auto py-4 px-28  my-10 items-stretch flex gap-x-9  ">
        {CoreTrackData.map((item, i) => (
          <>
            <QuarterBox
          
             description={item.description}
              header={item.header}
               />
          </>
        )
        )
        }
      </section>
      {/* <a href="/Courses">
        <Button />
      </a> */}
    </>
  );
};

export default CoreTracks;
