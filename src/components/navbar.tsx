"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("flex justify-center items-center fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-0 sm:px-2", className)}>
            <Menu setActive={setActive}>
                <Link href="#home">
                    <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                </Link>
                <Link href="#services" passHref><MenuItem setActive={setActive} active={active} item="Services"></MenuItem></Link>
                <Link href="#technologies" passHref><MenuItem setActive={setActive} active={active} item="Technologies"></MenuItem></Link>
                <Link href="#portfolio" passHref><MenuItem setActive={setActive} active={active} item="Portfolio"></MenuItem></Link>
                <Link href="#contact" passHref><MenuItem setActive={setActive} active={active} item="Contact"></MenuItem></Link>
            </Menu>
        </div>
    );
}

export default Navbar;
