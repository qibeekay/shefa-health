import { CheckCircle, Heart } from "lucide-react";
import React from "react";

const CoachingServices = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Menopause Coaching */}
          <div className="bg-linear-to-br from-teal-50 to-teal-100 p-10 rounded-2xl shadow-lg">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm mb-6">
              SIGNATURE PROGRAM
            </div>
            <h2 className="text-3xl mb-6 text-teal-900">Menopause Coaching</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A personalised coaching program designed to help you understand
              your symptoms, regulate your hormones naturally, and feel more at
              ease in your body.
            </p>

            <h3 className="text-xl mb-4 text-teal-900">
              You Will Learn How To:
            </h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Navigate perimenopause and menopause with clarity
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Improve sleep, mood, and energy levels
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Reduce hot flushes, anxiety, and overwhelm
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Support your hormones with lifestyle adjustments
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Build resilience and emotional wellbeing
                </span>
              </div>
            </div>

            <h3 className="text-xl mb-4 text-teal-900">What's Included</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">1:1 coaching sessions</span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">Personalised action plan</span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Practical tools for symptom management
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">Email or message support</span>
              </div>
              <div className="flex items-start">
                <CheckCircle
                  className="text-teal-700 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Optional monthly follow-up sessions
                </span>
              </div>
            </div>
          </div>

          {/* Holistic Wellbeing Coaching */}
          <div className="bg-linear-to-br from-orange-50 to-orange-100 p-10 rounded-2xl shadow-lg">
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm mb-6">
              HOLISTIC SUPPORT
            </div>
            <h2 className="text-3xl mb-6 text-teal-900">
              Holistic Wellbeing Coaching
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Support for your emotional, physical, and lifestyle wellbeing —
              designed to help you thrive through midlife and beyond.
            </p>

            <h3 className="text-xl mb-4 text-teal-900">
              Perfect for Women Who Want To:
            </h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Reduce stress and emotional overload
                </span>
              </div>
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Build healthy daily routines
                </span>
              </div>
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Improve motivation and self-discipline
                </span>
              </div>
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Strengthen mindset and self-worth
                </span>
              </div>
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Feel more grounded and connected
                </span>
              </div>
            </div>

            <h3 className="text-xl mb-4 text-teal-900">What's Included</h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  1:1 coaching sessions tailored to you
                </span>
              </div>
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">Customised wellness plan</span>
              </div>
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Mindset and habit transformation tools
                </span>
              </div>
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Accountability and ongoing support
                </span>
              </div>
              <div className="flex items-start">
                <Heart
                  className="text-orange-600 mr-3 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">
                  Resources for sustainable change
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingServices;
