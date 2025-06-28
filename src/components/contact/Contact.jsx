import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-[#2c3a4f] mb-12"
      >
        Get in touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#1e293b] text-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2"
      >
        {/* Left Side - Contact Info */}
        <div className="p-8 space-y-4 border-r border-white/10">
          <h3 className="text-2xl font-bold">Fill in the form to start a conversation</h3>
          <p className="text-sm">I’ll try my best to get back to you as soon as possible.</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-lg" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg" />
              <a href="tel:+8801891917069">
                +880 1891917069
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <a href="mailto:sumiayaakther15@gmail.com">
                sumiayaakther15@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          action="https://formspree.io/f/mdkzyjgr"
          method="POST"
          className="p-8 space-y-6"
        >
          <div>
            <label className="block mb-1">Full name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0f172a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Leroy Jenkins"
            />
          </div>
          <div>
            <label className="block mb-1">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0f172a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="leroy@jenkins.com"
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-md bg-[#0f172a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 cursor-pointer bg-[#345783] text-white rounded-lg hover:bg-cyan-700 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
