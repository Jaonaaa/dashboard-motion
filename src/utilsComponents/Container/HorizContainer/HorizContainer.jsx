import React from "react";
import "./HorizContainer.sass";

const HorizContainer = ({ children, title, className }) => {
  console.log(title);
  return (
    <div className={`horiz_container ${className}`}>
      <div className="title_container" style={{ marginBottom: title === undefined ? 0 : "" }}>
        {" "}
        {title}
      </div>
      <div className="container_content">{children}</div>
    </div>
  );
};

export default HorizContainer;
