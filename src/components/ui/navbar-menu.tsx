"use client";
import React from "react";
import { motion } from "framer-motion";

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} 
            className="relative text-sm md:text-lg lg:text-xl w-[90%] md:w-full rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-3 md:space-x-4 px-8 py-6 mx-0 sm:mx-4"
        >
            {children}
        </nav>
    );
};


export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            onMouseEnter={() => setActive(item)}
            className="relative group cursor-pointer"
        >
            <motion.p
                transition={{ duration: 0.3 }}
                className="text-black dark:text-white"
            >
                {item}
            </motion.p>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-white transition-all duration-300">
                <div className="h-full w-0 bg-white group-hover:w-full transition-all duration-700"></div>
            </div>
            {active === item && children}
        </div>
    );
};
