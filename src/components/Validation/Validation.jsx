import React, { useEffect, useState } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import Card from "../Artwork/Card/Card";
import { BsCheck2Square } from "react-icons/bs";
import { alaivoGet, alaivoPut } from "../../utils/Alaivo";
import "./style.sass";
import { AnimatePresence } from "framer-motion";
import { useMyNotifs } from "../../utilsComponents/Notif/useNotifs";

const Validation = () => {
  const { expo, loading, getExpo, setExpo } = useGetData();
  const { addNotifs, notifs } = useMyNotifs();

  const validate = async (id) => {
    let res = await alaivoPut("apollo/art/oeuvres/validation", JSON.stringify({ id: id }), null, true);
    addNotifs("ok", "Artwork validate");
    let neww = expo.filter((exp) => exp.id !== id);
    setExpo(neww);
    console.log(res);
  };

  return (
    <ContentContainer>
      {notifs.map((notif) => notif)}
      <div className="inner">
        <div className="validation_container">
          <div className="title_validation">
            Artworks <span> ( waiting for validation ) </span>{" "}
          </div>
          <div className="list_cards">
            <AnimatePresence>
              {loading
                ? [...Array(14).keys()].map((card, key) => <Card {...card} key={key} icon={<BsCheck2Square className="go_to_icon" />} loading={loading} onClick={() => {}} />)
                : expo.map((card, key) => (
                    <Card
                      {...card}
                      key={card.id}
                      icon={<BsCheck2Square className="go_to_icon" />}
                      loading={loading}
                      onClick={() => {
                        validate(card.id);
                      }}
                    />
                  ))}
            </AnimatePresence>
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
    let res = await alaivoGet("apollo/art/oeuvres/nonValide", null, true);
    console.log(res);
    res = res.data.map((row) => ({
      ...row,
      date: (row.date ? row.date.replace("/-/g", "/") : "") + " " + row.descriptionIA,
      picture: row.photo[0],
      title: row.auteur.nom + " - " + row.titre,
      category: row.type.nom,
    }));
    setLoading(false);
    setExpo(res);
  };

  return { expo, loading, getExpo, setExpo };
};

export default Validation;
