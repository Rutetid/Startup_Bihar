import React, { useState } from 'react';
import Textbox from './Testbox'; // Ensure this is correctly imported
import Upload from './Upload'; // Assuming you have an Upload component
import { useFormik } from 'formik';
import axios from 'axios';

// Validation function
const validate = values => {
    const errors = {};

    if (!values.RegistrationNo) {
        errors.RegistrationNo = 'Required';
    }
    if (!values.FounderName) {
        errors.FounderName = 'Required';
    } else if (values.FounderName.length > 15) {
        errors.FounderName = 'Must be 15 characters or less';
    }
    if (!values.FounderAadharNumber) {
        errors.FounderAadharNumber = 'Required';
    } else if (!/^\d{10}$/.test(values.FounderAadharNumber)) {
        errors.FounderAadharNumber = 'Must be exactly 10 digits';
    }

    if (!values.BriefontheBusinessConcept) {
        errors.BriefontheBusinessConcept = 'Required';
    }
    if (!values.Sector) {
        errors.Sector = 'Required';
    }
    if (!values.CompanyLogo) {
        errors.CompanyLogo = 'Required';
    }
    if (!values.WebsiteLink) {
        errors.WebsiteLink = 'Required'
    }
    if (!values.DPIITRecognitionNumber) {
        errors.DPIITRecognitionNumber = 'Required'
    }
    if (!values.UploadDIPPCertificate) {
        errors.UploadDIPPCertificate = 'Required';
    }
    if (!values.CofunderName) {
        errors.CofunderName = 'Required';
    } else if (values.CofunderName.length > 20) {
        errors.CofunderName = 'Must be 20 characters or less';
    }
    if (!values.CofunderAadharNumber) {
        errors.CofunderAadharNumber = 'Required';
    } else if (!/^\d{10}$/.test(values.CofunderAadharNumber)) {
        errors.CofunderAadharNumber = 'Must be exactly 10 digits';
    }
    if (!values.MobileNo) {
        errors.MobileNo = 'Required';
    } else if (!/^\d{10}$/.test(values.MobileNo)) {
        errors.MobileNo = 'Must be exactly 10 digits';
    }


    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.Category) {
        errors.Category = 'Required';
    }
    if (!values.Gender) {
        errors.Gender = 'Required';
    }


    return errors;
};

