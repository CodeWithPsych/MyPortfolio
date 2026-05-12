"use client";
import React, { useRef, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type FormData = {
  firstName: string;
  lastName: string;
  fromEmail: string;
  message: string;
};
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
  throw new Error("Missing EmailJS environment variables");
}
const Contact = () => {
  const radius = 100;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [visible, setVisible] = useState(false);

  const motionBg = useMotionTemplate`
        radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
        )
    `;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = () => {
    if (form.current) {
      setSending(true);
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            toast.success("Message sent successfully!");
            reset();
            setSending(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setSending(false);
            toast.error("Failed to send message, try again later");
          },
        );
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgb(139 92 246 / 4%),transparent_70%)] w-full mt-10"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
          Drop a Message,
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Let’s Connect
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-400 md:text-lg">
          Have an idea, project, or opportunity in mind? I’d love to hear from
          you and build something amazing together.
        </p>
      </motion.div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-transparent text-white">
        {sending ? (
          <div className="h-[22rem] mb-8 mt-4 flex items-center justify-center">
            <SyncLoader color="#b6b6b6" />
          </div>
        ) : (
          <form
            className="mb-8 mt-4 h-[22rem]"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            ref={form}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <div className="flex flex-col space-y-2 w-full">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <span className="text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-2 w-full mb-4">
              <Label htmlFor="fromEmail">Email Address</Label>
              <Input
                id="fromEmail"
                placeholder="example@gmail.com"
                type="email"
                {...register("fromEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors.fromEmail && (
                <span className="text-red-500">{errors.fromEmail.message}</span>
              )}
            </div>
            <div className="flex flex-col space-y-2 w-full mb-4">
              <Label htmlFor="message">Your Message</Label>
              <motion.div
                style={{ background: motionBg }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-[2px] rounded-lg transition duration-300 group/input"
              >
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Message is required",
                  })}
                  rows={5}
                  placeholder="Enter your message here"
                  className="flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 transition duration-400"
                />
              </motion.div>
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium"
            >
              Send it &rarr;
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
