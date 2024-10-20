import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CardList from './CardList';
import { Link } from 'react-router-dom';
import NavBarNew from './NavBarNew';


const HomePage = () => {
    const navigate = useNavigate();

    const categories = ['All', 'Tech', 'Health', 'Finance', 'Education', 'Food'];

    const [selectedCategory, setSelectedCategory] = useState('All');

    // Handle category click
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };


    return (
        <div className="grid grid-cols-1 ">
           <NavBarNew/>
            <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8 min-h-screen flex flex-col items-center">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>
                <div
                    className="absolute right-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>
                <div class="text-center  mx-auto max-w-2xl pt-24 mb-10 sm:pt-40 lg:pt-48 bg-slate-200">

                    <h1 class="text-balance text-4xl font-bold tracking-tight text-gray-600 opacity-35 sm:text-5xl bg-slate-400" style={{ fontFamily: 'Amsterdam' }}>
                        Startup Bihar</h1>

                </div>

                <div class="mx-auto max-w-2xl pb-32 pt-10 sm:pb-42 sm:pt-10 lg:pb-56 lg:pt-16 bg-slate-200">
                    <div class="mb-6 flex justify-center sm:mb-8 sm:flex sm:justify-center bg-slate-300">
                        <div class="relative rounded-full px-3 py-1 text-xs sm:text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing new opportunities for growth.
                            <a href="#" class="font-semibold text-indigo-600">
                                <span class="absolute inset-0" aria-hidden="true"></span>Read
                                more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div class="text-center bg-slate-400">

                        <h1 class="text-balance text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Empowering Startups, Shaping Tomorrow Together</h1>
                        <p class="mt-6 text-base sm:text-lg leading-6 lg:leading-8 text-gray-600 px-6 sm:px-0 bg-slate-300" >
                            Driving innovation, growth, and entrepreneurial success by supporting startups across diverse sectors in Bihar.
                        </p>
                    </div>

                    <div class="mt-16 flex items-center justify-center gap-x-6 bg-slate-500">
                        <a
                            href="#"
                            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    {/* Tabs Section */}
                    <div className="bg-gray-300 border-2 border-white rounded-2xl px-4 py-2">
                        <nav className="flex justify-center space-x-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryClick(category)}
                                    className={`py-2 px-4 rounded-lg transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-[#780206] text-white border border-white rounded-md'
                                        : 'text-gray-900 hover:text-white hover:bg-transparent rounded-full'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* CardList Section */}
                    <div className="mt-6 w-full">
                        <CardList category={selectedCategory} />
                    </div>
                </div>


            </div>

            {/* First Section */}

            <div id="product" className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base font-semibold text-indigo-600">
                        Transforming ideas into enterprises
                    </h2>
                    <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        Startup Bihar Vision for Innovation                       </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 text-center" >
                        Startup Bihar aims to empower local entrepreneurs by providing the resources, mentorship, and financial support needed to build scalable businesses that contribute to the state’s economic development.
                    </p>

                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        {/* startup_policy */}
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Startup Policy
                                    </p>
                                    <p className="mt-2 text-sm text-gray-600 max-lg:text-center">
                                        Offering ₹10 lakh interest-free loans and added support for
                                        women.
                                    </p>
                                </div>
                                <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-8 border-t-8 border-gray-700 bg-gray-900 shadow-2xl">
                                        <img
                                            className="size-full object-cover object-top"
                                            src="https://firebasestorage.googleapis.com/v0/b/vehicleprocurement-95a91.appspot.com/o/StartupPortal%2Fstartup_policy.webp?alt=media&token=ac622602-e085-4018-9320-417613fc45b8"
                                            alt="Mobile friendly"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                        </div>
                        {/* startup_fund */}
                        <div className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Bihar Startup Fund Trust
                                    </p>
                                    <p className="mt-2 text-sm text-gray-600 max-lg:text-center">
                                        With a corpus of ₹500 crore, this fund supports innovation
                                        and helps startups scale.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                    <img
                                        className="w-full max-lg:max-w-xs"
                                        src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                                        alt="Performance"
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </div>
                        {/* Security Section */}
                        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Incubation & Mentorship
                                    </p>
                                    <p className="mt-2 text-sm text-gray-600 max-lg:text-center">
                                        Bihar has established incubation hubs like Bihar Innovation
                                        Lab and Bihar Startup Hub, partnering with IIT Patna and NIT
                                        Patna to support entrepreneurship.
                                    </p>
                                </div>
                                <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                    <img
                                        className="h-[min(152px,40cqw)] object-cover object-center"
                                        src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                                        alt="Security"
                                    />
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        </div>
                        {/* Powerful APIs Section */}
                        <div className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-[2rem] max-lg:rounded-b-[2rem]"></div>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        750+ Startups funded
                                    </p>
                                    <p className="mt-2 text-sm text-gray-600 max-lg:text-center">
                                        Over 750 startups have been funded under the Bihar Startup
                                        Policy, fostering innovation and entrepreneurship.
                                    </p>
                                </div>
                                <div className="relative min-h-[30rem] w-full grow">
                                    <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                            <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                    NotificationSetting.jsx
                                                </div>
                                                <div className="border-r border-gray-600/10 px-4 py-2">
                                                    App.jsx
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-6 pb-14 pt-6"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">
                            Deploy your ideas faster
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything You Need to Grow Your Startup
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Access state-of-the-art coworking spaces, expert financial advice, and legal services to scale your startup effectively.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5h-1.5"
                                            />
                                        </svg>
                                    </div>
                                    Modern Workspaces
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Fully equipped, collaborative workspaces available across Bihar, designed to boost productivity and innovation for startups.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5h-1.5"
                                            />
                                        </svg>
                                    </div>
                                    Financial Guidance
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Receive tailored financial advice from teams of empaneled Chartered Accountants to ensure your business thrives.
                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5h-1.5"
                                            />
                                        </svg>
                                    </div>
                                    Legal & IP Support
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Access expert advice on copyrights, patents, and trademarks to protect your innovations and intellectual property.                                </dd>
                            </div>
                            <div className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5h-1.5"
                                            />
                                        </svg>
                                    </div>
                                    Networking & Growth
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Join a dynamic community of entrepreneurs, investors, and mentors to expand your network and accelerate growth.                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Work with us
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We invite startups and firms from across India and the world to collaborate with Bihar's thriving startup ecosystem, driving innovation, growth, and success together.                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            <a href="#">
                                Join Us <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a href="#">
                                Innovate Now <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a href="#">
                                Scale Up <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a href="#">
                                Succeed Together <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">
                                    Startups Funded
                                </dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                                    750+
                                </dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">
                                    Co-working Space
                                </dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                                    2 Active
                                </dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">
                                    Incubators & Hubs
                                </dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                                    22
                                </dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">
                                    Startup Cells
                                </dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                                    46
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomePage;
