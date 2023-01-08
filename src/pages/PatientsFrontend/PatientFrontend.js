import React, { useEffect } from "react";
import MicroFrontend from "../../MicroFrontend";

import { createBrowserHistory } from "history";
// import Layout from "../../components/Layouts/Layout/Layout";
// import { isEmpty } from "lodash";
// import { useNavigate } from "react-router-dom";
const defaultHistory = createBrowserHistory();

const PatientFrontend = () => {
  const { REACT_APP_PATIENT_HOST: PatientHost } = process.env;
  // let navigate = useNavigate();

  function PatientModule({ history }) {
    return <MicroFrontend history={history} host={PatientHost} name="patient" />;
  }

  // useEffect(() => {
  //   if (isEmpty(localStorage.getItem("user"))) {
  //     navigate("/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [localStorage.getItem("user")]);

  return (
    <>
      <div id="patient">
        <div>
          <PatientModule history={defaultHistory} />
        </div>
      </div>
    </>
  );
};

export default PatientFrontend;
