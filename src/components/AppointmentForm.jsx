// components/AppointmentForm.jsx
import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const shopServices = [
    { name: "cutting", code: "NY" },
    { name: "facial", code: "RM" },
    { name: "spa", code: "LDN" },
    { name: "stratning", code: "IST" },
    { name: "cleaning", code: "PRS" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, gender, phone, services, date, time });
    const appointmentDetails = { name, gender, phone, services, date, time };

    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentDetails),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        alert("Your appointment is booked");
        return response.json();
      })
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error booking your appointment: " + error.message);
      });
  };

  return (
    <form>
      <div>
        <h2 className="text-center mb-4">Appointment Form</h2>
        <p className="text-center mb-4">
          Book your appointment to save salon rush.
        </p>

        <div className="row mb-3">
          <div className="col-md-6">
            <label
              htmlFor="name"
              className="form-label"
              style={{ marginRight: "36rem" }}
            >
              Name:
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="Gender"
              className="form-label"
              style={{ marginRight: "36rem" }}
            >
              Gender:
            </label>
            <select
              className="form-control"
              id="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label
              htmlFor="phone"
              className="form-label"
              style={{ marginRight: "36rem" }}
            >
              Phone:
            </label>
            <input
              className="form-control"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="services"
              className="form-label"
              style={{ marginRight: "36rem" }}
            >
              Services:
            </label>

            <div
              className="card flex form-control"
              style={{ padding: "0.4rem" }}
            >
              <MultiSelect
                value={services}
                onChange={(e) => setServices(e.value)}
                options={shopServices}
                optionLabel="name"
                filter
                placeholder="Select Services"
                maxSelectedLabels={7}
                className="w-full md:w-20rem"
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label
              htmlFor="date"
              className="form-label"
              style={{ marginRight: "36rem", width: "9rem" }}
            >
              Appointment Date:
            </label>
            <input
              className="form-control"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="time"
              className="form-label"
              style={{ marginRight: "36rem", width: "9rem" }}
            >
              Appointment Time:
            </label>
            <input
              className="form-control"
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <button
          className="btn btn-primary mt-3 w-100"
          onClick={handleSubmit}
          type="submit"
        >
          Book now
        </button>
      </div>
    </form>
  );
}
