import React from "react";
import Say from "@image/Team/Say.jpg";
import Mafer from "@image/Team/mafer.png";
import Leo from "@image/Team/leo.jpg";
import CM from "@logos/Logo-DosisWeb3.png";

const GalleryTeam = () => {
  return (
    <>
      <div>
        <h2>Team</h2>
        <div>
          <img src={Say} alt="Say" />
          <p> Co-Founder, crypto entusiasta & community builder</p>
        </div>
        <div>
          <img src={Leo} alt="Leo" />
          <p>Co-Founder, entusiasta web3 & crypto, community builder & creadora de contenido</p>
        </div>
        <div>
          <img src={Mafer} alt="Mafer" />
          <p>Co-Founder, entusiasta web3 & coleccionista NFT ART</p>
        </div>
        <div>
          <img src={CM} alt="CM" />
          <p> Aprendiz y entusiasta Web3</p>
        </div>
      </div>
    </>
  );
};

export { GalleryTeam };
