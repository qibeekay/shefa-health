import ContactForm from "../../components/contact/ContactForm";
import ContactHero from "../../components/contact/ContactHero";

export function ContactUs() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <div className="py-32 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className=" text-[29px] sm:text-4xl mb-6  text-teal-900">
            I'm Here to Support You
          </h2>
          <p className=" text-[17px] sm:text-xl text-gray-700 mb-8">
            Your wellbeing journey deserves compassionate, expert guidance.
            Let's connect and explore how I can help you thrive through midlife.
          </p>
          <p className="text-[14px] sm:text-lg text-gray-700">
            Looking forward to hearing from you! ✨
          </p>
        </div>
      </div>
    </div>
  );
}
