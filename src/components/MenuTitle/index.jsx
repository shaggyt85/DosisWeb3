import React from "react";
import './menutitle.css'

const MenuTitle = () => {
  return (
    <>
      <div className="menu__box">
        <ul className="menu__list">
          <li className="li__list">Inicio</li>
          <li className="li__list">¿Quienes Somos?</li>
          <li className="li__list">¿Qué hacemos?</li>
          <li className="li__list">Comunidad</li>
        </ul>
      </div>
    </>
  );
};

export { MenuTitle };
