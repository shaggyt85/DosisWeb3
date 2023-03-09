import React from 'react'
import logo from '@logos/DW3.png'
import "./logonav.css"

const LogoNav = ({setIsActive}) => {
  return (
    <>
    <div className='logo__Nav'>
    <img className='img__logo' src={logo} alt="logo"  onClick={() => setIsActive(false)}/>
    <h2 className='tittle__img'>Web 3</h2>
    </div>
    </>
  )
}

export {LogoNav}