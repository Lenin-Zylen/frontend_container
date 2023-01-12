import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const VerticalLayout = (props) => {
  const [isPreloader, setIsPreloader] = useState(false);
  const [leftSideBarType, setLeftSideBarType] = useState("default");

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const refreshPreloader = () => {
    setIsPreloader(true);
    setTimeout(() => {
      setIsPreloader(false);
    }, 300);
  };

  const toggleMenuCallback = () => {
    if (leftSideBarType === "default") {
      //   dispatch(changeSidebarType("condensed", isMobile));
    } else if (leftSideBarType === "condensed") {
      //   dispatch(changeSidebarType("default", isMobile));
    }
  };

  useEffect(() => {
    refreshPreloader();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    //init body click event fot toggle rightbar
    // document.body.addEventListener("click", hideRightbar, true);

    if (isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  }, [isPreloader]);

  return (
    <>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header toggleMenuCallback={toggleMenuCallback} />
        <div className="main-content">{props.children}</div>
        <Sidebar type={leftSideBarType} theme={"dark"} isMobile={isMobile} />
        <Footer />
      </div>
    </>
  );
};

export default VerticalLayout;
