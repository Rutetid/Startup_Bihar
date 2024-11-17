
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const MatchingLoanModuleDetails = ({ id }) => {
	const [data, setData] = useState({});
	const [isCommentVisible, setIsCommentVisible] = useState(false);
	const [comment, setComment] = useState("");
	const [showDialog, setShowDialog] = useState(false);
	const [dialogMessage, setDialogMessage] = useState("");
	const token = localStorage.getItem("token");

	const [pdfUrl, setPdfUrl] = useState("");
	const [isPdfModalVisible, setIsPdfModalVisible] = useState(false);

	const fetchData = async () => {
		if (id) {
			try {
				const response = await axios.get(