import { ArrowRight, Heart, Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 backdrop-blur-sm border border-primary-foreground/20 mb-8">
          <Heart className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">
            Begin Your Transformation
          </span>
        </div>
        <h2 className=" text-[30px] md:text-4xl mb-6 text-teal-900">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-[17px] md:text-xl text-gray-700 mb-8">
          Book a free discovery call to discuss your needs and find the best
          path forward
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="/coaching"
            className="inline-flex items-center border-2 border-primary bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-[16px] md:text-lg"
          >
            Schedule Your Call <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="/coaching"
            className="inline-flex items-center border-2 border-primary text-primary px-8 py-4 rounded-lg transition-colors text-[16px] md:text-lg"
          >
            Get in Touch <Mail className="ml-2" size={20} />
          </a>
        </div>

        {/* Contact info cards */}
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-10">
          <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 border border-secondary/20">
            <Mail className="w-5 h-5 text-secondary mx-auto mb-2" />
            <p className=" text-[12px] sm:text-sm text-secondary/80">Email</p>
            <p className="text-secondary font-medium text-[12px] sm:text-sm">
              Shefahealthcoaching@gmail.com
            </p>
          </div>
          <div className="bg-secondary/10 backdrop-blur-sm rounded-xl p-4 border border-secondary/20 text-[12px] sm:text-sm">
            <PhoneCall className="w-5 h-5 text-secondary mx-auto mb-2" />
            <p className="text-[12px] sm:text-sm text-secondary/80">
              Phone Number
            </p>
            <p className="text-secondary font-medium">07428697038</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
