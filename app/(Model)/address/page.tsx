"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityName, setSelectedCityName] = useState("");

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");
  const [inputaddress, setInputaddress] = useState("");
  console.log(
    selectedCity,
    selectedCityName,
    selectedDistrict,
    selectedWard,
    inputaddress
  );

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      )
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleCityChange = (e: any) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);

    setSelectedDistrict("");
    setSelectedWard("");
    const selectedCityData = cities.find(
      (city: any) => city.Id === cityId
    ) as any;

    if (selectedCityData) {
      setDistricts(selectedCityData.Districts);
      setSelectedCityName(selectedCityData.Name);
    } else {
      setDistricts([]);
    }
  };

  const handleDistrictChange = (e: any) => {
    const districtId = e.target.value;

    setSelectedDistrict(districtId);
    setSelectedWard("");
    const selectedCityData = cities.find(
      (city: any) => city.Id === selectedCity
    ) as any;
    if (selectedCityData) {
      const selectedDistrictData = selectedCityData.Districts.find(
        (district: any) => district.Id === districtId
      );
      if (selectedDistrictData) {
        setWards(selectedDistrictData.Wards);
      } else {
        setWards([]);
      }
    } else {
      setWards([]);
    }
  };
  const handleChange = (event: any) => {
    setInputaddress(event.target.value);
  };

  return (
    <div>
      <select
        className="form-select form-select-sm mb-3"
        value={selectedCity}
        onChange={handleCityChange}
      >
        <option value="">Chọn tỉnh thành</option>
        {cities.map((city: any) => (
          <option key={city.Id} value={city.Id}>
            {city.Name}
          </option>
        ))}
      </select>

      <select
        className="form-select form-select-sm mb-3"
        value={selectedDistrict}
        onChange={handleDistrictChange}
      >
        <option value="">Chọn quận huyện</option>
        {districts.map((district: any) => (
          <option key={district.Id} value={district.Id}>
            {district.Name}
          </option>
        ))}
      </select>

      <select
        className="form-select form-select-sm"
        value={selectedWard}
        onChange={(e) => setSelectedWard(e.target.value)}
      >
        <option value="">Chọn phường xã</option>
        {wards.map((ward: any) => (
          <option key={ward.Id} value={ward.Id}>
            {ward.Name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Nhập địa chỉ"
        value={inputaddress}
        onChange={handleChange as any}
      />
    </div>
  );
}

export default App;
