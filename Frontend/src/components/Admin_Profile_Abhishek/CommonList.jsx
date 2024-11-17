import React, { useState, useEffect } from "react";
import axios from "axios";

const CommonList = ({ onSelect, url,title }) => {
  const [sdata, setSdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to manage search input
  const [isLoading, setIsLoading] = useState(true); // State for loading status

  const handleClick = (id) => {
    onSelect(id);
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        setSdata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Loading complete
      }
    };

    fetchData();
  }, [url]); // Refetch when the URL changes

  // Filter data based on the search term
  const filteredData = sdata.data?.filter((item) =>
    item.user.user_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="w-full bg-slate-200 h-screen overflow-y-auto"
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <h1 className="pl-5 pt-8 text-2xl pb-4">{title}</h1>

      {/* Search Box */}
      <div className="pl-5 mb-4">
        <input
          type="text"
          placeholder="Search by User ID"
          className="w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display "No data" message or results */}
      {isLoading ? (
        <p className="text-center text-gray-500 mt-10">Loading data...</p>
      ) : filteredData?.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No data available. Please try searching again.
        </p>
      ) : (
        <ul>
          {filteredData.map((item) => (
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
                  <h1 className="">{item.user.user_id}</h1>
                  <h1 className="">Reg no: {item.user.registration_no}</h1>
                  <h1 className="">Seed Fund Application</h1>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommonList;