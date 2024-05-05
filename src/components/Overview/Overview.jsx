import React, { useEffect, useState } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import Card from "../Artwork/Card/Card";
import { GoArrowUpRight } from "react-icons/go";
import { alaivoGet } from "../../utils/Alaivo";
import "./style.sass";

const Overview = () => {
  const { expo, loading } = useGetData();
  return (
    <ContentContainer>
      <div className="inner">
        <div className="validation_container">
          <div className="title_validation">Artworks</div>
          <div className="list_cards">
            {loading
              ? [...Array(14).keys()].map((card, key) => <Card {...card} key={key} icon={<GoArrowUpRight className="go_to_icon" />} loading={loading} onClick={() => {}} />)
              : expo.map((card, key) => <Card {...card} key={key} icon={<GoArrowUpRight className="go_to_icon" />} loading={loading} onClick={() => {}} />)}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

const useGetData = () => {
  const [expo, setExpo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExpo();
  }, []);

  const getExpo = async () => {
    setLoading(true);
    let res = await alaivoGet("apollo/art/expo", null, true);
    console.log(res);
    res = res.data.map((row) => ({
      date: row.date ? row.date.replace("/-/g", "/") : "Unknow",
      picture: row.photo,
      title: row.nom,
      category: row.sujetExpo.theme,
    }));
    setLoading(false);
    setExpo(res);
  };

  return { expo, loading };
};

export default Overview;
