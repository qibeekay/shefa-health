import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message! I will get back to you within 24-48 hours."
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl mb-6 text-teal-900">Contact Information</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm here to support you on your wellness journey. Reach out to
              book a discovery call, ask questions, or learn more about how I
              can help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <Mail className="text-teal-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-0.5 text-teal-900">Email</h3>
                  <a
                    href="mailto:hello@shefahealth.com"
                    className="text-gray-700 hover:text-teal-700"
                  >
                    Shefahealthcoachingsm@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Phone className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-0.5 text-teal-900">Phone</h3>
                  <p className="text-gray-700">Available for consultations</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-teal-700" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-0.5 text-teal-900">Location</h3>
                  <p className="text-gray-700">
                    38 london road Tilbury Rm18 8du United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-teal-900">Response Time</h3>
                  <p className="text-gray-700">Within 24-48 hours</p>
                  <p className="text-sm text-gray-600 mt-1">Monday - Friday</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-10 bg-teal-50 p-6 rounded-xl">
              <p className="text-sm text-gray-700 italic mb-2">
                "Reaching out was the best decision I made for my wellbeing
                journey. The support and guidance I received has been
                life-changing."
              </p>
              <p className="text-sm text-teal-700">— Jennifer M.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-linear-to-br from-teal-50 to-white border-2 border-teal-100 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl mb-6 text-teal-900">Send Me a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="+44 123 456 7890"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    What can I help you with? *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select a topic...</option>
                    <option value="coaching">Book a Coaching Session</option>
                    <option value="discovery">Schedule a Discovery Call</option>
                    <option value="courses">Questions About Courses</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    placeholder="Tell me a bit about what you're looking for and how I can support you..."
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Your privacy matters:</strong> All information
                    shared through this form is kept confidential and will only
                    be used to respond to your inquiry. I do not share your
                    personal information with third parties.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center text-lg cursor-pointer"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>

                <p className="text-sm text-gray-600 text-center">
                  I'll respond to your message within 24-48 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
