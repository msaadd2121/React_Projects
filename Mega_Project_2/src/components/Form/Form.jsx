import React, { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-12 px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-normal text-gray-900">
          Reach out to us
        </h2>

        <p className="mt-6 text-base text-gray-500 md:text-lg">
          Let’s talk! Whether it’s a quick question or a big project, we’re
          just a message <br className="hidden sm:block" />
          away.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-12 max-w-4xl p-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-lg font-medium text-gray-900">
              Your name
            </label>
            <div className="flex items-center rounded border border-gray-300 px-4 py-3">
              <FaUser className="mr-3 text-gray-700" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-lg font-medium text-gray-900">
              Your Email
            </label>
            <div className="flex items-center rounded border border-gray-300 px-4 py-3">
              <FaEnvelope className="mr-3 text-gray-700" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <label className="mb-2 block text-lg font-medium text-gray-900">
            Your message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={10}
            placeholder="Enter your message"
            className="w-full rounded border border-gray-300 p-6 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-8 rounded-full bg-yellow-400 px-8 py-3 text-lg font-semibold text-gray-900 transition hover:-translate-y-1"
        >
          Submit →
        </button>
      </form>
    </section>
  );
}