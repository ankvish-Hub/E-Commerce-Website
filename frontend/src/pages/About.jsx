import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      {/* About Us Heading */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* About Content */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Forever"
        />

        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            transform the online shopping experience. We believe that fashion
            should be accessible, affordable, and enjoyable for everyone,
            regardless of where they are.
          </p>

          <p>
            Since our beginning, we have focused on providing high-quality
            products, exceptional customer service, and a seamless shopping
            journey. Our carefully curated collections are designed to meet the
            evolving needs and preferences of modern customers.
          </p>

          <b className="text-gray-800">Our Mission</b>

          <p>
            Our mission is to empower customers with a diverse range of stylish
            and quality products while delivering an outstanding shopping
            experience. We strive to build trust, create value, and inspire
            confidence through every purchase.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center py-10">
        <Title text1={"WHY"} text2={"CHOOSE US"} />

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          The Forever Difference
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mt-4">
          We are committed to providing an exceptional shopping experience with
          premium quality products, reliable service, and customer-first
          support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="text-4xl mb-4"></div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Premium Quality
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Every product is carefully selected and tested to ensure exceptional
            quality, durability, and long-lasting customer satisfaction.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="text-4xl mb-4"></div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Fast Delivery
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Enjoy quick and secure shipping services designed to get your
            favorite products delivered right to your doorstep.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="text-4xl mb-4"></div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            24/7 Support
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Our dedicated customer support team is always available to assist
            you and ensure a smooth shopping experience.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
