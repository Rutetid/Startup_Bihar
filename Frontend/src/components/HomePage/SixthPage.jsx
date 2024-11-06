import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const SixthPage = () => {
    return (
        <div className="flex flex-col md:flex-row p-6 md:p-12 w-screen h-screen overflow-hidden bg-indigo-50">
            {/* Left Section: Form */}

            <div className="flex-1 p-6 rounded-lg">
                <h2 className="text-3xl font-semibold text-indigo-600">Contact us!</h2>
                <p className="mt-2 text-gray-700">
                    Have questions? Fill the form, and we will get back to you!
                </p>

                <form action="https://api.web3forms.com/submit" method="POST" className="mt-6 space-y-4">
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                    {/* Row for Name and Email */}
                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <label className="block text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="border border-indigo-600 p-3 rounded-md w-full"
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="border border-indigo-600 p-3 rounded-md w-full"
                            />
                        </div>
                    </div>

                    {/* Row for Phone and Topic */}
                    <div className="flex gap-4">
                        <div className="flex-1 space-y-2">
                            <label className="block text-gray-700 font-medium">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                className="border border-indigo-600 p-3 rounded-md w-full"
                            />
                        </div>
                        <div className="flex-1 space-y-2">
                            <label className="block text-gray-700 font-medium">Topic</label>
                            <select
                                name="topic"
                                className="border border-indigo-600 p-3 rounded-md w-full"
                            >
                                <option>Choose topic</option>
                                <option>Startup</option>
                                <option>Partner</option>
                                <option>Office</option>
                                <option>Funding</option>
                            </select>
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">Message</label>
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="border border-indigo-600 p-3 rounded-md w-full h-32 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-600 text-white p-3 rounded-md w-full flex items-center justify-center gap-2 hover:bg-indigo-500"
                    >
                        Send
                        <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                    </button>

                </form>
            </div>

            {/* Right Section: Image and Contact Details */}
            <div className="flex-1 flex items-center justify-center md:justify-end p-6 relative">
                <img
                    src="https://picsum.photos/740/570/?blur" // Placeholder image source
                    alt="Contact Background"
                    className="rounded-lg object-cover w-full h-full md:w-80 lg:w-full"
                    style={{ maxHeight: '570px', maxWidth: '740px' }}
                />

                <div className="absolute bottom-40 left-0 w-full text-white text-center">
                    <p className="flex items-center justify-center gap-2 text-lg font-medium">
                        📞 Phone: 957234601 / 957234601
                    </p>
                    <p className="mt-2 text-lg font-medium">
                        📍 Address: Mauryalok Complex B-hub 5th floor, Patna <br />
                        Pincode: 901503
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SixthPage;
