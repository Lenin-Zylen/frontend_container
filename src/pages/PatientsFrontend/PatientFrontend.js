import React, { useEffect } from "react";
import MicroFrontend from "../../MicroFrontend";

import { createBrowserHistory } from "history";
// import Layout from "../../components/Layouts/Layout/Layout";
// import { isEmpty } from "lodash";
// import { useNavigate } from "react-router-dom";
import VerticalLayout from "../../components/VerticalLayout";

const defaultHistory = createBrowserHistory();

const PatientFrontend = () => {
  const { REACT_APP_PATIENT_HOST: patientHost } = process.env;
  // let navigate = useNavigate();

  function PatientModule({ history }) {
    return (
      <MicroFrontend history={history} host={patientHost} name="patient" />
    );
  }

  // useEffect(() => {
  //   if (isEmpty(localStorage.getItem("user"))) {
  //     navigate("/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [localStorage.getItem("user")]);

  return (
    <VerticalLayout>
      <div className="page-content">
        <div id="patient">
          <PatientModule history={defaultHistory} />
        </div>
      </div>
    </VerticalLayout>
  );
};

export default PatientFrontend;