const Startupform = () => {
    const [submitted, setSubmitted] = useState(false);
    const formik = useFormik({
        initialValues: {
            RegistrationNo: '',
            FounderName: '',
            FounderAadharNumber: '',
            BriefontheBusinessConcept: '',
            Sector: '',
            CompanyLogo: null,
            WebsiteLink: '',
            DPIITRecognitionNumber: '',
            UploadDIPPCertificate: null,
            CofunderName: '',
            CofunderAadharNumber: '',
            MobileNo: '',
            email: '',
            Category: '',
            Gender: '',
        },
        validate,
        onSubmit: async (values) => {
            try {


                // Manually accessing each property of the values object and creating a new object
                const dataToSubmit = {
                    registrationNo: values.RegistrationNo,
                    foundersName: values.FounderName,
                    founderAadharNumber: values.FounderAadharNumber,
                    briefOnBusinessConcept: values.BriefontheBusinessConcept,
                    sector: values.Sector,
                    companyLogo: values.CompanyLogo,
                    websiteLink: values.WebsiteLink,
                    dpiitRecognitionNumber: values.DPIITRecognitionNumber,
                    uploadDippCertificate: values.UploadDIPPCertificate,
                    cofounderName: values.CofunderName,
                    cofounderAadharNumber: values.CofunderAadharNumber,
                    mobileNo: values.MobileNo,
                    email: values.email,
                    category: values.Category,
                    gender: values.Gender
                };

                // Stringify the object manually without looping
                const dataString = JSON.stringify(dataToSubmit);
                console.log(JSON.stringify(values, null, 2));
                console.log(dataString);


                // Get token from localStorage
                const token = localStorage.getItem('token');

                // Send form data to the backend using Axios
                const response = await axios.post('http://localhost:3000/api/StartupProfile', dataString, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `${token}`, // Use backticks to insert token properly
                    },
                });

                if (response.status === 200) {
                    console.log('Form submitted successfully:', response.data);
                    setSubmitted(true); // Assuming setSubmitted is a state setter function
                }
            } catch (error) {
                console.error('Error submitting the form:', error.response ? error.response.data : error.message);
            }

        },
    });



    const onFileChange = (file, fieldName) => {
        console.log('File selected:', file.name);
        formik.setFieldValue(fieldName, file); // Set the file value in Formik
    };


    return (
        <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8 min-h-screen flex flex-col items-center">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                ></div>
            </div>
            {submitted && (
                <div className="mt-4 font-bold text-black-600">
                    Form submitted successfully!
                </div>
            )}

            <div className="flex w-full max-w-5xl mt-10 space-x-10 ">

                <form onSubmit={formik.handleSubmit} className="w-1/2 p-8 rounded-lg">
                    <h3 className="font-semibold text-xl mb-6">Application Form for Startups</h3>


                    <div className="mb-6">
                        <Textbox
                            label="Registration No"
                            name="RegistrationNo"
                            onChange={formik.handleChange}
                            value={formik.values.RegistrationNo}
                        />
                        {formik.errors.RegistrationNo && <div className="text-red-600">{formik.errors.RegistrationNo}</div>}
                    </div>

                    <div className="mb-6">
                        <Textbox
                            label="Founder Name"
                            name="FounderName"
                            onChange={formik.handleChange}
                            value={formik.values.FounderName}
                        />
                        {formik.errors.FounderName && <div className="text-red-600">{formik.errors.FounderName}</div>}
                    </div>


                    <div className="mb-6">
                        <Textbox
                            label="Founder Aadhar Number"
                            name="FounderAadharNumber"
                            onChange={formik.handleChange}
                            value={formik.values.FounderAadharNumber}
                        />
                        {formik.errors.FounderAadharNumber && <div className="text-red-600">{formik.errors.FounderAadharNumber}</div>}
                    </div>
                    <div className="mb-6">
                        <Textbox
                            label="Brief on the Business Concept"
                            name="BriefontheBusinessConcept"
                            onChange={formik.handleChange}
                            value={formik.values.BriefontheBusinessConcept}
                        />
                        {formik.errors.BriefontheBusinessConcept && <div className="text-red-600">{formik.errors.BriefontheBusinessConcept}</div>}
                    </div>
                    <div className="mb-6">
                        <Textbox
                            label="Sector"
                            name="Sector"
                            onChange={formik.handleChange}
                            value={formik.values.Sector}
                        />
                        {formik.errors.Sector && <div className="text-red-600">{formik.errors.Sector}</div>}
                    </div>
                    <div className="mb-6">
                        <Upload
                            label="Company Logo"
                            name="CompanyLogo"
                            onChange={(file) => onFileChange(file, 'CompanyLogo')}
                        />
                        {formik.errors.CompanyLogo && <div className="text-red-600">{formik.errors.CompanyLogo}</div>}
                    </div>
                    <div className="mb-6">
                        <Textbox
                            label="Website Link"
                            name="WebsiteLink"
                            onChange={formik.handleChange}
                            value={formik.values.WebsiteLink}
                        />
                        {formik.errors.WebsiteLink && <div className="text-red-600">{formik.errors.WebsiteLink}</div>}
                    </div>


                    <div className="mb-6">
                        <Textbox
                            label="DPIIT Recognition Number"
                            name="DPIITRecognitionNumber"
                            onChange={formik.handleChange}
                            value={formik.values.DPIITRecognitionNumber}
                        />
                        {formik.errors.DPIITRecognitionNumber && <div className="text-red-600">{formik.errors.DPIITRecognitionNumber}</div>}
                    </div>



                </form>


                <form onSubmit={formik.handleSubmit} className="w-1/2 p-8 mt-12 rounded-lg">
                    <div className="mb-6">

                        <Upload
                            label="Upload Dipp Certificate"
                            name="UploadDIPPCertificate" // Removed the leading space
                            onChange={(event) => onFileChange(event, 'UploadDIPPCertificate')}
                        />
                        {formik.errors.UploadDIPPCertificate && <div className="text-red-600">{formik.errors.UploadDIPPCertificate}</div>}
                    </div>

                    <div className="mb-6">
                        <Textbox
                            label="Co-funder Name"
                            name="CofunderName"
                            onChange={formik.handleChange}
                            value={formik.values.CofunderName}
                        />
                        {formik.errors.CofunderName && <div className="text-red-600">{formik.errors.CofunderName}</div>}
                    </div>
                    <div className="mb-6">
                        <Textbox
                            label="Co-Funder Aadhar Number"
                            name="CofunderAadharNumber"
                            onChange={formik.handleChange}
                            value={formik.values.CofunderAadharNumber}
                        />
                        {formik.errors.CofunderAadharNumber && <div className="text-red-600">{formik.errors.CofunderAadharNumber}</div>}
                    </div>
                    <div className="mb-6">
                        <Textbox
                            label="Mobile Number"
                            name="MobileNo"
                            onChange={formik.handleChange}
                            value={formik.values.MobileNo}
                        />
                        {formik.errors.MobileNo && <div className="text-red-600">{formik.errors.MobileNo}</div>}
                    </div>
                    <div className="mb-6">
                        <Textbox
                            label="Email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email && <div className="text-red-600">{formik.errors.email}</div>}
                    </div>


                    <div className="mb-6">
                        <Textbox
                            label="Category"
                            name="Category"
                            onChange={formik.handleChange}
                            value={formik.values.Category}
                        />
                        {formik.errors.Category && <div className="text-red-600">{formik.errors.Category}</div>}
                    </div>


                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        <select
                            name="Gender"
                            className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={formik.handleChange}
                            value={formik.values.Gender}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Transgender">Transgender</option>
                        </select>
                        {formik.errors.Gender && <div className="text-red-600">{formik.errors.Gender}</div>}
                    </div>



                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Upload
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Startupform;
