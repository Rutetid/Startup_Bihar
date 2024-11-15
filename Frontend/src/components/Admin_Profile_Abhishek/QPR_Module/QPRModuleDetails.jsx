import React, { useEffect, useState } from "react";
import axios from "axios";

const QPRModuleDetails = ({ id }) => {
	const [data, setData] = useState({});
	const [isCommentVisible, setIsCommentVisible] = useState(false);
	const [comment, setComment] = useState("");
	const [showDialog, setShowDialog] = useState(false);
	const [dialogMessage, setDialogMessage] = useState("");
	const token = localStorage.getItem("token");
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [pdfUrl, setPdfUrl] = useState("");

	const fetchData = async () => {
		if (id) {
			try {
				const response = await axios.get(
					`http://localhost:3000/api/StartupProfile/v1/${id}`,
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
		setTimeout(() => setShowDialog(false), 2000);
	};

	const handleReject = async () => {
		handleDialog("Updating status to reject...");
		try {
			await axios.patch(
				`http://localhost:3000/api/StartupProfile/u1/${id}`,
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

	const handleAccept = async () => {
		handleDialog("Updating status to accept...");
		try {
			await axios.patch(
				`http://localhost:3000/api/StartupProfile/u1/${id}`,
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

	const handleViewPdf = (url) => {
		setPdfUrl(url);
		setIsModalVisible(true);
	};

	const handleCloseModal = () => {
		setIsModalVisible(false);
		setPdfUrl("");
	};

	return (
		<div>
			<h2>QPR Module Details</h2>
			<p>
				<strong>Current stage of your startup:</strong> {data.currentStage}
			</p>
			<p>
				<strong>
					Average turnover (In Lakhs, Since company formation till date):
				</strong>{" "}
				{data.averageTurnover}
			</p>
			<p>
				<strong>Current revenue (In lakhs, Last Financial Year):</strong>{" "}
				{data.currentRevenue}
			</p>
			<p>
				<strong>Net Profit or Loss:</strong> {data.netProfitOrLoss}
			</p>
			<p>
				<strong>Any other fund raised or Grant received?:</strong>{" "}
				{data.fundRaisedOrGrantReceived}
			</p>
			<p>
				<strong>No. of work orders received:</strong> {data.workOrdersReceived}
			</p>
			<p>
				<strong>Total Direct Employment generated:</strong>{" "}
				{data.directEmploymentGenerated}
			</p>
			<p>
				<strong>Total indirect employment generated:</strong>{" "}
				{data.indirectEmploymentGenerated}
			</p>
			<p>
				<strong>Total male employees:</strong> {data.maleEmployees}
			</p>
			<p>
				<strong>Total female employees:</strong> {data.femaleEmployees}
			</p>
			<p>
				<strong>New partnerships or collaborations?:</strong>{" "}
				{data.newPartnershipsOrCollaborations}
			</p>
			<p>
				<strong>Goals for next Quarter:</strong> {data.goalsForNextQuarter}
			</p>
		</div>
	);
};

export default QPRModuleDetails;
