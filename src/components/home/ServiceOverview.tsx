import { ArrowRight, Heart, Sparkles, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ServiceOverview = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-teal-900">How I Can Support You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive support tailored to your unique journey through
            midlife
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-teal-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-2xl mb-4 text-teal-900">1:1 Coaching</h3>
            <p className="text-gray-700 mb-6">
              Personalised support to navigate menopause symptoms, balance
              hormones naturally, and restore your wellbeing with evidence-based
              strategies.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="text-white" size={28} />
            </div>
            <h3 className="text-2xl mb-4 text-teal-900">Online Courses</h3>
            <p className="text-gray-700 mb-6">
              Self-paced programs designed to empower you with knowledge and
              practical tools for hormone harmony, stress relief, and energy
              restoration.
            </p>
          </div>

          <div className="bg-teal-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
            <div className="bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-2xl mb-4 text-teal-900">Membership</h3>
            <p className="text-gray-700 mb-6">
              Join a supportive community with monthly workshops, group
              coaching, exclusive resources, and ongoing guidance for your
              wellbeing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
