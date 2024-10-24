import React from 'react';
import Image from 'next/image';
import ReactLogo from '../assets/react.svg';
import NodeJsLogo from '../assets/nodejs.svg';
import ExpressJsLogo from '../assets/express.svg';
import GitHubLogo from '../assets/github.svg';
import MongoDBLogo from '../assets/mongodb.svg';
import NextJsLogo from '../assets/nextjs.svg';
import StripeLogo from '../assets/stripe.svg';
import TailwindLogo from '../assets/tailwind.svg';
import FramerMotionLogo from '../assets/framermotion.svg';
import JWTLogo from '../assets/jwt.svg';

const Technoloies = () => {
    return (
        <div id='technologies' className="flex flex-col items-center justify-center bg-gray/[0.56]  w-full mt-14">
            <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                Tech Stack and Strategy
            </h2>

            {/* Logos Row 1  */}
            <div className="flex flex-wrap justify-center items-center mt-8 mb-1 lg:mb-4 overflow-x-auto relative z-20 no-visible-scrollbar gap-y-2 px-[3px] md:px-0 lg:px-0 ">

                {/* react  */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image src={ReactLogo} alt="React Logo"
                        className="w-5 md:w-8 lg:w-12 object-contain"
                        />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">React</span>
                </div>

                {/* Node js  */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image src={NodeJsLogo} alt="NodeJs Logo" 
                        className="w-5 md:w-8 lg:w-12 object-contain"
                        />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">Node.js</span>
                </div>

                {/* Express js  */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image
                            src={ExpressJsLogo}
                            alt="Express.js Logo"
                            className="w-5 md:w-8 lg:w-12 object-contain"
                        />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">Express.js</span>
                </div>

                {/* Mongo DB  */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image src={MongoDBLogo} alt="MongoDBLogo"
                        className="w-5 md:w-8 lg:w-12 object-contain" />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">MongoDB</span>
                </div>
            </div>
            {/* Logos Row 2  */}
            <div className="flex flex-wrap justify-center  items-center mt-2 mb-4  px-[3px] md:px-0 lg:px-0 overflow-x-auto relative z-20 no-visible-scrollbar gap-y-2">

                {/* next js  */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image src={NextJsLogo} alt="NextJsLogo"
                        className="w-5 md:w-8 lg:w-12 object-contain"
                        />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">Next.js</span>
                </div>

                {/* github  */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image src={GitHubLogo} alt="GitHubLogo"
                        className="w-5 md:w-8 lg:w-12 object-contain"
                        />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">Github</span>
                </div>

                {/* stripe  */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image src={StripeLogo} alt="StripeLogo"
                        className="w-5 md:w-8 lg:w-12 object-contain"
                        />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">Stripe</span>
                </div>

                {/* jwt authentification */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image src={JWTLogo} alt="JWTLogo"
                        className="w-5 md:w-8 lg:w-12 object-contain"
                        />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">JWT</span>
                </div>

                {/* TailwindCSS */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image src={TailwindLogo} alt="TailwindLogo"
                        className="w-5 md:w-8 lg:w-12 object-contain"
                        />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">TailwindCSS</span>
                </div>

                {/* Framer Motion */}
                <div className="flex items-center space-x-2 mr-4">
                    <span>
                        <Image src={FramerMotionLogo} alt="FramerMotionLogo"
                        className="w-5 md:w-8 lg:w-12 object-contain"
                        />
                    </span>
                    <span className="text-sm md:text-lg lg:text-2xl font-semibold text-neutral-500 flex-shrink-0">Framer Motion</span>
                </div>
            </div>
            <h2
                style={{ color: '#737373' }} className="mt-4 px-4 md:px-0 lg:px-0 font-normal text-sm md:text-xl lg:text-xl max-w-2xl mx-auto text-center"
            >Every project is divided into several key phases, each focusing on different aspects of development and implementation</h2>
        </div>
    );
}

export default Technoloies;