import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactimg from '../assets/images/contactimg.png'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-800 py-20" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-white text-center mb-8">
            Get in Touch
          </h1>
          <p className="text-xl text-white text-center mb-12">
            Have a project or just want to say hello? I’d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-700 p-8 rounded-lg shadow-xl"
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 mb-4 bg-gray-800 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 mb-4 bg-gray-800 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 mb-4 bg-gray-800 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-orange-300 text-gray-800 font-semibold rounded-md shadow-lg hover:bg-orange-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-700 p-8 rounded-lg shadow-xl"
          >
            {/* Image or Illustration */}
            <div className="mb-8">
              <img
                src={contactimg}
                alt="Communication or Collaboration"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Brief Text */}
            <p className="text-lg text-white mb-6">
              I'm always excited to connect with like-minded individuals and potential collaborators. Feel free to reach out for project
              inquiries, job opportunities, or just a friendly hello. I'm here to help and build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
