import React from "react";
import { Routes, Route } from "react-router-dom";
// import ErrorPage from "../globalComponent/ErrorPage/Error";
import AppointmentFrontend from "../pages/AppointmentsFrontend/AppointmentFrontend";
import PatientFrontend from "../pages/PatientsFrontend/PatientFrontend";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";

const Routing = () => {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<AppointmentFrontend />} />
        <Route path="/patient" element={<PatientFrontend />} />

        {/* Protected routes */}

        {/* Wildcard route */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
};

export default Routing;
