"use client";
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

interface ExcelRow {
  MaXa: string;
  TenXa: string;
  MaQH: string;
  TenQH: string;
  MaTP: string;
  TenTP: string;
}

function ExcelForm() {
  const [data, setData] = useState<ExcelRow[]>([]); // Đặt kiểu dữ liệu cho useState
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const excelFile = await fetch("/Data/Data_Test.xlsx"); // Thay đổi thành đường dẫn thực tế của bạn
        const arrayBuffer = await excelFile.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const excelData: ExcelRow[] = XLSX.utils.sheet_to_json(
          worksheet
        ) as ExcelRow[];

        setData(excelData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = data
        .filter((row) =>
          row.TenTP.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((row) => row.TenTP);
      setSuggestions(filteredSuggestions);
    }
    console.log(searchTerm);
  }, [searchTerm, data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    saveDataToJsonFile(suggestion);
  };

  const saveDataToJsonFile = (selectedSuggestion: string) => {
    // Tạo đối tượng ExcelRow từ dữ liệu đã chọn
    const selectedData: ExcelRow | undefined = data.find(
      (row) => row.TenTP === selectedSuggestion
    );
    if (selectedData) {
      const jsonData = JSON.stringify(selectedData, null, 2);
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "selected_data.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên thành phố"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExcelForm;
