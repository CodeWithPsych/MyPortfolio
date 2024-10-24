'use client'
// import Link from "next/link";
import { Spotlight } from "./ui/SpotLight";
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div
           id="home" className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto pt-20 md:pt-16 lg:pt-10"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="p-4 relative z-10 w-full text-center">
                <h1
                    className="mt-20 md:mt-0 text-2xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Hello, I'm Arham Saleem</h1>
                <h2
                    className="mt-4 font-normal text-base md:text-2xl text-neutral-300 max-w-lg mx-auto"
                >Welcome to My Digital Realm!</h2>
                <p
                    className="mt-4 font-normal text-sm md:text-lg text-neutral-300 max-w-2xl mx-auto"
                >Explore the projects, code, and creativity that fuel my passion as a full stack web developer. Whether it's crafting responsive web apps with the MERN stack, diving deep into Next.js, or experimenting with cutting-edge technologies, you'll find it all here. Let's build something amazing together!</p>
                <div className="mt-4">
                    <a
                        href="/Resume.pdf"
                        download="Resume.pdf"
                    >
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Download Resume
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
