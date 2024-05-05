import React from "react";
import { motion } from "framer-motion";
import { variantItem, variantContainerStag } from "../Variants";
import CheckIcon from "../../assets/icons/CheckIcon";
import CrossIcon from "../../assets/icons/CrossIcon";
import "./Table.sass";

const isBooleanString = (str) => {
  const lowerCaseStr = (str + "").toLowerCase();
  return lowerCaseStr === "true" || lowerCaseStr === "false";
};

const Table = ({ headerOn, body = [], index = [], titles = [], classes = [] }) => {
  return (
    <div className="table_container">
      {headerOn && (
        <>
          <div className="header_container">
            <div className="title">{headerOn.title} </div>
          </div>
          <div className="under_container">{headerOn.under_component}</div>
        </>
      )}
      <div className="table_container_">
        <motion.table variants={variantContainerStag} initial={"hidden"} animate={"visible"}>
          <thead>
            <tr>
              {titles.map((title, i) => (
                <th className="head_th" key={i}>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          {body.map((row, i) => {
            const column = index.map((ind, ind__) => {
              let value = row;
              if (Array.isArray(ind)) {
                for (let i = 0; i < ind.length; i++) {
                  value = value[ind[i]];
                }
              } else value = value[ind];

              return (
                <td key={ind__} className={classes[ind__]}>
                  {isBooleanString(value) ? BooleanMark(value) : value}
                </td>
              );
            });

            return (
              <tbody key={i}>
                <motion.tr
                  className={`tab_row ${(2 + i) % 2 === 0 ? "one" : "two"}`}
                  variants={variantItem}
                  transition={"transition"}
                >
                  {column}
                </motion.tr>
              </tbody>
            );
          })}
        </motion.table>
      </div>
    </div>
  );
};

export const dataDefault = {
  headerOn: { title: "Active users ", under_component: "" },
  titles: ["Name", "Email", "Total downloads", "Available", "Hehe :3 "],
  index: [0, 1, 2, 3, ["test", "po"]],
  body: [
    { 0: "Lorem ing elit.", 1: "Lorem ing elit.", 2: "true", 3: "Lorem ing elit.", test: { po: "mety" } },
    { 0: "Lorem ing elit.", 1: "Lorem ing elit.", 2: "false", 3: "Lorem ing elit.", test: { po: "mety ds" } },
    { 0: "Lorem ing elit.", 1: "Lorem ing elit.", 2: "false", 3: "Lorem ing elit.", test: { po: "mety" } },
    { 0: "Lorem ing elit.", 1: "Lorem ing elit.", 2: "true", 3: "Lorem ing elit.", test: { po: "mety" } },
  ],
};

const BooleanMark = (value) => {
  return (
    <>
      {value + "" === "true" ? (
        <>
          <div className="icon_row_table checked">
            <CheckIcon />
          </div>
        </>
      ) : (
        <>
          <div className="icon_row_table unchecked">
            <CrossIcon />
          </div>
        </>
      )}
    </>
  );
};

export default Table;
