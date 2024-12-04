import React from 'react';
import Image from 'next/image';
import Ecommerce from '../assets/ecommerce.jpg'
import News from '../assets/news.jpg'
import Todo from '../assets/todo.png'
import Textutils from '../assets/Texteditor.png'
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div id='portfolio' className="flex items-center justify-center bg-gray/[0.56] w-full my-14 ">
            <div className="flex flex-col w-4/5 items-center">
                <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                    ⚡A Glimpse Into My Recent Projects
                </h2>
                <div className='flex flex-col w-full  mt-5 lg:mt-10 md:mt-10 items-start   h-auto'>
                    {/* website no 1  */}
                    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-7 my-5'>
                        <div className='flex box-border cursor-pointer border-2 p-3 justify-center items-center rounded-2xl bg-gray-900 hover:bg-gray-800 w-52 h-40 animate-moving-border'>
                            <Image className='object-contain rounded-xl hover:scale-105' src={Ecommerce} alt="Urham Galoure" />
                        </div>

                        <div className="flex flex-col">
                            <h2 className='text-xl lg:text-2xl tracking-wide font-bold text-gray-400'>
                                Ecommerce Store
                            </h2>
                            <ul className="list-disc pl-5 pt-4 md:pt-0 lg:pt-0 text-gray-300 text-xs lg:text-xl">
                                <li><strong>Urham Galoure</strong> - A fully functional e-commerce platform offering seamless user experience</li>
                                <li>Secure and efficient <strong>login</strong> and <strong>signup</strong> systems for both users and admins</li>
                                <li>Comprehensive <strong>admin panel</strong> for managing products, orders, users, and inventory</li>
                                <li>Integrated <strong>card payment</strong> gateway along with <strong>cash on delivery</strong> options</li>
                                <li>User-friendly shopping cart, wishlist features and much more </li>
                            </ul>
                            <div className='mt-3 text-gray-400 font-semibold'>
                                ReactJs &nbsp; NodeJs &nbsp; ExpressJs &nbsp; MongoDB &nbsp; Stripe &nbsp; Tailwind
                            </div>
                            <Link target='_blank' href='#'> <button className='flex border-2 rounded border-gray-800 hover:border-gray-700  bg-gray-900 hover:bg-gray-800 hover:text-orange-100 text-center p-1 justify-center flex-initial mt-3 text-lg text-white w-32 '>Visit Now</button></Link>
                        </div>
                    </div>

                    {/* website no 2  */}
                    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-7 my-5'>
                        <div className='flex box-border cursor-pointer border-2 p-3 justify-center items-center rounded-2xl bg-gray-900 hover:bg-gray-800 w-52 h-40 animate-moving-border'>
                            <Image className='object-contain rounded-xl hover:scale-105' src={Textutils} alt="Textutils" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className='text-2xl  tracking-wide font-bold text-gray-400'>
                                Text Editer
                            </h2>
                            <ul className="list-disc pl-5 pt-4 md:pt-0 lg:pt-0 text-gray-300 text-xs lg:text-xl">
                                <li><strong>TextUtils</strong> - A versatile tool for editing and transforming text</li>
                                <li>Capitalize words or convert them to lowercase with ease</li>
                                <li>Automatically capitalize the first letter of every sentence</li>
                                <li>Count the total words and characters in your text</li>
                                <li>Efficiently remove extra spaces from the text</li>
                                <li>Instantly preview the changes before applying them</li>
                            </ul>
                            <div className='mt-3 text-gray-400 font-semibold'>
                                ReactJs &nbsp; React Bootstrap
                            </div>
                            <Link target='_blank' href='https://text-editer-by-psych.netlify.app/'><button className='flex border-2 rounded border-gray-800 hover:border-gray-700  bg-gray-900 hover:bg-gray-800 hover:text-orange-100 text-center p-1 justify-center flex-initial mt-3 text-lg text-white w-32 '>Visit Now</button>   </Link>
                        </div>
                    </div>

                    {/* website no 3  */}
                    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-7 my-5'>
                        <div className='flex box-border cursor-pointer border-2 p-3 justify-center items-center rounded-2xl bg-gray-900 hover:bg-gray-800 w-52 h-40 animate-moving-border'>
                            <Image className='object-contain rounded-xl hover:scale-105' src={News} alt="News monkey" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className='text-2xl  tracking-wide font-bold text-gray-400'>
                                News App
                            </h2>
                            <ul className="list-disc pl-5 pt-4 md:pt-0 lg:pt-0 text-gray-300 text-xs lg:text-xl">
                                <li><strong>NewsMonkey</strong> - A cutting-edge platform delivering the latest news</li>
                                <li>Real-time updates on trending news, politics, entertainment, technology, and more</li>
                                <li>Intuitive and user-friendly interface for seamless browsing across categories</li>
                                <li>Personalized news feed based on user preferences and interests</li>
                            </ul>
                            <div className='mt-3 text-gray-400 font-semibold'>
                                ReactJs &nbsp; React Bootstrap &nbsp; News Api
                            </div>
                            <Link target='_blank' href='https://news-with-psych.netlify.app/'><button className='flex border-2 rounded border-gray-800 hover:border-gray-700  bg-gray-900 hover:bg-gray-800 hover:text-orange-100 text-center p-1 justify-center flex-initial mt-3 text-lg text-white w-32 '>Visit Now</button></Link>
                        </div>
                    </div>

                    {/* website no 4  */}
                    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-7 my-5'>
                        <div className='flex box-border cursor-pointer border-2 p-3 justify-center items-center rounded-2xl bg-gray-900 hover:bg-gray-800 w-52 h-40 animate-moving-border'>
                            <Image className='object-contain rounded-xl hover:scale-105' src={Todo} alt="Todo" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className='text-2xl  tracking-wide font-bold text-gray-400'>
                                Todo List
                            </h2>
                            <ul className="list-disc pl-5 pt-4 md:pt-0 lg:pt-0 text-gray-300 text-xs lg:text-xl">
                                <li><strong>Todo App</strong> - A simple and efficient task management tool built with Redux Toolkit</li>
                                <li>Organize your tasks with an intuitive and clean user interface</li>
                                <li>State management powered by <strong>Redux Toolkit</strong> for smooth performance and scalability</li>
                                <li>Add, edit, and delete tasks with real-time updates</li>
                            </ul>
                            <div className='mt-3 text-gray-400 font-semibold'>
                                ReactJs &nbsp; React Bootstrap &nbsp; Redux Toolkit &nbsp; MongoDB &nbsp; ExpressJS &nbsp; NodeJS
                            </div>
                            <Link target='_blank' href='https://todo-frontend-omf6vn5ce-codewithpsychs-projects.vercel.app/'><button className='flex border-2 rounded border-gray-800 hover:border-gray-700  bg-gray-900 hover:bg-gray-800 hover:text-orange-100 text-center p-1 justify-center flex-initial mt-3 text-lg text-white w-32 '>Visit Now</button></Link>
                        </div>
                    </div>
                </div>
                {/* <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white  border-neutral-200 dark:border-slate-800"
                >
                    View More
                </Button> */}
            </div >
        </div>
    );
}

export default Portfolio;
