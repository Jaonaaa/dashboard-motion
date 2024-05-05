import React, { useEffect, useRef, useState } from "react";
import "./SubLink.sass";
import { Link } from "react-router-dom";
import { TriIcon } from "./Icon";

const SubLink = ({ position, links = [], setActiveLink }) => {
  const [topIcon, setTopIcon] = useState(0);
  const container = useRef(null);
  useEffect(() => {
    let { height } = container.current.getBoundingClientRect();
    let transYPercent = height * 0.1 * links.length;
    if (links.length > 0) transYPercent /= 2;
    setTopIcon(transYPercent);
  }, []);
  return (
    <div
      className="paper_nav"
      ref={container}
      style={{
        top: position.top + "px",
        left: position.to_Right + 25 + "px",
        transform: `translateY(-${(links.length > 0 ? links.length / 2 : 0) * 10}%)`,
      }}
    >
      <div
        className="icon_tri"
        style={{
          top: topIcon + "px",
        }}
      >
        <TriIcon />
      </div>
      <div className="container">
        {links.map((link, index) => (
          <LinkRow key={index} link={link} setActiveLink={setActiveLink} />
        ))}
      </div>
    </div>
  );
};

const LinkRow = ({ link, setActiveLink }) => {
  const [activeRow, setActiveRow] = useState(false);
  useEffect(() => {
    if (window.location.pathname == link.linkTo) {
      setActiveRow(true);
    }
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    setActiveLink(link.linkTo);
  };

  return (
    <>
      <div className={`row_sub_link ${activeRow ? "active_row" : ""}`} onClick={handleClick} linkto={link.linkTo}>
        <Link to={link.linkTo}>{link.label}</Link>
      </div>
    </>
  );
};

export default SubLink;
