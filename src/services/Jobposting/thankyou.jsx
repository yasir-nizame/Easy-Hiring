import React from 'react';
import { Link } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Thankyou = () => {
    return (
        <section className="bg-gradient-to-r from-secondary1 via-secondary to-primary1">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <Player
                    autoplay
                    loop
                    src="/Thankyou.json"
                    className="h-full w-full"
                >
                    <Controls
                        visible={false}
                        buttons={["play", "repeat", "frame", "debug"]}
                    />
                </Player>
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-secondary1">
                        Thank you
                        <strong className="font-extrabold text-primary1 sm:block">for submitting your application</strong>
                    </h1>
                    <p className="mt-4 sm:text-xl/relaxed">
                        We will respond to you shortly
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary1 focus:outline-none focus:ring active:bg-secondary1 sm:w-auto"
                            to="/"
                        >
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thankyou;
