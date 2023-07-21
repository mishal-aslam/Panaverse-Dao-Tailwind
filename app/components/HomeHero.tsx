import React from "react";
import Pic from "/public/heroPic.png";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="max-w-screen mx-auto py-4 px-20 ">
      <div className=" flex flex-col md:flex-row items-center ">
        {/* left side */}
        <div className="flex-auto max-w-3xl">
          <h4 className="text-teal-600 font-semibold text-lg mt-4">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h4>
          <h1 className="text-5xl font-bold max-w-2xl">
            Certified Web 3.0 and Metaverse Developer
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet.
          </p>
          <p className="mt-2 text-lg text-slate-600 max-w-2xl">
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </p>
          <button className=" border-2 border-teal-500 hover:bg-teal-600 rounded-lg mt-3 py-1 px-3 font-medium duration-200">
            Enroll Now
          </button>
        </div>
        {/* right side */}

        <div className="flex-auto">
          <Image src={Pic} alt="sir arif alvi pic" />
        </div>

        {/* ends here */}
      </div>
    </section>
  );
};

export default HomeHero;
