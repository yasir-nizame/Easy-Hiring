import React from 'react';
import { Link } from 'react-router-dom';

const Bigcards = ({ cardData }) => {
    return (
        <>
            {cardData.map((card, index) => (

                <Link
                    key={index}
                    to="/bigcard"
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 md:w-3/4 sm:w-full container space-y-2 m-5 md:m-10 bg-basic"
                >
                    {/* <Link to={card.link}></Link> */}
                    <span
                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div className="sm:flex sm:justify-between sm:gap-4 flex-wrap">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{card.title}</h3>
                            <p className="mt-1 text-xs font-medium text-gray-600">By {card.company}</p>
                        </div>
                        <div>
                            <span
                                class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="-ms-1 me-1.5 h-4 w-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <p class="whitespace-nowrap text-sm">{card.pay}</p>
                            </span>
                        </div>
                        <div>

                            <span
                                class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="-ms-1 me-1.5 h-4 w-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
                                    />
                                </svg>

                                <p class="whitespace-nowrap text-sm">{card.jobtype}</p>
                            </span>

                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-pretty text-sm text-gray-500">{card.description}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-start gap-4">
                        <Link
                            className="block w-40 rounded bg-secondary1 px-4 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-secondary1 sm:w-auto"
                            to="/applynow"
                        >
                            Apply Now
                        </Link>
                    </div>

                    <dl className="mt-6 flex gap-4 sm:gap-6">
                        {/* <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">Published</dt>
                            <dd className="text-xs text-gray-500">{card.published}</dd>
                        </div> */}
                        <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                    </dl>
                    <div className="flex flex-col-reverse">

                        <dd className="text-xs text-gray-500">{card.readingTime}</dd>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>Job Details</h1>
                    </div>
                    <div>
                        <div>
                            <h1 className='font-bold text-lg'>Full Job Description:</h1>
                        </div>

                        <ul>


                            <div>
                                <h1 className='font-semibold text-lg'>Job Responsibilties:</h1>
                                <ul className='p-4'>
                                    {card.responsibilities.split('\n').map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h1 className='font-semibold text-lg'>Job Specifications:</h1>
                                <ul className='p-4'>
                                    {card.specifications.split('\n').map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>

                            </div>
                            <div>
                                <h1 className='font-semibold text-lg'>Experience Required: </h1>
                                <ul className='p-4'>
                                    {card.experience.split('\n').map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>

                            </div>
                        </ul>
                    </div>

                </Link>
            ))}
        </>
    );
};

export default Bigcards;
