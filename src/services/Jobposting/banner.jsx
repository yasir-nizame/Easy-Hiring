import React from "react";
import bannerimg from "../../assets/bannerimg.jpg";
import bannerimg2 from "../../assets/bannerimg2.jpg";

function Banner() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      <img
        src={bannerimg}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover filter blur-lg"
      />
      <div className="absolute inset-0 bg-white/75 2xl:bg-transparent 2xl:from-white/95 2xl:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex flex-col lg:flex-row lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left flex-1">
          <div className="flex items-center justify-center sm:justify-start">
            <div>
              <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                Connecting talent with opportunity.
              </h1>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-primary">
                Your perfect fit is just a click away.
              </h2>
              <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
                <a
                  href="/postjob"
                  className="block w-full sm:w-auto rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-primary"
                >
                  Post a Job
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-20 flex-1">
          <img src={bannerimg2} className="h-1/2 w-4/5 rounded-full" alt="" />
        </div>
      </div>
    </section>
  );
}

export { Banner };
