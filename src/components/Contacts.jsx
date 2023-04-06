import Map from "./Map";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="h-screen w-screen snap-center grid items-center grid-flow-col grid-cols-2 ">
      <form
        ref={form}
        className="flex flex-col w-full pl-60  gap-3 "
        onSubmit={handleSubmit}
      >
        <h1>Contact Us</h1>
        <input
          className="py-2 px-4  text-slate-600 rounded-md border-none outline-none"
          autoFocus={true}
          type={"text"}
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="py-2 px-4 text-slate-600 rounded-md border-none outline-none"
          type={"email"}
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          name="message"
          className="rounded-md py-2 px-4  text-slate-600 border-none outline-none"
          rows={10}
          placeholder="Write your message"
          required
        ></textarea>
        <button className="bg-orange-300  py-2 px-4 rounded-md" type="submit">
          Send
        </button>
        {success && "Sent Successfully!"}
      </form>
      <div className="flex-1 h-full w-full">
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
