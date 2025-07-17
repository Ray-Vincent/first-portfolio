import React from "react";

export default function Footer() {
    return (
        <div className="pt-32 min-h-screen h-auto bg-black/10">
            <div className="relative w-full grid grid-cols-7 border-t pt-8 px-32 ">
                <div className="relative col-span-1 flex gap-1">
                    <div>icon</div>
                    <div>vercel</div>
                </div>
                <div className="relative col-span-1">
                    <div className="relative text-sm">Resources</div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Docs
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Support Policy
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Learn
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Showcase
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Blog
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Team
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Analytics
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Next.js Conf
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Previews
                    </div>
                </div>
                <div className="relative col-span-1">
                    <div className="relative text-sm">More</div>
                    <div className=" relative text-xs py-2  text-gray-500 font-semibold">
                        Next.js Commerce
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Contact Sales
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Community
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        GitHub
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Releases
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Telemetry
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Governance
                    </div>
                </div>
                <div className="relative col-span-1">
                    <div className="relative text-sm">About Vercel</div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Next.js + Vercel
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Open Source Software
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        GitHub
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Bluesky
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        X
                    </div>
                </div>
                <div className="relative col-span-1">
                    <div className="relative text-sm">Legal</div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Privacy Policy
                    </div>
                </div>
                <div className="relative col-span-2 pr-16">
                    <div className="relative text-sm">
                        Subscribe to our newsletter
                    </div>
                    <div className=" relative text-xs py-2 text-gray-500 font-semibold">
                        Stay updated on new releases and
                        <br /> features, guides, and case studies.
                    </div>
                    <div className=" relative rounded-md h-auto p-1">
                        <div className="bg-gray-800 rounded-md flex items-center h-8">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="you@domain.com"
                                    className="border-none h-full outline-none w-full px-2 text-sm"
                                />
                            </div>
                            <div className="relative p-1 h-full">
                                <div className="relative w-20 rounded h-full items-center text-xs text-white flex justify-center bg-[#0009] border-gray-400">
                                    Subscribe
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            {/* copyright */}
            <div className=" relative flex items-center gap-2 px-34 mt-16 text-gray-500 text-sm">
                <div>
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        class="feather feather-aperture"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                        <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                        <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                        <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                        <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                        <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                    </svg>
                </div>
                <div>2025 vercel, Inc.</div>
            </div>
            {/* links */}
            <div className=" realtive flex items-center justify-between text-gray-500 px-34 mt-4">
                <div className="relative flex items-center divide-x">
                    <div className="relative pr-3">
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="feather feather-github"
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </div>
                    <div className="relative px-3">
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="feather feather-x"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    <div className="relative px-3">
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            class="feather feather-feather"
                        >
                            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                            <line x1="16" y1="8" x2="2" y2="22"></line>
                            <line x1="17.5" y1="15" x2="9" y2="15"></line>
                        </svg>
                    </div>
                </div>

                <div className=" relative flex border p-1 rounded-full border-gray-700">
                    <div className="relative h-10 w-10 flex items-center justify-center hover:bg-gray-800 rounded-full duration-200 bg-transparent hover:font-bold cursor-pointer text-gray-600 hover:text-white">A</div>
                    <div className="relative h-10 w-10 flex items-center justify-center hover:bg-gray-800 rounded-full duration-200 bg-transparent hover:font-bold cursor-pointer text-gray-600 hover:text-white">B</div>
                    <div className="relative h-10 w-10 flex items-center justify-center hover:bg-gray-800 rounded-full duration-200 bg-transparent hover:font-bold cursor-pointer text-gray-600 hover:text-white">C</div>
                </div>
            </div>
        </div>
    );
}
