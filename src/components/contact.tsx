'use client';
import React, { useRef, useState } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type FormData = {
    firstName: string;
    lastName: string;
    fromEmail: string;
    message: string;
};

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
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = () => {
        if (form.current) {
            setSending(true);
            emailjs.sendForm('service_2uh0jul', 'template_dl9p4ab', form.current, {
                publicKey: 'm0Oycl7b3B-mApVz4',
            })
                .then(
                    () => {
                        toast.success('Message sent successfully!');
                        reset();
                        setSending(false);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setSending(false);
                        toast.error('Failed to send message, try again later');
                    }
                );
        }
    };

    return (
        <div id='contact' className="flex flex-col items-center justify-center bg-gray/[0.56] w-full mt-14">
            <h2 className="text-center pb-2 text-xl md:text-4xl font-bold text-black dark:text-white">
                Drop a Message, Let&apos;s Create Magic! 🚀
            </h2>
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black text-white">
                {sending ? (
                    <div className="h-[22rem] mb-8 mt-4 flex items-center justify-center">
                        <SyncLoader color="#b6b6b6" />
                    </div>
                ) : (
                    <form className="mb-8 mt-4 h-[22rem]" noValidate onSubmit={handleSubmit(onSubmit)} ref={form}>
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
                                {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
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
                                {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
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
                            {errors.fromEmail && <span className="text-red-500">{errors.fromEmail.message}</span>}
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
                            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
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
