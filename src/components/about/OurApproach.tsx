import { CheckCircle, Heart, Sparkles, Users } from "lucide-react";
import React from "react";

const OurApproach = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-6 text-primary">My Coaching Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My work is grounded in evidence, empathy, and a deep commitment to
            your wellbeing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-teal-50 p-8 rounded-2xl">
            <Heart className="text-teal-700 mb-4" size={32} />
            <h3 className="text-xl mb-3 text-primary">Holistic Wellbeing</h3>
            <p className="text-gray-700">
              Integrating mind, body, and spirit for comprehensive healing and
              balance
            </p>
          </div>

          <div className="bg-secondary/10 p-8 rounded-2xl">
            <Sparkles className="text-secondary mb-4" size={32} />
            <h3 className="text-xl mb-3 text-primary">
              Evidence-Based Education
            </h3>
            <p className="text-gray-700">
              Grounded in the latest menopause research and health science
            </p>
          </div>

          <div className="bg-teal-50 p-8 rounded-2xl">
            <Users className="text-teal-700 mb-4" size={32} />
            <h3 className="text-xl mb-3 text-primary">Compassionate Support</h3>
            <p className="text-gray-700">
              Creating a safe, non-judgmental space for your transformation
            </p>
          </div>

          <div className="bg-secondary/10 p-8 rounded-2xl">
            <CheckCircle className="text-secondary mb-4" size={32} />
            <h3 className="text-xl mb-3 text-primary">Mind-Body Awareness</h3>
            <p className="text-gray-700">
              Connecting physical symptoms with emotional and mental wellbeing
            </p>
          </div>

          <div className="bg-teal-50 p-8 rounded-2xl">
            <Heart className="text-teal-700 mb-4" size={32} />
            <h3 className="text-xl mb-3 text-primary">Lifestyle Integration</h3>
            <p className="text-gray-700">
              Practical strategies that fit seamlessly into your daily life
            </p>
          </div>

          <div className="bg-secondary/10 p-8 rounded-2xl">
            <Sparkles className="text-secondary mb-4" size={32} />
            <h3 className="text-xl mb-3 text-primary">Sustainable Change</h3>
            <p className="text-gray-700">
              Building habits that support long-term health and happiness
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic max-w-3xl mx-auto">
            "I believe that every woman deserves to feel supported, informed,
            and empowered as she moves through this important season of life.
            Menopause is not an ending — it is a profound new beginning."
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
