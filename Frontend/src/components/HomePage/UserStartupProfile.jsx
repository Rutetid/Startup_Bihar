import React from 'react'

const UserStartupProfile = () => {
  return (
			// <div>
			// 	{/* Navbar */}
			// 	<div className="flex justify-between px-8 py-3">
			// 		<h1>Startup Bihar</h1>
			// 		<h1>Home</h1>
			// 	</div>
			// 	<img src="cover.jpg" alt="" className="w-full h-52 object-cover" />
			// 	<img
			// 		src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
			// 		alt=""
			// 		className="absolute left-20 top-48 w-72 h-72 rounded-3xl border-8 border-gray-200/30"
			// 	/>
			// </div>

			<div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-white">
				{/* Navigation */}
				<nav className="px-4 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-1">
						<div className="text-purple-600 font-semibold">✦</div>
						<a href="#" className="font-semibold">
							Startup Bihar
						</a>
					</div>

					{/* Middle of navbar 
                    <div className="hidden md:flex items-center space-x-6">
						<a href="#" className="text-gray-600 hover:text-gray-900">
							Designers
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							Explore
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							Projects
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							Work
						</a>
						<a
							href="#"
							className="text-gray-600 hover:text-gray-900 flex items-center"
						>
							Go pro{" "}
							<svg
								className="w-4 h-4 ml-1 text-purple-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</a>
					</div> */}

					<div className="flex items-center space-x-4">
						<button className="p-2 text-gray-600 hover:text-gray-900">
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</button>
						<button className="p-2 text-gray-600 hover:text-gray-900">
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>

						<button className="px-4 py-2 bg-purple-600 text-white rounded-full flex items-center">
							{/* <svg
								className="w-4 h-4 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
								/>
							</svg> */}
							Home
						</button>
						<div className="w-8 h-8 rounded-full bg-gray-200"></div>
					</div>
				</nav>

				<img src="cover.jpg" alt="" className="w-full h-52 object-cover" />

				{/* Profile Section */}
				<div className=" px-4 py-8">
					<div className="flex ml-80 md:flex-row items-start gap-8">
						{/* Profile Image */}
						<div className="absolute left-20 top-48 w-72 h-72 rounded-3xl overflow-hidden ">
							<img
								src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
								alt="Profile"
								className="w-full h-full object-cover rounded-3xl border-8 border-gray-200/30"
							/>
						</div>

						{/* Profile Info */}
						<div>
							<div className="flex px-8 py-3 max-w-screen-lg w-screen ml-5 justify-between">
								<div className="">
									<div className="flex items-center gap-2 mb-2">
										<h1 className="text-2xl font-semibold">Irene Brooks</h1>
										<span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full flex items-center">
											<svg
												className="w-3 h-3 mr-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M13 10V3L4 14h7v7l9-11h-7z"
												/>
											</svg>
											PRO
										</span>
									</div>
									<p className="text-gray-600 mb-4">
										Interface and Brand Designer
										<br />
										based in San Antonio
									</p>
									<div className="flex gap-3 mb-8">
										<button className="px-6 py-2 bg-black text-white rounded-lg">
											Follow
										</button>
										<button className="px-6 py-2 border border-gray-300 rounded-full">
											Get in touch
										</button>
									</div>
								</div>

								<div className=''>
									{/* Stats */}
									<div className="flex gap-12 items-center">
										<div className="text-center">
											<div className="text-2xl font-semibold">2,985</div>
											<div className="text-gray-600">Followers</div>
										</div>
										<div className="text-center">
											<div className="text-2xl font-semibold">132</div>
											<div className="text-gray-600">Following</div>
										</div>
										<div className="text-center">
											<div className="text-2xl font-semibold">548</div>
											<div className="text-gray-600">Likes</div>
										</div>
									</div>
								</div>
							</div>

							{/* Badges */}
							{/* <div className="flex gap-2">
							<span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full">
								26
							</span>
							<span className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full">
								6
							</span>
							<span className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-full">
								12
							</span>
						</div> */}
						</div>
					</div>
				</div>
			</div>
		);
}

export default UserStartupProfile