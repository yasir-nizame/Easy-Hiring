import React from 'react';
import { Link } from 'react-router-dom';
import resume from "/resume.jpg";
import resumebg from "/resumebg.jpg";

const Uploadresume = () => {
    return (
        <div className="relative max-w-screen-3xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <img src={resumebg} className="w-full h-full object-cover filter backdrop-blur-lg" alt="Background" />
                <div className="absolute inset-0 bg-white/75"></div>
            </div>

            <div className="relative mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Add a resume for employer</h1>
                <p className="mt-4 text-gray-500">You're just one click away from your dream job!</p>
            </div>

            <form action="#" className="relative mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label
                        htmlFor="UserEmail"
                        className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <span className="text-xs font-medium text-gray-700">Upload your resume</span>
                        <input
                            type="file"
                            name="resume"
                            accept=".pdf"
                            placeholder="Upload your resume (PDF)"
                            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
                        />
                    </label>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-secondary hover:bg-secondary1 px-3 py-2 text-sm font-medium text-white"
                    >
                        <Link to="/thankyou">
                            Submit
                        </Link>
                    </button>
                </div>
                <img src={resume} className="rounded-full" alt="Resume" />
            </form>
        </div>
    );
};

export default Uploadresume;
