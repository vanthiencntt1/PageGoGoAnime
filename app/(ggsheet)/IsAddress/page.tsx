"use client";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx"; // Thư viện để đọc tệp Excel

export default function page() {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
  });
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Đọc dữ liệu từ tệp Excel
    const fetchDataFromExcel = async () => {
      try {
        const excelFile = await fetch("/Data/Danhsachxa27032024.xlsx"); // Thay đổi thành tên tệp Excel thực tế của bạn
        const arrayBuffer = await excelFile.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);

        // Chuyển dữ liệu từ Excel thành mảng các lựa chọn
        const options = data.map((item) => ({
          value: item.address,
          label: item.address, // Giả sử địa chỉ được lưu trong cột "address" của tệp Excel
        }));
        setOptions(options);
      } catch (error) {
        console.error("Error reading data from Excel:", error);
      }
    };

    fetchDataFromExcel();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Address:", address);
    // Add code to submit address data to backend or perform any necessary actions
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={address.street}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={address.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={address.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={address.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="addressOptions">Choose Address:</label>
          <select id="addressOptions" onChange={handleChange}>
            <option value="">Select an address...</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
