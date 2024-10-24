import React from "react";
import { FloatingDock } from "./ui/floatingDock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons-react";

export function SocialLinks() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/arham-saleem/",
    },
    {
      title: "FaceBook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/arham.malik.5015/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/mr_._psych/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/ArhamSaleem900",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/CodeWithPsych",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
