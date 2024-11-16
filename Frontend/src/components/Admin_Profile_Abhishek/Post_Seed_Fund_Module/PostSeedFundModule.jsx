import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const PostSeedFundModule = ({ onSelect }) => {
	const [sdata, setSdata] = useState([]);

	const handleClick = (id) => {
		onSelect(id);
	};

	const token = localStorage.getItem("token");

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(token);
				const response = await axios.get(
					"http://localhost:3000/api/post-seed/v2",
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `${token}`,
						},
					},
				);
				setSdata(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);
	console.log(sdata);
	// Check if data is available before rendering
	if (!sdata || !sdata.data) {
		return (
			<div
				className="w-full bg-slate-200 h-screen overflow-y-auto"
				style={{
					msOverflowStyle: "none",
					scrollbarWidth: "none",
				}}
			>
				<h1 className="pl-5 pt-8 text-2xl pb-4">Seed Fund Module</h1>
			</div>
		);
	}

	return (
		<div
			className="w-full bg-slate-200 h-screen overflow-y-auto"
			style={{
				msOverflowStyle: "none",
				scrollbarWidth: "none",
			}}
		>
			<h1 className="pl-5 pt-8 text-2xl pb-4">Seed Fund Module</h1>
			{/* Display the data once available */}
			<ul>
				{sdata.data.map((item) => (
					<div
						key={item.id}
						className="mx-5 bg-white rounded-lg mt-3 hover:shadow-lg cursor-pointer"
						onClick={() => handleClick(item.id)}
					>
						<div className="flex items-center py-5 px-5 ">
							<div>
								<img
									src="startup.png"
									alt="Startup"
									className="w-12 h-12 rounded-full"
									onError={(e) => {
										e.target.onerror = null;
										e.target.src =
											"https://img.freepik.com/premium-vector/startup-logo-business-project-business-concept-identity-symbol_136321-649.jpg";
									}}
								/>
							</div>
							<div className="px-3">
								<h1 className="text-">{item.user.user_id} </h1>
								<h1 className="text-">Reg no: {item.user.registration_no}</h1>
								<h1 className="text-">Seed Fund Application</h1>
							</div>
						</div>
					</div>
				))}
			</ul>
		</div>
	);
};

export default PostSeedFundModule;
