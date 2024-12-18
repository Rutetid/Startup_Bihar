import React, { useEffect, useState } from "react";
import axios from "axios";

const SeedfundModuleDetails = ({ id }) => {
	const [data, setData] = useState({});
	const [isCommentVisible, setIsCommentVisible] = useState(false);
	const [comment, setComment] = useState("");
	const [showDialog, setShowDialog] = useState(false);
	const [dialogMessage, setDialogMessage] = useState("");
	const token = localStorage.getItem("token");

	const [pdfUrl, setPdfUrl] = useState("");
	const [isPdfModalVisible, setIsPdfModalVisible] = useState(false); // State to manage PDF modal visibility

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

	useEffect(() => {
		fetchData();
	}, [id]);

	const handleDialog = (message) => {
		setDialogMessage(message);
		setShowDialog(true);
		setTimeout(() => setShowDialog(false), 2000); // Close after 2 seconds
	};

	const handleReject = async () => {
		handleDialog("Updating status to reject...");
		try {
			await axios.patch(
				`http://localhost:3000/api/seed-fund/u1/${id}`,
				{
					documentStatus: "Rejected",
					comment: `Document has been rejected for reason: ${comment}`,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `${token}`,
					},
				},
			);
			handleDialog("Application is rejected.");
			setIsCommentVisible(false);
			await fetchData(); // Update the data after status change
		} catch (error) {
			console.error("Error updating data:", error);
		}
	};

	const handlePartialReject = async () => {
		handleDialog("Updating status to partial reject...");
		try {
			await axios.patch(
				`http://localhost:3000/api/seed-fund/u1/${id}`,
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

	const handleAccept = async () => {
		handleDialog("Updating status to accept...");
		try {
			await axios.patch(
				`http://localhost:3000/api/seed-fund/u1/${id}`,
				{
					documentStatus: "Accepted",
					comment: "Document has been reviewed and approved.",
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `${token}`,
					},
				},
			);
			handleDialog("Application is accepted.");
			await fetchData(); // Update the data after status change
		} catch (error) {
			console.error("Error updating data:", error);
		}
	};

	const getStatusColor = () => {
		if (data.documentStatus === "Accepted") return "text-green-500";
		if (data.documentStatus === "Rejected") return "text-red-500";
		if (data.documentStatus === "Partially Rejected") return "text-yellow-500";
		return "";
	};
	const getComment = () => {
		if (comment != null) {
			return data.comment;
		}
		if (data.documentStatus === "Accepted")
			return "Document has been reviewed and approved.";
		if (data.documentStatus === "Rejected")
			return "Document has been partially rejected";
		if (data.documentStatus === "Partially Rejected")
			return "Document has been rejected";
		return "";
	};
	const handleViewPdf = (url) => {
		// Use Google PDF viewer as fallback
		const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;
		setPdfUrl(viewerUrl);
		setIsPdfModalVisible(true);
	};

	const closePdfModal = () => {
		setIsPdfModalVisible(false);
		setPdfUrl("");
	};

	return (
		<div className="h-screen overflow-y-auto">
			<h1 className="pt-5 pl-8 text-2xl">Seed Fund Application Details</h1>
			<div className="px-8 py-5">
				<table className="min-w-full bg-white">
					<tbody>
						{/* Conditionally render Application Status row */}
						{data.documentStatus && (
							<tr>
								<td className="py-4 px-4 border">Application Status</td>
								<td className={`py-4 px-4 border ${getStatusColor()}`}>
									{`${data.documentStatus} | ${getComment()}`}
								</td>
							</tr>
						)}
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
							<td className="py-4 px-4 border">Company Certificate</td>
							<td className="py-4 px-4 border">
								{data.companyCertificate && (
									<div>
										<button
											onClick={() => handleViewPdf(data.companyCertificate)}
											className="text-blue-500 hover:underline"
										>
											View
										</button>{" "}
										|{" "}
										<a href={`${data.companyCertificate}`} download>
											Download
										</a>
									</div>
								)}
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
							<td className="py-4 px-4 border">Cancelled Cheque or Passbook</td>
							<td className="py-4 px-4 border">
								{data.cancelChequeOrPassbook && (
									<div>
										<a
											href={`/${data.cancelChequeOrPassbook}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											View
										</a>{" "}
										|{" "}
										<a href={`/${data.cancelChequeOrPassbook}`} download>
											Download
										</a>
									</div>
								)}
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
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white"
						onClick={handleAccept}
					>
						Accept
					</button>
					<button
						className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white"
						onClick={() => {
							setIsCommentVisible(true);
							setComment("");
						}}
					>
						Reject
					</button>
					<button
						className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white"
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
								className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white"
								onClick={() => setIsCommentVisible(false)}
							>
								Cancel
							</button>
							<button
								className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white"
								onClick={handleReject}
							>
								Reject
							</button>
							<button
								className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white"
								onClick={handlePartialReject}
							>
								Partial Reject
							</button>
						</div>
					</div>
				)}
				{/* PDF View Modal */}
				{isPdfModalVisible && (
					<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
						<div className="bg-white rounded-lg shadow-lg p-4 w-3/4 h-[600px]">
							<div className="flex justify-end">
								<button
									className="text-gray-600 hover:text-gray-900"
									onClick={closePdfModal}
								>
									Close
								</button>
							</div>
							<iframe
								src={pdfUrl}
								className="w-full h-full"
								frameBorder="0"
							></iframe>
						</div>
					</div>
				)}
				{showDialog && (
					<div className="fixed inset-0 flex items-center justify-center z-50">
						<div className="bg-black bg-opacity-50 absolute inset-0"></div>
						<div className="bg-white p-6 rounded-md shadow-lg z-10">
							<p className="text-lg font-semibold">{dialogMessage}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SeedfundModuleDetails;
