"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form";

// link sheet: https://docs.google.com/spreadsheets/d/1hUR4iwB0XOCrlNZriMFwtw84XK3Wwjt_DKtWgrXCBjI/edit#gid=284945302

//https://script.google.com/macros/s/AKfycby0zpW9AhbOgTguLYhE0TxJikgClDGXvvisQ8J4z913ASii2ZdglFBq6_CDdB_S21CY/exec
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [persons, setPersons] = useState<any[]>([]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Gửi dư liệu vào api
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert(" Nhập đủ dữ liệu.");
      return; // Exit the function if any field is empty
    }

    try {
      const axios = require("axios");
      const FormData = require("form-data");
      let data = new FormData();
      data.append("entry.1119411636", formData.name);
      data.append("entry.1634544710", formData.phone);
      data.append("entry.322316093", formData.email);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeUCVGmQ4bb9UBgvmyWHRBayQWFIz3G_rjBWPtDqFsgQrv31A/formResponse",
        data: data,
      };

      axios
        .request(config)
        .then((response: { data: any }) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error: any) => {
          console.log(error);
        });

      setFormData({
        name: "",
        phone: "",
        email: "",
      });
      alert("Gửi Thành Công.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  // Render api  gg sheet
  const Renderapi = () => {
    axios
      .get(
        `https://script.google.com/macros/s/AKfycby0zpW9AhbOgTguLYhE0TxJikgClDGXvvisQ8J4z913ASii2ZdglFBq6_CDdB_S21CY/exec`
      )
      .then((res) => {
        //const persons = res.data;
        setPersons(res.data);
        console.log(persons);
        // this.setState({ persons });
      })
      .catch((error) => console.log(error));
  };

  return (
    // Form input

    <div>
      <div className=" flex justify-center">
        <form onSubmit={handleSubmit} className=" bg-slate-500  w-60">
          <div className="text-center">Nhập liệu kiểm thử</div>
          <div>
            <p> Name:</p>
            <input
              className="mx-5 border-orange-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <p> Phone:</p>

            <input
              className="mx-5 border-orange-500"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <p> Email:</p>

            <input
              className="mx-5 border-orange-500"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit" onClick={Renderapi} className="mx-10">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <Button onClick={Renderapi}> Xem</Button>
      <ul>
        {persons.map((persons) => (
          <>
            <li>Họ Tên:{persons.name}</li>
            <li>Số Điện Thoại{persons.phone}</li>
            <li>Email:{persons.email}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Form;
