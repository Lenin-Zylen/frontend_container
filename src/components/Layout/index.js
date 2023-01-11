import React from "react";

const Layout = (props) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Header</h1>
      {props.children}
      <h3 style={{ color: "yellow" }}>Header</h3>
    </div>
  );
};

export default Layout;
