import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Contact Section */}
      <div className="my-12 flex flex-col md:flex-row gap-10 mb-20">
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-md"
          src={assets.contact_img}
          alt="Contact Us"
        />

        <div className="flex flex-col justify-center items-start gap-6 text-gray-600">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Get In Touch
            </h3>
            <p>
              We'd love to hear from you. Whether you have a question about
              products, orders, shipping, or anything else, our team is ready to
              help.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">📍 Our Store</p>
            <p>
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">📞 Contact</p>
            <p>+1 (555) 123-4567</p>
            <p>support@forever.com</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Careers at Forever</p>
            <p>Learn More About Our Team and Job Openings</p>
          </div>

          <button className="border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
