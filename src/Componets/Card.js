import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ review }) => {
  const { image, name, job, text } = review;

  return (
    <main className="flex flex-col lg:relative">
      <section className="absolute top-[3.9rem] lg:top-[-3rem] z-10 mx-auto">
        <img
          className="md:w-[140px] md:h-[140px] w-[80px] h-[80px] aspect-square rounded-full z-[1]"
          src={image}
          alt="photo"
        />
        <hr className="md:w-[140px] md:h-[140px] w-[80px] h-[80px] bg-violet-500 rounded-full absolute top-[-6px] left-2 z-[-1]"></hr>
      </section>

      <section className="text-center mt-7">
        <p className="font-bold md:text-2xl capitalize">{name}</p>
      </section>

      <section className="text-center mt-1">
        <p className="text-violet-300 uppercase text-sm">{job}</p>
      </section>

      <section className="mx-auto mt-5 text-violet-400">
        <FaQuoteLeft />
      </section>

      <section className="text-center mt-4 text-slate-500">{text}</section>

      <section className="mx-auto mt-5 text-violet-400">
        <FaQuoteRight />
      </section>
    </main>
  );
};

export default Card;
