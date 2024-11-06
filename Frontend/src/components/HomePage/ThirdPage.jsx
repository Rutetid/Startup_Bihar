import React from 'react'

const ThirdPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default ThirdPage
