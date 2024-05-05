import React, { useEffect, useState } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import { alaivoGet } from "../../utils/Alaivo";
import Loader from "../../utilsComponents/Hider/Loader/Loader";
import Row from "./Row";
import { useLocation } from "react-router-dom";
import "./List.sass";

const List = ({ title, url }) => {
  const { expo, loading } = useGetData(url);

  return (
    <ContentContainer>
      <div className="inner">
        <div className="validation_container">
          <div className="title_validation"> {title}</div>
          <div className="list_cards">
            {loading && <Loader size="10rem" />}
            {!loading && expo.map((k, i) => <Row {...k} key={i} />)}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

const useGetData = (url) => {
  const loc = useLocation();
  const [expo, setExpo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExpo();
  }, [loc.pathname]);

  const getExpo = async () => {
    setLoading(true);
    let res = await alaivoGet(url, null, true);
    console.log(res);
    if (url === "agents")
      res = res.data.map((row) => ({
        title: row.nom,
        subtitle: row.nom,
      }));
    else if (url === "missions") {
      res = res.data.map((row) => ({
        title: row.titre + "  ",
        subtitle: row.description,
      }));
    }
    setLoading(false);
    setExpo(res);
  };

  return { expo, loading };
};

export default List;
