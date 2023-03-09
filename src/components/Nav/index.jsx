import React, { useState } from "react";
import { LogoNav } from "@components/LogoNav";
import { MenuTitle } from "../MenuTitle";
import "./Nav.css";
import { MenuMovil } from "../MenuMovil";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className="Nav">
        <LogoNav setIsActive={setIsActive} />
        <div className="remove__tittle">
        <MenuTitle />
        </div>
        <div className="remove__nav">
        <MenuMovil  setIsActive={setIsActive} isActive={isActive} />
        </div>
      </nav>
    </>
  );
};

export { Nav };
