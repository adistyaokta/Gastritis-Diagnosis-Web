import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Home({ auth }) {
    return (
        <>
            <Head title="Gastritis Diagnosis" />
            <div className="bg-gradient-to-b from-teal-800 to-teal-500  min-h-screen flex flex-col">
                <div className="hidden sm:block sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-[#0d8bb1] hover:text-gray-900 "
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-white hover:text-[#0d8bb1]"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-white hover:text-[#0d8bb1] focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className=" flex flex-col gap-3 items-center sm:hidden p-6 absolute top-1/2 w-full">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-[#0d8bb1] hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold 
                                bg-[#0d8bb1] p-5 w-full
                                text-white text-center 
                                rounded-lg hover:bg-[#072a35]"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="font-semibold 
                                bg-[#0d8bb1] p-5 w-full text-white text-center 
                                rounded-lg hover:bg-[#072a35]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="justify-center flex flex-col gap-5 items-center text-white text-center mt-14 sm:mt-0 sm:absolute sm:top-1/3 p-10 w-full">
                    <h1 className="text-5xl text-center tracking-widest font-bold sm:text-5xl md:text-7xl sm:tracking-normal p-2 animate-fade-down">Gastritis Diagnosis</h1>
                    <p className="w-full italic text-lg animate-fade-up">Sistem pakar penyakit gastritis</p>
                </div>
            </div>
        </>
    );
}
