import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import LeftBar from "./LeftBar";
import StartupProfile from "./StartupProfile";
import ProfileDetails from "./ProfileDetails";
import SeedFundModule from "./Seed_Fund_module/SeedFundModule";
import SecondTrancheModule from "./Second_Tranche_module/SecondTrancheModule";
import PostSeedFundModule from "./Post_Seed_Fund_module/PostSeedFundModule";
import QPRModule from "./QPR_Module/QPRModule";
import MatchingLoan from "./Matching_Loan/MatchingLoan";
import IncubationModule from "./Incubation_module/IncubationModule";
import AccelerationProgrammeModule from "./Acceleration_Programme_Module/AccelerationProgrammeModule";
import IPRReimbursementModule from "./IPR_Reimbursement_Module/IPRReimbursementModule";
import CoworkingModule from "./Coworking_Module/CoworkingModule";
import StartupList from "./Startup_List/StartupList";
import DataMining from "./Data_Mining/DataMining";
import MentorsList from "./Mentors_List/MentorsList.jsx";
import GrievanceRedressalSystem from "./Grievance_Redressal_System/GrievanceRedressalSystem.jsx";
import SeedfundModuleDetails from "./Seed_Fund_module/SeedFundModuleDetails.jsx";
import CommonList from "./CommonList.jsx";
import SecondTrancheModuleDetails from "./Second_Tranche_module/SecondTrancheModuleDetails.jsx";
import PostSeedFundModuleDetails from "./Post_Seed_Fund_module/PostSeedFundModuleDetails.jsx";

const AdminMainProfile = () => {
	const [activePage, setActivePage] = useState("StartupProfile"); // Controls second section
	const [selectedId, setSelectedId] = useState(""); // Controls selected ID for details
	const [detailsView, setDetailsView] = useState(false); // Controls if third section is displayed

	// Handles the main content section (second section) based on `activePage`
	function handlePageChange() {
		switch (activePage) {
			case "StartupProfile":
				return <StartupProfile onSelect={handleSelect} />;

			case "SeedFundModule":
				return (
					<CommonList
						onSelect={handleSelect}
						url="http://localhost:3000/api/seed-fund/v2"
						title="Seed Fund Application List"
					/>
				);

			case "SecondTrancheModule":
				return (
					<CommonList
						onSelect={handleSelect}
						url="http://localhost:3000/api/second-tranche/v2"
						title="Second Tranche Application List"
					/>
				);

			case "PostSeedFundModule":
				return (
					<CommonList
						onSelect={handleSelect}
						url="http://localhost:3000/api/post-seed/v2"
						title="Post Seed Application List"
					/>
				);

			case "QPRModule":
				return <QPRModule />;

			case "MatchingLoan":
				return <MatchingLoan />;

			case "IncubationModule":
				return <IncubationModule />;

			case "AccelerationProgrammeModule":
				return <AccelerationProgrammeModule />;

			case "IPRReimbursementModule":
				return <IPRReimbursementModule />;

			case "CoworkingModule":
				return <CoworkingModule />;

			case "StartupList":
				return <StartupList />;

			case "DataMining":
				return <DataMining />;

			case "MentorsList":
				return <MentorsList />;

			case "GrievanceRedressalSystem":
				return <GrievanceRedressalSystem />;

			default:
				return <StartupProfile onSelect={handleSelect} />;
		}
	}

	// Handles changes in the first section (left bar menu)
	const changePanel = (newPanel) => {
		setActivePage(newPanel);
		setDetailsView(false); // Reset to second section when changing main module
	};

	// Handles selection within the second section (when clicking on an item to view details)
	const handleSelect = (id) => {
		setSelectedId(id);
		setDetailsView(true); // Show third section when an item is selected
	};
	const renderDetailsSection = () => {
		if (!detailsView)
			return (
				<div className="flex items-center justify-center h-full">
					<h1>Select an item to view details</h1>
				</div>
			);

		switch (activePage) {
			case "SeedFundModule":
				return <SeedfundModuleDetails id={selectedId} />;
			case "StartupProfile":
				return <ProfileDetails id={selectedId} />;
			case "SecondTrancheModule":
				return <SecondTrancheModuleDetails id={selectedId} />;
			case "PostSeedFundModule":
				return <PostSeedFundModuleDetails id={selectedId} />;

			default:
				return null;
		}
	};

	return (
		<div className="grid grid-cols-12 ">
			{/* First Section - Left Sidebar */}
			<div className="col-span-2 ">
				<LeftBar changePanel={changePanel} />
			</div>

			{/* Second Section - Main Content Area */}
			<div className="col-span-3">{handlePageChange()}</div>

			{/* Third Section - Details Section */}
			<div className="col-span-7  bg-gray-100">{renderDetailsSection()}</div>
		</div>
	);
};

export default AdminMainProfile;
