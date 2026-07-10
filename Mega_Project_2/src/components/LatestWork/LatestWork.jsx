import React from "react";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/card6.jpg";


const projects = [
  {
    title: "E-commerce Website",
    desc: "Developed a fully responsive and high-performance e-commerce platform.",
    image: card1,
    href: "#",
  },
  {
    title: "Social Media Campaign",
    desc: "Designed and executed a 3-month digital marketing campaign.",
    image: card2,
    href: "#",
  },
  {
    title: "Fitness App",
    desc: "Built a web application for a local gym service.",
    image: card3,
    href: "#",
  },
  {
    title: "Organic Skincare",
    desc: "Created a complete brand identity including logo, packaging for a new organic skincare startup.",
    image: card4,
    href: "#",
  },
  {
    title: "B2B Company",
    desc: "Built a custom CRM system to streamline lead tracking, sales analytics.",
    image: card5,
    href: "#",
  },
  {
    title: "Website Redesign for Educational Institute",
    desc: "Redesigned and optimized the website of an educational institute",
    image: card6,
    href: "#",
  },
];

export default function LatestWork() {
  return (

    <section className="py-12 px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-normal text-gray-900">
           Our Latest Work
        </h2>

        <p className="mt-6 text-gray-500 text-base md:text-xl">
          Whether you're launching a new business or looking to elevate your
          <br className="hidden sm:block" />
          existing brand.
        </p>
      </div>
      
    <div className="px-4 py-12">
      <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="overflow-hidden rounded-2xl border border-yellow-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-medium text-gray-900">
                {project.title}
              </h3>
              <p className="mt-4 text-gray-500 leading-relaxed">
                {project.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  );
}