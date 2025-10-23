import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate property type selection
    if (!formData.property) {
      alert("Please select a property type.");
      return;
    }

    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      property: "",
      message: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.property) {
      alert("Please select a property type.");
      return;
    }

    emailjs
      .sendForm("service_z3tis0d", "template_j73mvol", form.current, {
        publicKey: "1zAI34eR3Aimqx2b5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      property: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-orange-100 flex items-center justify-center p-6">
      <div className="backdrop-blur-lg bg-white shadow-lg rounded-lg max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">
        {/* Left Side: Contact Info */}
        <div className="bg-orange-200 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have questions or want to get in touch? Fill out the form and we’ll
            get back to you as soon as possible.
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>📍 Nashik, Maharashtra, India</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 info@ksrealtors.com</li>
          </ul>

          <div className="flex space-x-4 mt-6 w-full h-full">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64996.697694517745!2d73.67747534863277!3d19.9745129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb8dcf04dabd%3A0x45df7ffa2625b8f4!2sRajashree&#39;s%20THE%20Morning!5e1!3m2!1sen!2sin!4v1761206801409!5m2!1sen!2sin"
              //   width="full"
              //   height="450"
              //   style="border:0;"
              //   allowfullscreen=""
              //   loading="lazy"
              //   referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-8 flex flex-col justify-center"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Property Type
            </label>
            <select
              name="property"
              value={formData.property}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
            >
              <option value="">Select a property type</option>
              <option value="Plot">Plot</option>
              <option value="Flat">Flat</option>
              <option value="Villa">Villa</option>
              <option value="Commercial Space">Commercial Space</option>
              <option value="Farm Land">Farm Land</option>
              <option value="Farm Land">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
