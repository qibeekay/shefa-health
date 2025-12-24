import React from "react";

interface props {
  name: string;
  desc: string;
}
const HeroProp = ({ name, desc }: props) => {
  return (
    <section className="bg-linear-to-br from-teal-50 to-orange-50 py-32 mt-10">
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className=" text-[30px] sm:text-[36px] md:text-5xl mb-6 text-teal-900">
            {name}
          </h1>
          <p className=" text-[16px] sm:text-xl text-gray-700 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroProp;
