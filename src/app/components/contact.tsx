"use client";
import styles from "./styles.module.css";
import React, { useState } from "react";

export default function ContactComponent() {
  const [message, setMessage] = useState('');

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f90aa28e-a50d-4e56-85f3-fbfc69dc37cc"); // Replace with your actual key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setMessage("Message sent successfully!");
        event.target.reset(); // Clear the form
      } else {
        setMessage("Error sending message: " + result.message);
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
      console.error(error);
    }
  }

  return (
    <div id="contact" className="bg-gray-700 font-sans p-10 w-auto">
      <h3 className="text-center text-3xl text-white">Contact Me.</h3>
      <p className="text-center text-2sm text-white p-5 pb-0 font-normal">
        Phone: +63 955 577 3396
      </p>
      <p className="text-center text-2sm text-white font-normal">
        Viber: +63 955 577 3396
      </p>
      <p className="text-center text-2sm text-white font-normal">
        <a href="mailto:warrentulangdano@gmail.com">
          Email: warrentulangdano@gmail.com
        </a>
      </p>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="text-white m-5 gap-5 w-auto grid">
          <input
            name="name"
            required
            placeholder="Name"
            className="border-2 w-100 pl-5 pr-5 pt-3 pb-3 bg-white text-black"
          />
          <input
            name="email"
            required
            placeholder="Email"
            className="border-2 w-100 pl-5 pr-5 pt-3 pb-3 bg-white text-black"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            className="border-2 w-100 pl-5 pr-5 pt-3 pb-3 bg-white text-black"
          />
          <div className="">
            <button
              type="submit"
              className="bg-black pl-5 pr-5 pt-3 pb-3 border-amber-600 hover:bg-gray-500 hover:text-white hover:border-black cursor-pointer"
            >
              Send Message
            </button>
            {message && <p>{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
