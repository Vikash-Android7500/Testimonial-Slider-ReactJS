import React from "react";
import Testimonials from ".//Componets/Testimonials";
import reviews from "./data";

const App = () => {
  return (
    <body className="flex flex-col w-[100vw] h-[100%] lg:h-[100vh] justify-center items-center bg-violet-200">
      <main className="text-center flex flex-col items-center">
        <h1 className="md:text-4xl text-xl font-bold">Our Testimonials</h1>
        <section className="bg-violet-400 h-[4px] w-1/5 mt-1" />
        <Testimonials reviews={reviews} />
      </main>
    </body>
  );
};

export default App;