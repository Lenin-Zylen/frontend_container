import React, { useEffect } from "react";
import MicroFrontend from "../../MicroFrontend";

import { createBrowserHistory } from "history";
// import Layout from "../../components/Layouts/Layout/Layout";
import Layout from "../../components/Layout";
import VerticalLayout from "../../components/VerticalLayout";
// import { isEmpty } from "lodash";
// import { useNavigate } from "react-router-dom";
const defaultHistory = createBrowserHistory();

const AppointmentFrontend = () => {
  const { REACT_APP_APPOINTMENT_HOST: appointmentHost } = process.env;
  // let navigate = useNavigate();

  function AppointmentModule({ history }) {
    return (
      <MicroFrontend
        history={history}
        host={appointmentHost}
        name="appointment"
      />
    );
  }

  // useEffect(() => {
  //   if (isEmpty(localStorage.getItem("user"))) {
  //     navigate("/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [localStorage.getItem("user")]);

  return (
    <>
      <VerticalLayout>
        <div className="page-content">
          <div id="appointment">
            <AppointmentModule history={defaultHistory} />
          </div>
        </div>
      </VerticalLayout>
    </>
  );
};

export default AppointmentFrontend;
