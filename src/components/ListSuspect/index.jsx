import React, { useEffect, useState } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import Loader from "../../utilsComponents/Hider/Loader/Loader";
import Row from "./Row";
import "./List.sass";
import { useLocation } from "react-router-dom";

const suspects = [
  {
    title: "Richard Bere",
    subtitle: "Member of the mafia in San Fransisco",
  },
  {
    title: "Michel Dan",
    subtitle: "Member of the mafia in San Fransisco",
  },
  {
    title: "Scofield Patterson",
    subtitle: "Mutiple homicide",
  },
];
const ListSuspect = ({ title, url }) => {
  const { expo, loading } = useGetData(url);

  return (
    <ContentContainer>
      <div className="inner">
        <div className="validation_container">
          <div className="title_validation"> {title}</div>
          <div className="list_cards">
            {loading && <Loader size="10rem" />}
            {!loading && suspects.map((k, i) => <Row {...k} key={i} />)}
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

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  return { expo, loading };
};

export default ListSuspect;
