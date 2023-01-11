import React from "react";
import VerticalLayout from "../../components/VerticalLayout";
import AppointmentFrontend from "../AppointmentsFrontend/AppointmentFrontend";
import PatientFrontend from "../PatientsFrontend/PatientFrontend";
const Home = () => {
  return (
    <VerticalLayout>
      <div className="page-content">
        <h1>Home</h1>
        <AppointmentFrontend />
        <PatientFrontend />
      </div>
    </VerticalLayout>
  );
};

export default Home;
