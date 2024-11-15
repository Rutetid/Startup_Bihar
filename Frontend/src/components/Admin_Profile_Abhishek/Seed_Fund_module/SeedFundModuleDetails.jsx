import React, { useEffect, useState } from "react";
import axios from "axios";

const SeedfundModuleDetails = ({ id }) => {
	const [data, setData] = useState({});
	const [isCommentVisible, setIsCommentVisible] = useState(false);
	const token = localStorage.getItem("token");

	useEffect(() => {
		const fetchData = async () => {
			if (id) {
				try {
					const response = await axios.get(
						`http://localhost:3000/api/seed-fund/v1/${id}`,
						{
							headers: {
								"Content-Type": "application/json",
								Authorization: `${token}`,
							},
						},
					);
					setData(response.data);
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			}
		};
		fetchData();
	}, [id, token]);

	const handleReject = async () => {
		try {
			await axios.patch(
				`http://localhost:3000/api/seed-fund/u1/${id}`,
				{
					documentStatus: "Rejected",
					comment: "Your Seed Application is Rejected",
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `${token}`,
					},
				},
			);
		} catch (error) {
			console.error("Error updating data:", error);
		}
	};

	const handleAccept = async () => {
		try {
			await axios.put(
				`http://localhost:3000/api/seed-fund/u1/${id}`,
				{
					documentStatus: "Accepted",
					comment: "Your Seed Application is Accepted",
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `${token}`,
					},
				},
			);
		} catch (error) {
			console.error("Error updating data:", error);
		}
	};

	const handlePartialReject = async () => {
		handleDialog("Updating status to partial reject...");
		try {
			await axios.patch(
				`http://localhost:3000/api/StartupProfile/u1/${id}`,
				{
					documentStatus: "Partially Rejected",
					comment: `Document has been partially rejected for reason: ${comment}`,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `${token}`,
					},
				},
			);
			handleDialog("Application is partially rejected.");
			setIsCommentVisible(false);
			await fetchData(); // Update the data after status change
		} catch (error) {
			console.error("Error updating data:", error);
		}
	};

	return (
		<div className="h-screen overflow-y-auto">
			<h1 className="pt-5 pl-8 text-2xl">Seed Fund Application Details</h1>
			<div className="px-8 py-5">
				<table className="min-w-full bg-white">
					<tbody>
						<tr>
							<td className="py-4 px-4 border">Company Name</td>
							<td className="py-4 px-4 border">{data.companyName}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Registration Number</td>
							<td className="py-4 px-4 border">{data.registrationNumber}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Date of Incorporation</td>
							<td className="py-4 px-4 border">{data.dateOfIncorporation}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Business Entity Type</td>
							<td className="py-4 px-4 border">{data.businessEntityType}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border-b border-l border-t">
								Company Certificate
							</td>
							<td className=" border-b border-l border-t border-r w-[35vw]">
								<div className="px-4 py-4 ">
									<dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
										<ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
											<li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
												<div className="flex w-0 flex-1 items-center">
													<svg
														className="h-5 w-5 shrink-0 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
														data-slot="icon"
													>
														<path
															fillRule="evenodd"
															d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z"
															clipRule="evenodd"
														/>
													</svg>
													<div className="ml-4 flex min-w-0 flex-1 gap-2">
														<span className="truncate font-medium">
															{data.companyCertificate}
														</span>
														<span className="shrink-0 text-gray-400">
															2.4mb
														</span>
													</div>
												</div>
												<div className="ml-4 shrink-0">
													{/* <a
														href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" // Ensure this path points to the correct relative URL of the PDF file
														target="_blank"
														rel="noopener noreferrer"
														className="font-medium text-indigo-600 hover:text-indigo-900"
													>
														View
													</a> */}

													<button
														type="button"
														className="font-medium text-indigo-600 hover:text-indigo-900"
														onClick={() =>
															handleViewPdf(
																"/certificate-1730768875489-30300590.pdf",
															)
														}
													>
														View
													</button>
												</div>
												<div className="ml-4 shrink-0">
													<a
														href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" // Ensure this path points to the correct relative URL of the PDF file
														download
														className="font-medium text-indigo-600 hover:text-indigo-900"
													>
														Download
													</a>
												</div>
											</li>
										</ul>
									</dd>
								</div>
							</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">ROC District</td>
							<td className="py-4 px-4 border">{data.rocDistrict}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Company Address</td>
							<td className="py-4 px-4 border">{data.companyAddress}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Pincode</td>
							<td className="py-4 px-4 border">{data.pincode}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Bank Name</td>
							<td className="py-4 px-4 border">{data.bankName}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">IFSC Code</td>
							<td className="py-4 px-4 border">{data.ifscCode}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Current Account Number</td>
							<td className="py-4 px-4 border">{data.currentAccountNumber}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Current Account Holder Name</td>
							<td className="py-4 px-4 border">
								{data.currentAccountHolderName}
							</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Branch Name</td>
							<td className="py-4 px-4 border">{data.branchName}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">Branch Address</td>
							<td className="py-4 px-4 border">{data.branchAddress}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border-b border-l border-t">
								Upload cancel cheque/Passbook First Page
							</td>
							<td className=" border-b border-l border-t border-r w-[35vw]">
								<div className="px-4 py-4 ">
									<dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
										<ul className="divide-y divide-gray-100 rounded-md border border-gray-200">
											<li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
												<div className="flex w-0 flex-1 items-center">
													<svg
														className="h-5 w-5 shrink-0 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
														data-slot="icon"
													>
														<path
															fillRule="evenodd"
															d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z"
															clipRule="evenodd"
														/>
													</svg>
													<div className="ml-4 flex min-w-0 flex-1 gap-2">
														<span className="truncate font-medium">
															{data.cancelChequeOrPassbook}
														</span>
														<span className="shrink-0 text-gray-400">
															2.4mb
														</span>
													</div>
												</div>
												<div className="ml-4 shrink-0">
													{/* <a
														href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" // Ensure this path points to the correct relative URL of the PDF file
														target="_blank"
														rel="noopener noreferrer"
														className="font-medium text-indigo-600 hover:text-indigo-900"
													>
														View
													</a> */}

													<button
														type="button"
														className="font-medium text-indigo-600 hover:text-indigo-900"
														onClick={() =>
															handleViewPdf(
																"/certificate-1730768875489-30300590.pdf",
															)
														}
													>
														View
													</button>
												</div>
												<div className="ml-4 shrink-0">
													<a
														href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" // Ensure this path points to the correct relative URL of the PDF file
														download
														className="font-medium text-indigo-600 hover:text-indigo-900"
													>
														Download
													</a>
												</div>
											</li>
										</ul>
									</dd>
								</div>
							</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">PAN Number</td>
							<td className="py-4 px-4 border">{data.panNumber}</td>
						</tr>
						<tr>
							<td className="py-4 px-4 border">GST Number</td>
							<td className="py-4 px-4 border">{data.gstNumber}</td>
						</tr>
					</tbody>
				</table>

				<div className="flex items-center justify-end gap-x-2 pr-4 py-3">
					<button
						type="submit"
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						onClick={handleAccept}
					>
						Accept
					</button>
					<button
						type="button"
						className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						onClick={() => {
							setIsCommentVisible(true);
							setComment("");
						}}
					>
						Reject
					</button>
					<button
						type="button"
						className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						onClick={() => {
							setIsCommentVisible(true);
							setComment("");
						}}
					>
						Partial Reject
					</button>
				</div>

				{isCommentVisible && (
					<div className="absolute top-64 w-3/12 bg-white rounded-md shadow-xl p-4 z-10 left-[37%]">
						<h2 className="text-lg font-semibold">Add Comment</h2>
						<textarea
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							className="mt-2 border rounded-md w-full h-20 pl-2 pt-2"
						/>
						<div className="flex justify-end gap-x-2 mt-4">
							<button
								type="button"
								className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
								onClick={() => setIsCommentVisible(false)}
							>
								Cancel
							</button>
							<button
								type="button"
								className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
								onClick={handleReject}
							>
								Reject
							</button>
							<button
								type="button"
								className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
								onClick={handlePartialReject}
							>
								Partial Reject
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SeedfundModuleDetails;
