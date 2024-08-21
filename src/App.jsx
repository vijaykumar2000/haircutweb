// App.jsx
import React, { useRef } from "react";
import "./App.css";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  // Create a reference for the AppointmentForm component
  const appointmentFormRef = useRef(null);

  // Function to scroll to the AppointmentForm section
  const scrollToAppointmentForm = () => {
    appointmentFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onBookAppointmentClick={scrollToAppointmentForm} />
      <Home />
      {/* Reference the AppointmentForm */}
      <div ref={appointmentFormRef}>
        <AppointmentForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
