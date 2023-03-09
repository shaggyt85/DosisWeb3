import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import './menumovil.css'

const MenuMovil = ({ setIsActive, isActive }) => {
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.5 }}
        onClick={() => setIsActive(!isActive)}
      >
        <IoMenu className="IoMenu"/>
      </motion.div>
      <AnimatePresence initial={false}>
        {isActive && (
          <div>
          <motion.div
            animate={{ opacity: 1, scale: 1.2 }}
            initial={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="nav__mobil"
          >
            <div className="movil__tittle__box">
              <a href="" onClick={() => setIsActive(false)}>
                <p>Home</p>
              </a>
            </div>
            <div className="movil__tittle__box">
              <a href="" onClick={() => setIsActive(false)}>
                <p>¿Quienes Somos?</p>
              </a>
            </div>
            <div className="movil__tittle__box">
              <a href="" onClick={() => setIsActive(false)}>
                <p>¿Qué hacemos?</p>
              </a>
            </div>
            <div className="movil__tittle__box">
              <a href="" onClick={() => setIsActive(false)}>
                <p>Comunidad</p>
              </a>
            </div>
          </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export { MenuMovil };
