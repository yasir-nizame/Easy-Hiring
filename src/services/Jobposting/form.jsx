import { Link } from "react-router-dom";
import signup from "/signup.jpg";
import avatar from "/avatar.jpg";
// import { MinusCircleIcon } from "@heroicons/react/24/solid";
// import PlusCircleIcon from "@heroicons/react/24/solid";

function Form() {
    return (
        <section class="bg-white">
            <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src={signup}
                        class="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div class="hidden lg:relative lg:block lg:p-12 ">
                        <h2 class=" text-2xl font-bold sm:text-3xl md:text-4xl text-secondary mt-6">
                            Welcome to HIRE-Hive 🐝
                        </h2>

                        <p class=" leading-relaxed text-primary1 font-semibold text-xl">
                            The Ultimate solution
                        </p>
                    </div>
                </section>

                <main
                    class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div class="max-w-xl lg:max-w-3xl">
                        <div class="relative -mt-16 block lg:hidden">
                            <a
                                class="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                href="#"
                            >
                                <span class="sr-only">Home</span>
                            </a>

                            <h1 class="mt-2 text-2xl font-bold  text-secondary sm:text-3xl md:text-4xl">
                                Welcome to HIRE-Hive 🐝
                            </h1>

                            <p class="mt-4 leading-relaxed text-primary1 font-semibold text-xl">
                                The Ultimate Solution
                            </p>
                        </div>

                        <div class="flex flex-row-reverse items-start gap-4">
                            <img
                                src={avatar}
                                alt=""
                                class="size-36 rounded-lg object-cover"
                            />

                            <div>
                                <h3 class="text-lg/tight font-medium text-gray-900">Create an employer account</h3>

                                <p class="mt-0.5 text-gray-700">
                                    You haven't posted a job before, so you'll need to create an employer account.
                                </p>
                            </div>
                        </div>
                        <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="FirstName" class="block text-sm font-medium text-gray-700 ">
                                    Your company's name
                                </label>

                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    class="mt-1 w-full rounded-md border-secondary1 text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="LastName" class="block text-sm font-medium text-gray-700">
                                    Your company's number of employees
                                </label>

                                <input
                                    type="number"
                                    id="employees"
                                    name="no_of_employees"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />

                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="FirstName" class="block text-sm font-medium text-gray-700">
                                    Your full name
                                </label>

                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div class="col-span-6">
                                <label for="Email" class="block text-sm font-medium text-gray-700"> Contact number </label>

                                <input
                                    type="tel"
                                    id="cont"
                                    name="cont_no"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div class="col-span-6">
                                <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="Password" class="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="password_confirmation"
                                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div class="col-span-6">
                                <label for="MarketingAccept" class="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        class="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />

                                    <span class="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div class="col-span-6">
                                <p class="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" class="text-secondary underline"> terms and conditions </a>
                                    and
                                    <a href="#" class="text-secondary underline">privacy policy</a>.
                                </p>
                            </div>

                            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    class="inline-block shrink-0 rounded-md border border-secondary bg-secondary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-secondary focus:outline-none focus:ring active:text-secondary"
                                >
                                    <Link to="/postjob">
                                        Create an account
                                    </Link>
                                </button>

                                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <Link to="/signin" class="text-secondary underline">Log in</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
}
export default Form;