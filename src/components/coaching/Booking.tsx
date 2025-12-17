import { Calendar, CheckCircle, Heart } from "lucide-react";
import React from "react";

const Booking = () => {
  return (
    <section className="py-32 bg-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-teal-900">How Coaching Works</h2>
          <p className="text-xl text-gray-600">
            A simple, supportive process designed around you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-teal-700" size={28} />
            </div>
            <h3 className="text-xl mb-4 text-teal-900">1. Book Your Session</h3>
            <p className="text-gray-700">
              Choose a time that works for you and complete a brief intake form
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-teal-700" size={28} />
            </div>
            <h3 className="text-xl mb-4 text-teal-900">2. Connect & Explore</h3>
            <p className="text-gray-700">
              We'll discuss your goals, challenges, and create a personalised
              plan
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-teal-700" size={28} />
            </div>
            <h3 className="text-xl mb-4 text-teal-900">
              3. Transform Together
            </h3>
            <p className="text-gray-700">
              Receive ongoing support, guidance, and tools for lasting change
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
