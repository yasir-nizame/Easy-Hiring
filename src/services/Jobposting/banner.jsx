<<<<<<< HEAD
import React from 'react';
import bannerimg1 from "/bannerimg1.jpg";
import bannerimg2 from "/bannerimg2.jpg";
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat">
            <Link to="/postbanner"> </Link>
            <img src={bannerimg1} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
            <div
                className="absolute inset-0 bg-basic/60 backdrop-blur-sm"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex flex-col lg:flex-row lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left flex-1">
                    <div className="flex items-center justify-center sm:justify-start">
                        <div>
                            <h1 className="text-3xl font-extrabold sm:text-5xl text-secondary1">
                                Connecting talent with opportunity.
                            </h1>
                            <h2 className="text-3xl font-extrabold sm:text-3xl mt-4 ml-4 text-white">
                                Your perfect fit is just a click away !
                            </h2>
                            <p className="mt-4 max-w-lg sm:text-xl/relaxed ml-4 text-secondary1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
                                <Link
                                    to="/createacc"
                                    className="block w-full sm:w-auto rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-primary"
                                >
                                    Post a Job
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-20 flex-1 ">
                    <img src={bannerimg2} className='h-1/2 w-4/5 rounded-full' alt="" />
                </div>
=======
import React from "react";
import bannerimg from "../../assets/bannerimg.jpg";
import bannerimg2 from "../../assets/bannerimg2.jpg";

function Banner() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      <img
        src={bannerimg}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/75 2xl:bg-transparent 2xl:from-white/95 2xl:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex flex-col lg:flex-row lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left flex-1">
          <div className="flex items-center justify-center sm:justify-start">
            <div>
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Connecting talent with opportunity.
              </h1>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-secondary">
                Your perfect fit is just a click away.
              </h2>
              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
                <a
                  href="#"
                  className="block w-full sm:w-auto rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-primary"
                >
                  Post a Job
                </a>
              </div>
>>>>>>> 2749187c9da6e204dfb76f99d5345155ba505eb3
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-20 flex-1 ">
          <img src={bannerimg2} className="h-1/2 w-4/5 rounded-full" alt="" />
        </div>
      </div>
    </section>
  );
}

export { Banner };
