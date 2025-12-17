import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import React from "react";

const Support = () => {
  return (
    <section className="py-20 grad text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl mb-8 text-center">Who I Support</h2>
        <p className="text-xl text-teal-100 mb-8 text-center">
          I work with women who are:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <p className="text-teal-100">
              Navigating perimenopause or menopause
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <p className="text-teal-100">
              Struggling with stress, fatigue, or low energy
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <p className="text-teal-100">
              Seeking emotional and mental balance
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <p className="text-teal-100">
              Ready to prioritise their health and self-care
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl md:col-span-2">
            <p className="text-teal-100 text-center">
              Wanting to rebuild confidence and wellbeing
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/coaching"
            className="inline-flex items-center bg-white text-teal-900 px-8 py-4 rounded-lg hover:bg-teal-50 transition-colors text-lg"
          >
            Start Your Journey <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Support;
