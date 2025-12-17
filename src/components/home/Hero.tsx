import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getImageSrc } from "../../utils/imageUtils";

const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-teal-50 to-orange-50 py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="">
            <div className=" bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm mb-6 w-fit capitalize">
              Registered Health & Certified Menopause Coach
            </div>
            <h1 className="text-5xl xl:text-6xl mb-6 text-teal-900">
              Wellbeing, Hormone Balance & Midlife Support for Women
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              I help women navigate perimenopause, menopause, and life
              transitions with clarity, confidence, and emotional resilience.
              Through personalised guidance, holistic strategies, and
              evidence-informed support, you can restore balance, energy, and a
              renewed sense of self.
            </p>
            <p className=" text-teal-700 mb-8">
              As your Coach, I'm here to guide you with compassion and expertise
              every step of the way.
            </p>
            <a
              href="/coaching"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="grid place-items-end">
            <div className="relative max-w-[563px] ">
              <div className="absolute inset-0 bg-linear-to-br from-teal-400/20 to-orange-400/20 rounded-3xl transform rotate-6"></div>
              <div className="w-[563px] h-125 overflow-hidden">
                <img
                  src={getImageSrc("img-1.jpg")}
                  alt="Woman in peaceful meditation"
                  className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
