import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    desc: "We create fast, responsive, and user-friendly websites tailored to your business needs.",
    href: "#web-development",
  },
  {
    icon: FaPaintBrush,
    title: "Graphic Design",
    desc: "Eye-catching visuals that speak your brand's language. Our graphic design services.",
    href: "#graphic-design",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    desc: "Grow your online presence with our strategic digital marketing services.",
    href: "#digital-marketing",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "Transform your ideas into functional, high-performance mobile apps.",
    href: "#mobile-app-development",
  },
];

export default function Services() {
  return (
    <section className="py-12 px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-normal text-gray-900">
          How we can Help you?
        </h2>

        <p className="mt-6 text-gray-500 text-base md:text-xl">
          Whether you're launching a new business or looking to elevate your
          <br className="hidden sm:block" />
          existing brand.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl grid gap-12 md:grid-cols-2">
        {services.map(({ icon: Icon, title, desc, href }) => (
          <a
            key={title}
            href={href}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 rounded-xl border border-yellow-400 bg-white p-5 sm:p-8 text-center sm:text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full border-4 border-yellow-200">
              <Icon className="text-3xl sm:text-4xl text-yellow-500" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                {title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
                {desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}