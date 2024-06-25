"use client";

import { useState } from "react";

const [name, setName] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [company, setCompany] = useState<string>("");
const [position, setPosition] = useState<string>("");

const submitForm = async (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();

  setName("");
  setEmail("");
  setCompany("");
  setPosition("");

  if (!name || !email || !company || !position) {
    alert("Please fill in all fields");
    return;
  }

  alert("Form submitted successfully");
};


export default function Registration() {
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
          onSubmit={submitForm}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                pattern="[A-Za-z ]+"
                title="Name must contain only letters or spaces"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="company">Company*</label>
              <input
                type="text"
                name="company"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="position">Position*</label>
              <input
                type="text"
                name="position"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
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
