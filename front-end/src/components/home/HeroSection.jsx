import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gray-900 py-16 rounded">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome to Knot</h1>
              <p className="text-xl mb-6">
                Discover the power of Knot, a platform that connects people and
                fosters meaningful relationships.
              </p>
            </div>
            <div className="flex items-center">
              <a href="#" className="mr-4 text-white hover:text-gray-300">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="mr-4 text-white hover:text-gray-300">
                <i className="fab fa-twitter-square text-2xl"></i>
              </a>
              <a href="#" className="mr-4 text-white hover:text-gray-300">
                <i className="fab fa-instagram-square text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-2">Digital Card</h2>
              <p className="text-gray-700 mb-2">
                Create your digital card and share your information with others.
              </p>
              <ul className="text-gray-700">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    facebook.com/name
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    twitter.com/name
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    mywebiste.com
                  </a>
                </li>
              </ul>
              <Link
                to="/register"
                className="bg-primary text-white font-bold py-2 px-4 rounded mt-4 inline-block"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
