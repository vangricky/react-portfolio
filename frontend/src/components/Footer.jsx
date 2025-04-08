import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between gap-10"
        >
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex space-x-6 text-3xl">
              <a
                href="https://github.com/vangricky"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/rickyvang"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/vangricky"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/cheemeng.ricky.vang"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-sm">Email: cheemengrvang@gmail.com</p>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">Company</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="/about"
                  className="hover:text-orange-300 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-orange-300 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-orange-300 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-orange-300 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-orange-300 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Ricky Vang. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-400">
              Built with passion and dedication.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
