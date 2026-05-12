"use client";
import React from "react";
import { Mail, Phone, MapPin,Code2, Server, Database, Boxes, Palette } from "lucide-react";


export function Footer() {
  return (
    <footer className="w-full mt-9   pt-16 pb-10 px-4">
      <div className="mx-auto w-[90%] max-w-6xl flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT SECTION */}
        <div className="flex flex-col max-w-md">
          <h1 className="text-3xl font-black text-white">CodeWithPsych</h1>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            Turning ideas into scalable digital products using MERN and Next.js.
            Focused on building fast, responsive, and modern web experiences.
            Keeping design clean, simple, and user-focused.
          </p>

          <div className="mt-6 text-sm text-neutral-500">
            Building the web one idea at a time — fast, minimal, and meaningful.
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* CONTACT */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>

            <ul className="space-y-3 text-sm text-neutral-400">
            <li className="flex items-center gap-2">
  <Mail className="h-4 w-4 text-purple-500" />
  <span className="text-white">arhammalik900@yahoo.com</span>
</li>

<li className="flex items-center gap-2">
  <Phone className="h-4 w-4 text-purple-500" />
  <span className="text-white">+92 344 4716303</span>
</li>

<li className="flex items-center gap-2">
  <MapPin className="h-4 w-4 text-purple-500" />
  <span className="text-white">Punjab, Pakistan</span>
</li>
            </ul>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Tech Stack
            </h2>

            <ul className="space-y-3 text-sm text-neutral-400">
         <li className="flex items-center gap-2">
  <Code2 className="h-4 w-4 text-purple-500" />
  React / Next.js
</li>

<li className="flex items-center gap-2">
  <Server className="h-4 w-4 text-purple-500" />
  Node.js / Express
</li>

<li className="flex items-center gap-2">
  <Database className="h-4 w-4 text-purple-500" />
  MongoDB / Mongoose
</li>

<li className="flex items-center gap-2">
  <Boxes className="h-4 w-4 text-purple-500" />
  Redux Toolkit
</li>

<li className="flex items-center gap-2">
  <Palette className="h-4 w-4 text-purple-500" />
  Tailwind CSS
</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-3">
        <p>© {new Date().getFullYear()} CodeWithPsych. All rights reserved.</p>

        <p className="text-neutral-600">Built with Next.js ⚡ & Tailwind CSS</p>
      </div>
    </footer>
  );
}
