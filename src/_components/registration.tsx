"use client";

import { useState } from "react";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.position
    ) {
      alert("Please fill in all fields");
      return;
    }

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        alert(`Please fill in ${key}`);
        return;
      }
      if (value.length > 255) {
        alert(`Please flex ${key} less than 255 char`);
        return;
      }
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      alert("Name only can contain letters and spaces");
      return;
    }

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error("Error:", error);
        alert("Error submitting form");
      }

      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <section id="register" className="bg-purple">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-16 px-8 py-24 text-white lg:max-w-7xl lg:flex-row lg:justify-center">
        <div className="hidden w-1/2 lg:block">
          <h2 className="font-title text-lg font-bold">Register now</h2>
          <p className="text-sm">We are excited to welcome you to the event</p>
          <h3 className="mt-16 text-base font-semibold">Easy registration</h3>
          <p className="text-sm">Register for the event in minutes</p>
          <h3 className="mt-8 text-base font-semibold">Automatic reminders</h3>
          <p className="text-sm">Be on time for every session</p>
          <h3 className="mt-8 text-base font-semibold">Remote seminar</h3>
          <p className="text-sm">A public room you are invited to join</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-lg flex flex-col justify-center gap-8 rounded-lg bg-white py-8 text-center text-black lg:w-1/2"
        >
          <h3 className="font-title text-base font-semibold">Contact us</h3>
          <div className="mt-2 flex w-full flex-row flex-wrap justify-center gap-4 text-left">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                pattern="^[A-Za-z\s]{1,255}$"
                title="Name name must be less than 255 characters and only letters or spaces"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                pattern={"{1,255}"}
                title="Email name must be less than 255 characters"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company">Company*</label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                pattern={"{1,255}"}
                title="Company name must be less than 255 characters"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="position">Position*</label>
              <input
                type="text"
                name="position"
                id="position"
                value={formData.position}
                onChange={handleChange}
                pattern={"{1,255}"}
                title="Position name must be less than 255 characters"
                required
              />
            </div>
          </div>
          <button type="submit" className="mx-auto h-14 w-48">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
