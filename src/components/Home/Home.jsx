import React from "react";
import { motion } from "framer-motion";
import { variantContainerStag } from "../../utilsComponents/Variants";
import ContentContainer from "../ContentContainer/ContentContainer";
import Graphs from "../Graphs/Graphs";
import "./Home.sass";

const Home = () => {
  return (
    <>
      <ContentContainer>
        <div className="inner">
          <motion.div variants={variantContainerStag} initial="hidden" animate="visible" className="container_home_main">
            <Graphs />
          </motion.div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;
