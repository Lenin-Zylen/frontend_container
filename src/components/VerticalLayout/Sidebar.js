import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import logoLightPng from "../../assets/images/logo-light.png";
import logoLightSvg from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.png";

import SidebarContent from "./SidebarContent";

const Sidebar = (props) => {
  return (
    <>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logo} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoDark} alt="" height="17" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logoLightSvg} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoLightPng} alt="" height="19" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {/* {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />} */}
          <SidebarContent />
        </div>
        <div className="sidebar-background"></div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

export default Sidebar;
