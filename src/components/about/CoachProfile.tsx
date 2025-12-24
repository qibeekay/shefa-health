import { CheckCircle } from "lucide-react";
import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const CoachProfile = () => {
  return (
    <section className="py-32 bg-teal-50">
      <div className="xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-150">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img
                src={getImageSrc("img-6.jpg")}
                alt="Professional wellness coach"
                className="rounded-xl w-full h-150 object-cover"
              />
            </div>
          </div>

          <div>
            <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm mb-6 w-fit capitalize">
              Meet Your Coach
            </div>
            <h2 className=" text-[30px] sm:text-4xl mb-4 text-primary">
              Grace Ale-Dare
            </h2>
            <p className=" text-[18px] sm:text-xl text-teal-700 mb-6">
              Registered Health Coach & Certified Menopause Coach
            </p>

            <p className=" text-[16px] sm:text-lg text-gray-700 leading-relaxed mb-6">
              Hello, I'm Grace Ale-Dare, a Registered Health Coach and Certified
              Menopause Coach dedicated to supporting women through the
              emotional, physical, and hormonal changes of midlife.
            </p>

            <div className="space-y-3 mb-8">
              <h3 className="text-xl text-primary mb-4">
                I specialise in helping women:
              </h3>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Understand their menopausal symptoms
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Reduce stress and emotional overwhelm
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Improve energy, sleep, and mental clarity
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Create balanced, sustainable lifestyle habits
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Reconnect with themselves and their wellbeing
                </span>
              </div>
            </div>

            <p className=" text-[17px] sm:text-lg text-gray-700 leading-relaxed">
              Over the years, I've witnessed how deeply menopause and midlife
              transitions can affect a woman's identity, confidence, and daily
              life. My mission is to transform that experience into a journey of
              strength, self-awareness, and empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachProfile;
