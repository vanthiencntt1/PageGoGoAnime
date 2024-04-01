"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";

import Image from "next/image";

const DataAddress: any = [
  {
    Addresspick: "",
    Wardspick: "",
    Districtspick: "",
    Citypick: "",
    Addressup: "",
    Wardsup: "",
    Districtsup: "",
    Cityup: "",
    usename: "",
    phone: "",
    people: "",
    selectedOption: "",
  },
];
const carImages: any = {
  Xe4cho: "/images/cho4.jpg",
  Xe7cho: "/images/cho7.png",
  Xe11cho: "/images/cho11.jpg",
  Xe24cho: "/images/cho24.png",
};

function page() {
  // Khởi tạo data
  const [cities, setCities] = useState([]);
  // pick  up-- Dón
  const [selectedCitypick, setSelectedCitypick] = useState("");
  const [selectedCitypickName, setSelectedCitypickName] = useState("");
  const [districtspick, setDistrictspick] = useState([]);
  const [selectedDistrictpick, setSelectedDistrictpick] = useState("");
  const [selectedDistrictpickName, setSelectedDistrictpickName] = useState("");
  const [wardspick, setWardspick] = useState([]);
  const [selectedWardpick, setSelectedWardpick] = useState("");

  const [inputaddresspick, setInputaddresspick] = useState("");
  // pay --- Trả
  const [selectedCityup, setSelectedCityup] = useState("");
  const [selectedCityupName, setSelectedCityupName] = useState("");
  const [districtsup, setDistrictsup] = useState([]);
  const [selectedDistrictup, setSelectedDistrictup] = useState("");
  const [selectedDistrictupName, setSelectedDistrictupName] = useState("");
  const [wardsup, setWardsup] = useState([]);
  const [selectedWardup, setSelectedWardup] = useState("");
  const [inputaddressup, setInputaddressup] = useState("");

  // Thông tin khách hàng
  const [usename, setUsename] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    usename: "",
    phone: "",
    people: "",
    selectedOption: "",
    Addresspick: "",
    Addressup: "",
  });

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

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

  // Pick address
  const handleCityChange = (e: any) => {
    const cityId = e.target.value;
    setSelectedCitypick(cityId);

    setSelectedDistrictpick("");
    setSelectedWardpick("");

    const selectedCityData = cities.find(
      (city: any) => city.Id === cityId
    ) as any;

    if (selectedCityData) {
      setDistrictspick(selectedCityData.Districts);
      setSelectedCitypickName(selectedCityData.Name);
    } else {
      setDistrictspick([]);
    }
  };

  const handleDistrictChange = (e: any) => {
    const districtId = e.target.value;

    setSelectedDistrictpick(districtId);
    setSelectedWardpick("");
    const selectedCityData = cities.find(
      (city: any) => city.Id === selectedCitypick
    ) as any;
    if (selectedCityData) {
      const selectedDistrictData = selectedCityData.Districts.find(
        (district: any) => district.Id === districtId
      );
      if (selectedDistrictData) {
        setSelectedDistrictpickName(selectedDistrictData.Name);
        setWardspick(selectedDistrictData.Wards);
      } else {
        setWardspick([]);
      }
    } else {
      setWardspick([]);
    }
  };
  const handleChange = (event: any) => {
    setInputaddresspick(event.target.value);
  };

  // up address
  const handleCityChangeup = (e: any) => {
    const cityId = e.target.value;
    setSelectedCityup(cityId);

    setSelectedDistrictup("");
    setSelectedWardup("");

    const selectedCityData = cities.find(
      (city: any) => city.Id === cityId
    ) as any;

    if (selectedCityData) {
      setDistrictsup(selectedCityData.Districts);
      setSelectedCityupName(selectedCityData.Name);
    } else {
      setDistrictsup([]);
    }
  };

  const handleDistrictChangeup = (e: any) => {
    const districtId = e.target.value;

    setSelectedDistrictup(districtId);
    setSelectedWardup("");
    const selectedCityData = cities.find(
      (city: any) => city.Id === selectedCityup
    ) as any;
    if (selectedCityData) {
      const selectedDistrictData = selectedCityData.Districts.find(
        (district: any) => district.Id === districtId
      );
      if (selectedDistrictData) {
        setSelectedDistrictupName(selectedDistrictData.Name);
        setWardsup(selectedDistrictData.Wards);
      } else {
        setWardsup([]);
      }
    } else {
      setWardsup([]);
    }
  };

  const handleChangeup = (event: any) => {
    setInputaddressup(event.target.value);
  };
  // Thông tin hành chính khách hàng
  const handleChangeUsename = (e: any) => {
    setUsename(e.target.value);
  };
  const handleChangePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const handleChangePeople = (e: any) => {
    setPeople(e.target.value);
  };
  //console.log(usename);

  // Call api insert ggsheet
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      !usename ||
      !phone ||
      !people ||
      !selectedOption ||
      !inputaddresspick ||
      !selectedWardpick ||
      !selectedDistrictpickName ||
      !selectedCitypickName ||
      !inputaddressup ||
      !selectedWardup ||
      !selectedDistrictupName ||
      !selectedCityupName
    ) {
      alert(" Nhập đủ dữ liệu.");
      return; // Exit the function if any field is empty
    }

    try {
      const NewFormData = {
        usename: usename,
        phone: phone,
        people: people,
        selectedOption: selectedOption,
        Addresspick:
          inputaddresspick +
          "," +
          selectedWardpick +
          "," +
          selectedDistrictpickName +
          "," +
          selectedCitypickName,
        Addressup:
          inputaddressup +
          "," +
          selectedWardup +
          "," +
          selectedDistrictupName +
          "," +
          selectedCityupName,
      };
      setFormData(NewFormData);
      console.log(formData);

      const fetch = require("node-fetch");
      const FormData = require("form-data");

      let data = new FormData();
      data.append("entry.1385122593", NewFormData.usename);
      data.append("entry.804075096", NewFormData.phone);
      data.append("entry.893378683", NewFormData.people);
      data.append("entry.1613912035", NewFormData.selectedOption);
      data.append("entry.307871000", NewFormData.Addresspick);
      data.append("entry.914328806", NewFormData.Addressup);

      fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd7o45yMBB8yEdVjWWA1bEqOSI7clDiJXD0YIjc5g9jCElCWQ/formResponse",
        {
          method: "POST",
          body: data,
        }
      )
        .then((response: any) => response.json())
        .then((data: any) => console.log(JSON.stringify(data)))
        .catch((error: any) => console.error("Error:", error));
      alert("Đặt Xe  thành công.");
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log(error);
      alert("Đặt Xe không thành công.");
    }
    // Rest biến
    setSelectedCitypick("");
    setSelectedCitypickName("");
    setDistrictspick([]);
    setSelectedDistrictpick("");
    setSelectedDistrictpickName("");
    setWardspick([]);
    setSelectedWardpick("");

    setInputaddresspick("");
    setSelectedCityup("");
    setSelectedCityupName("");
    setDistrictsup([]);
    setSelectedDistrictup("");
    setSelectedDistrictupName("");
    setWardsup([]);
    setSelectedWardup("");
    setInputaddressup("");

    setUsename("");
    setPhone("");
    setPeople("");
    setSelectedOption("");
  };

  return (
    <div>
      <div className="pb-10">
        <p className="w-full h-10 bg-orange-800  text-center uppercase font-semibold  ">
          <span className="inline-block align-middle mt-2">
            THÔNG TIN KHÁCH HÀNG
          </span>
        </p>
        <div className="">
          <span>Tên Khách Hàng</span>
          <input
            className="w-full"
            placeholder="Nhập họ tên khách hàng"
            value={usename}
            onChange={handleChangeUsename}
          ></input>

          <span> Số Điện Thoại</span>
          <input
            className="w-full"
            placeholder="Số Điện Thoại"
            value={phone}
            onChange={handleChangePhone}
          ></input>
          <span> Số lượng khách</span>
          <input
            className="w-full"
            placeholder="Số Điện Thoại"
            value={people}
            onChange={handleChangePeople}
          ></input>
        </div>
        <div>
          <label
            htmlFor="carSelect"
            className="block text-sm font-medium text-gray-700"
          >
            Chọn loại xe:
          </label>
          <select
            id="carSelect"
            name="carSelect"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">Chọn loại xe</option>
            <option value="Xe4cho">Xe 4 chỗ</option>
            <option value="Xe7cho">Xe 7 chỗ</option>
            <option value="Xe11cho">Xe 11 chỗ</option>
            <option value="Xe24cho">Xe 24 chỗ</option>
          </select>
          {selectedOption && (
            <p className="mt-2 h-20 w-full  flex justify-center  text-sm text-gray-500">
              Bạn đã chọn:
              {selectedOption && (
                <div className="ml-4">
                  <Image
                    src={carImages[selectedOption]}
                    alt={selectedOption}
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </p>
          )}
        </div>
      </div>
      <p className="w-full h-10 bg-orange-800  mx-auto px-auto text-center uppercase font-semibold ">
        <span className="inline-block align-middle mt-2">
          THÔNG TIN Vị TRÍ ĐÓN TRẢ KHÁCH
        </span>
      </p>
      <div className=" justify-center grid lg:gap-2 lg:grid-cols-2 md:gap-1 md:grid-cols-1">
        <div className="table-responsive ">
          <table className=" w-full table table-xs table-pin-rows table-pin-cols  bg-slate-600">
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  className=" uppercase font-semibold text-center"
                >
                  <p>NHẬP ĐỊA CHỈ ĐÓN KHÁCH</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className=" h-[30px] w-full text-left uppercase font-semibold">
                    Tỉnh:
                  </p>
                </td>
                <td>
                  <select
                    className=" h-[30px] w-full mx-auto px-auto form-select form-select-sm mb-3"
                    value={selectedCitypick}
                    onChange={handleCityChange}
                  >
                    <option value="">Chọn tỉnh thành</option>
                    {cities.map((city: any) => (
                      <option key={city.Id} value={city.Id}>
                        {city.Name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="h-[30px] w-full uppercase font-semibold ">
                    Quận Huyện:
                  </p>
                </td>
                <td>
                  <select
                    className="h-[30px] w-full mx-auto px-auto form-select form-select-sm mb-3"
                    value={selectedDistrictpick}
                    onChange={handleDistrictChange}
                  >
                    <option value="">Chọn quận huyện</option>
                    {districtspick.map((district: any) => (
                      <option key={district.Id} value={district.Id}>
                        {district.Name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="h-[30px] w-full uppercase font-semibold">Xã:</p>
                </td>
                <td>
                  <select
                    className=" h-[30px] w-full  mx-auto px-auto form-select form-select-sm mb-3"
                    value={selectedWardpick}
                    onChange={(e) => setSelectedWardpick(e.target.value)}
                  >
                    <option value="">Chọn phường xã</option>
                    {wardspick.map((ward: any) => (
                      <option key={ward.Id} value={ward.Name}>
                        {ward.Name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="h-[30px] w-full uppercase font-semibold">
                    Địa chỉ Cụ Thể:
                  </p>
                </td>
                <td>
                  <input
                    className="h-[30px] w-full mx-auto px-auto"
                    type="text"
                    placeholder="Nhập địa chỉ"
                    value={inputaddresspick}
                    onChange={handleChange as any}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-responsive ">
          <table className=" w-full table table-xs table-pin-rows table-pin-cols  bg-slate-600">
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  className=" uppercase font-semibold text-center"
                >
                  <p>NHẬP ĐỊA CHỈ TRẢ KHÁCH</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className=" h-[30px] w-full text-left uppercase font-semibold">
                    Tỉnh:
                  </p>
                </td>
                <td>
                  <select
                    className=" h-[30px] w-full mx-auto px-auto form-select form-select-sm mb-3"
                    value={selectedCityup}
                    onChange={handleCityChangeup}
                  >
                    <option value="">Chọn tỉnh thành</option>
                    {cities.map((city: any) => (
                      <option key={city.Id} value={city.Id}>
                        {city.Name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="h-[30px] w-full uppercase font-semibold ">
                    Quận Huyện:
                  </p>
                </td>
                <td>
                  <select
                    className="h-[30px] w-full mx-auto px-auto form-select form-select-sm mb-3"
                    value={selectedDistrictup}
                    onChange={handleDistrictChangeup}
                  >
                    <option value="">Chọn quận huyện</option>
                    {districtsup.map((district: any) => (
                      <option key={district.Id} value={district.Id}>
                        {district.Name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="h-[30px] w-full uppercase font-semibold">Xã:</p>
                </td>
                <td>
                  <select
                    className=" h-[30px] w-full  mx-auto px-auto form-select form-select-sm mb-3"
                    value={selectedWardup}
                    onChange={(e) => setSelectedWardup(e.target.value)}
                  >
                    <option value="">Chọn phường xã</option>
                    {wardsup.map((ward: any) => (
                      <option key={ward.Id} value={ward.Name}>
                        {ward.Name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="h-[30px] w-full uppercase font-semibold">
                    Địa chỉ Cụ Thể:
                  </p>
                </td>
                <td>
                  <input
                    className="h-[30px] w-full mx-auto px-auto"
                    type="text"
                    placeholder="Nhập địa chỉ"
                    value={inputaddressup}
                    onChange={handleChangeup as any}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" flex justify-center mt-10">
        <Button className="w-[300px]" onClick={handleSubmit}>
          ĐẶT LỊCH
        </Button>
      </div>
    </div>
  );
}

export default page;
