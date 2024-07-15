import { useState } from 'react';
import { Link } from 'react-router-dom';
import job from "/job1.jpg";
function Jobform2() {
    const [type, setType] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [hours, setHours] = useState('');
    const [fromAmount, setFromAmount] = useState('');
    const [toAmount, setToAmount] = useState('');
    const [exactAmount, setExactAmount] = useState('');
    return (

        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12 ">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src={job}
                        className="object-fill w-full h-full"
                    />
                </aside>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <a className="block text-blue-600" href="#">
                            <span className="sr-only">Home</span>
                        </a>

                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Describe the job 🔎
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum.
                        </p>

                        <form action="#" className="mt-8 space-y-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label for="FirstName" className="block text-sm font-medium text-gray-700">
                                    Job Title
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="HeadlineAct" className="text-sm font-medium text-gray-900 font-semibold">
                                    Where would you like to advertise this job?
                                </label>
                                <p className='ml-8 mt-4'>Enter the location</p>
                                <select
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm ml-8"
                                >
                                    <option value="">Select City</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Quetta">Quetta</option>
                                    <option value="Lahore">Lahore</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-900 block space-y-6" htmlFor="">Job type</label>
                                <div>
                                    <select value={type} onChange={(e) => setType(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="fulltime">Full Time</option>
                                        <option value="parttime">Part Time</option>
                                        <option value="internship">Internship</option>
                                        <option value="temporary">Temporary</option>
                                        <option value="contract">Contract</option>
                                        <option value="fresher">Fresher</option>
                                    </select>

                                    {(type === 'parttime' || type === 'internship' || type === 'temporary' || type === 'contract') && (
                                        <div>
                                            {type === 'parttime' && (
                                                <div>
                                                    <h2>Select part-time option:</h2>
                                                    <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                                                        <option value="">Expected hours</option>
                                                        <option value="option1">Fixed</option>
                                                        <option value="option2">Range</option>
                                                        <option value="option3">Maximum</option>
                                                        <option value="option4">Minimum</option>
                                                    </select>

                                                    {(selectedOption === 'option1' || selectedOption === 'option3' || selectedOption === 'option4') && (
                                                        <div>
                                                            <h3>Fixed at</h3>
                                                            <input type="number" placeholder="Hours/week" value={hours} onChange={(e) => setHours(e.target.value)} />
                                                        </div>
                                                    )}

                                                    {selectedOption === 'option2' && (
                                                        <div>
                                                            <h3>From</h3>
                                                            <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
                                                            <h3>To</h3>
                                                            <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
                                                            <p className='ml-4'>hours/week</p>
                                                        </div>
                                                    )}
                                                </div>

                                            )}
                                            {(type === 'internship' || type === 'temporary' || type === 'contract') && (
                                                <div>
                                                    <h2>How long is the contract</h2>
                                                    <div className="col-span-6">
                                                        <label htmlFor="length" className="block text-sm font-medium text-gray-700"> Length</label>

                                                        <input
                                                            type="number"
                                                            id="length"
                                                            name="length"
                                                            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                                        />

                                                        <label htmlFor="period">period</label>
                                                        <select name="period" id="period">
                                                            <option value="days">day(s)</option>
                                                            <option value="weeks">week(s)</option>
                                                            <option value="months">month(s)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="pay" className="block text-sm font-medium text-gray-700">
                                    Pay
                                </label>
                                <select
                                    id="pay"
                                    className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="range">Range</option>
                                    <option value="exact">Exact</option>
                                </select>

                                {selectedOption === 'range' && (
                                    <div className="mt-4">
                                        <label htmlFor="fromAmount" className="block text-sm font-medium text-gray-700">
                                            From
                                        </label>
                                        <input
                                            type="number"
                                            id="fromAmount"
                                            className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
                                            value={fromAmount}
                                            onChange={(e) => setFromAmount(e.target.value)}
                                        />

                                        <label htmlFor="toAmount" className="block text-sm font-medium text-gray-700 mt-2">
                                            To
                                        </label>
                                        <input
                                            type="number"
                                            id="toAmount"
                                            className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
                                            value={toAmount}
                                            onChange={(e) => setToAmount(e.target.value)}
                                        />
                                    </div>
                                )}

                                {selectedOption === 'exact' && (
                                    <div className="mt-4">
                                        <label htmlFor="exactAmount" className="block text-sm font-medium text-gray-700">
                                            Amount
                                        </label>
                                        <input
                                            type="number"
                                            id="exactAmount"
                                            className="mt-1 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
                                            value={exactAmount}
                                            onChange={(e) => setExactAmount(e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="OrderNotes" className="sr-only">Order notes</label>

                                <div>
                                    <label htmlFor="OrderNotes" className=" block text-sm font-medium text-gray-700">Describe the job </label>

                                    <textarea
                                        id="OrderNotes"
                                        className="mt-2 w-full rounded-lg p-4 border-secondary1 align-top shadow-sm sm:text-sm"
                                        rows="4"
                                        placeholder="Enter any additional order notes..."
                                    ></textarea>
                                </div>
                            </div>


                            <div className="col-span-6">
                                <label for="MarketingAccept" className="flex gap-4">
                                    I agree that above information is true
                                    <input
                                        type="checkbox"
                                        id=""
                                        name="accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />

                                    {/* <span className="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span> */}
                                </label>
                            </div>

                            {/* <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                    and
                                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                </p>
                            </div> */}

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                    class="inline-block shrink-0 rounded-md border border-secondary bg-secondary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-secondary focus:outline-none focus:ring active:text-secondary"
                                >
                                    <Link to="/thankyou">
                                       Submit
                                    </Link>
                                </button>

                                {/* <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <a href="#" className="text-gray-700 underline">Log in</a>.
                                </p> */}
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>

    )
}
export default Jobform2