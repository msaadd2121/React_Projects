import React from "react";
import { Link,NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div className="flex flex-col px-20">
            <h2 className="text-2xl font-medium text-gray-900">
              Brightmatter.ai
            </h2>
            <div className="mt-2 h-4 w-4 rounded-full bg-yellow-400" />

            <p className="mt-6 max-w-md text-gray-500">
              Whether you're launching a new business or looking to elevate
              your existing brand.
            </p>

            <nav className="mt-8 flex flex-wrap  gap-6 font-semibold text-gray-700">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/work">Our Work</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </nav>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-medium text-gray-900">
              Subscribe to our newsletter
            </h3>

            <p className="mt-4 text-gray-500">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <form className="mt-6 flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded border border-gray-300 px-4 py-3 outline-none"
              />
              <button className="rounded bg-yellow-400 px-6 py-3 font-semibold text-gray-900">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-6 text-center md:flex-row md:text-left">
  <p className="text-gray-500 px-20">
    Copyright 2025 © TheAbhishekCodes - All Right Reserved.
  </p>

  <div className="flex gap-5 text-2xl text-yellow-500">
    <a href="#"><FaFacebook /></a>
    <a href="#"><FaTwitter /></a>
    <a href="#"><FaInstagram /></a>
    <a href="#"><FaLinkedin /></a>
    <a href="#"><FaGoogle /></a>
  </div>
</div>
      </div>
    </footer>
  );
}