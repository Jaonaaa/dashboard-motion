import React from "react";

const Row = ({ title, subtitle }) => {
  return (
    <div className="row_list">
      <div className="first"> {title}</div>
      <div className="second">{subtitle}</div>
    </div>
  );
};

export default Row;
