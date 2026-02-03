import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

// Define types for form data and API response
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Reni Mail API endpoint and configuration
  const RENI_MAIL_API_URL = import.meta.env.VITE_API_URL;

  // You should move this to environment variables in production
  const KEY = import.meta.env.VITE_BEARER_TOKEN; // Get from Reni dashboard

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Prepare email content
      const emailBody = `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #f5f5f5; padding: 20px; border-radius: 5px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0f766e; }
              .message { white-space: pre-wrap; background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #0f766e; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="color: #0f766e; margin-top: 0;">New Contact Form Submission</h2>
                <p>You have received a new message from your website contact form.</p>
              </div>
              
              <div class="field">
                <span class="label">Name:</span><br />
                ${formData.name}
              </div>
              
              <div class="field">
                <span class="label">Email:</span><br />
                <a href="mailto:${formData.email}">${formData.email}</a>
              </div>
              
              ${
                formData.phone
                  ? `
              <div class="field">
                <span class="label">Phone:</span><br />
                ${formData.phone}
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <span class="label">Subject:</span><br />
                ${formData.subject || "Not specified"}
              </div>
              
              <div class="field">
                <span class="label">Message:</span>
                <div class="message">
                  ${formData.message.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
              <p style="color: #666; font-size: 12px;">
                This message was sent from your website contact form on ${new Date().toLocaleString()}.
              </p>
            </div>
          </body>
        </html>
      `;

      // Prepare the API request payload
      const payload = {
        email: "Shefahealthcoaching@gmail.com", // Your email to receive messages
        subject: `New Contact Form: ${
          formData.subject || "General Inquiry"
        } - ${formData.name}`,
        sender_name: `${formData.name} (via Website)`,
        reply_to: formData.email,
        reply_name: formData.name,
        body: emailBody,
        html: "true",
      };

      // Send email using Reni Mail API
      const response = await fetch(`${RENI_MAIL_API_URL}/sendSingleMail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${KEY}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success - also send confirmation email to user
        await sendConfirmationEmail(formData.email, formData.name);

        setSubmitMessage(
          "Thank you for your message! I will get back to you within 24-48 hours."
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again or email me directly at Shefahealthcoachingsm@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Send confirmation email to the user
  const sendConfirmationEmail = async (userEmail: string, userName: string) => {
    try {
      const confirmationPayload = {
        email: userEmail,
        subject: "Thank You for Reaching Out!",
        sender_name: "Shefa Health Coaching",
        reply_to: "Shefahealthcoaching@gmail.com",
        reply_name: "Shefa Health Coaching",
        body: `
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #f0f9ff; padding: 30px; text-align: center; border-radius: 10px; }
                .content { padding: 20px; }
                .highlight { color: #0f766e; font-weight: bold; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="color: #0f766e; margin: 0;">Thank You for Reaching Out!</h1>
                </div>
                
                <div class="content">
                  <p>Hi ${userName},</p>
                  
                  <p>Thank you for contacting <span class="highlight">Shefa Health Coaching</span>! I've received your message and will get back to you within <span class="highlight">24-48 hours</span>.</p>
                  
                  <p>In the meantime, feel free to:</p>
                  <ul>
                    <li>Explore my wellness resources</li>
                    <li>Follow my journey on social media</li>
                    <li>Check out upcoming workshops and courses</li>
                  </ul>
                  
                  <p><strong>Your privacy matters:</strong> All information shared is kept confidential and will only be used to respond to your inquiry.</p>
                  
                  <p>Warmly,<br />
                  <strong>Shefa Health Coaching</strong></p>
                  
                  <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
                  
                  <p style="color: #666; font-size: 12px;">
                    <strong>Contact Information:</strong><br />
                    Email: Shefahealthcoachingsm@gmail.com<br />
                    Location: 38 London Road, Tilbury RM18 8DU, United Kingdom
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
        html: "true",
      };

      await fetch(`${RENI_MAIL_API_URL}/sendSingleMail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${KEY}`,
        },
        body: JSON.stringify(confirmationPayload),
      });
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      // Don't show error to user - main form submission was successful
    }
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
            <h2 className=" text-[25px] sm:text-3xl mb-6 text-teal-900">
              Contact Information
            </h2>
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
                  <h3 className="text-[16px] sm:text-lg mb-0.5 text-teal-900">
                    Email
                  </h3>
                  <a
                    href="mailto:Shefahealthcoaching@gmail.com"
                    className="text-gray-700 hover:text-teal-700 text-[13px] sm:text-[16px] "
                  >
                    Shefahealthcoaching@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Phone className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className=" text-[16px] sm:text-lg mb-0.5 text-teal-900">
                    Phone
                  </h3>
                  <p className="text-gray-700  text-[13px] sm:text-[16px] ">
                    Available for consultations
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-teal-700" size={24} />
                </div>
                <div>
                  <h3 className=" text-[16px] sm:text-lg mb-0.5 text-teal-900">
                    Location
                  </h3>
                  <p className="text-gray-700  text-[13px] sm:text-[16px] ">
                    38 London Road, Tilbury RM18 8DU, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-[16px] sm:text-lg mb-1 text-teal-900">
                    Response Time
                  </h3>
                  <p className="text-gray-700  text-[13px] sm:text-[16px] ">
                    Within 24-48 hours
                  </p>
                  <p className=" text-[13px] sm:text-[16px]  text-gray-600 mt-1">
                    Monday - Friday
                  </p>
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
              <h2 className=" text-[21px] sm:text-3xl mb-6 text-teal-900">
                Send Me a Message
              </h2>

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
                    disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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

                {/* Submit Message */}
                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitMessage.includes("Thank you")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-white px-8 py-4 rounded-lg transition-colors flex items-center justify-center text-lg ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-primary/90 cursor-pointer"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      <p className="text-[13px] sm:text-[18px]">
                        {" "}
                        Send Message
                      </p>
                    </>
                  )}
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
