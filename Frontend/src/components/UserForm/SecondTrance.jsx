import React, { useState } from 'react';
import Upload from './Upload';
import { useFormik } from 'formik';

const SecondTrance = () => {
  const [uploadedFiles, setUploadedFiles] = useState({
    utilizationCertificate: null,
    statusReport: null,
    expenditurePlan: null,
    bankStatement: null,
    expenditureInvoice: null,
    geoTaggedPhotos: null,
  });

  const handleFileChange = (file, fieldName) => {
    setUploadedFiles((prev) => ({ ...prev, [fieldName]: file }));
  };

  const formik = useFormik({
    initialValues: {
      // Your other form fields can be added here if needed
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('utilizationCertificate', uploadedFiles.utilizationCertificate);
      formData.append('statusReport', uploadedFiles.statusReport);
      formData.append('expenditurePlan', uploadedFiles.expenditurePlan);
      formData.append('bankStatement', uploadedFiles.bankStatement);
      formData.append('expenditureInvoice', uploadedFiles.expenditureInvoice);
      formData.append('geoTaggedPhotos', uploadedFiles.geoTaggedPhotos);

      try {
        const response = await fetch('http://localhost:3000/api/second-tranche', {
          method: 'POST',
          headers: {
            // If you are using JWT for authentication, include the token here
            Authorization: `${localStorage.getItem('token')}`, // Adjust according to your token storage
          },
          body: formData,
        });

        const data = await response.json();
        if (response.ok) {
          alert('Form submitted successfully!');
          console.log(data);
        } else {
          alert('Error: ' + data.error);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form.');
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="flex w-full max-w-5xl mt-10 space-x-10">
        {/* Left Form */}
        <form onSubmit={formik.handleSubmit} className="w-1/2 p-8 rounded-lg">
          <h3 className="font-semibold text-xl mb-6">Application Form for Second Tranche</h3>

          {/* Registration Number Field */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">C.A certified utilization certificate</label>
            <Upload onFileChange={(file) => handleFileChange(file, 'utilizationCertificate')} className="bg-blue-500 text-white rounded-2xl shadow-lg gap-1.4rem">
              Upload Button
            </Upload>
          </div>

          {/* Status Report Field */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Status Report</label>
            <Upload onFileChange={(file) => handleFileChange(file, 'statusReport')} className="bg-blue-500 text-white rounded-2xl shadow-lg gap-1.4rem">
              Upload Button
            </Upload>
          </div>

          {/* Expenditure Plan Field */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Upload Self-declared second tranche expenditure plan in the letterhead of the entity</label>
            <Upload onFileChange={(file) => handleFileChange(file, 'expenditurePlan')} className="bg-blue-500 text-white rounded-2xl shadow-lg gap-1.4rem">
              Upload Button
            </Upload>
          </div>
        </form>

        {/* Right Form (Optional, if needed) */}
        <form onSubmit={formik.handleSubmit} className="w-1/2 p-8 mt-11 rounded-lg">
          {/* Bank Statement Field */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Bank statement (Highlight the fund received and expenditure made)</label>
            <Upload onFileChange={(file) => handleFileChange(file, 'bankStatement')} className="bg-blue-500 text-white rounded-2xl shadow-lg gap-1.4rem">
              Upload Button
            </Upload>
          </div>

          {/* Expenditure Invoice Field */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Upload Expenditure Invoice</label>
            <Upload onFileChange={(file) => handleFileChange(file, 'expenditureInvoice')} className="bg-blue-500 text-white rounded-2xl shadow-lg gap-1.4rem">
              Upload Button
            </Upload>
          </div>

          {/* Geo-tagged Photos Field */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Upload geo-tagged photos of your offices/ units</label>
            <Upload onFileChange={(file) => handleFileChange(file, 'geoTaggedPhotos')} className="bg-blue-500 text-white rounded-2xl shadow-lg gap-1.4rem">
              Upload Button
            </Upload>
          </div>
        </form>
      </div>
      {/* Submit Button */}
      <button onClick={formik.handleSubmit} className="mt-4 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600">
        Submit
      </button>
    </div>
  );
};

export default SecondTrance;
