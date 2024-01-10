import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiSolidHomeHeart } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import LOGO from "./Free_Sample_By_Wix (1).jpg"

const Navbar = () => {
  return (
    <>
        <nav className='navContainer'>
            <aside className='logoblock'>
                <img src={LOGO} alt="" height="60px" width="70px"/>
            </aside>
            <aside className='listblock'>
                 <ul>
                    <NavLink to="/">
                        <li>
                            <span>HOME</span>
                            <span>
                                <BiSolidHomeHeart/>
                            </span>
                            </li>
                    </NavLink>
                    <NavLink to="/viewall">
                        <li>
                            <span>VIEW-ALL</span>
                            <span>
                                <GrFormView/>
                            </span>
                        </li>
                        
                    </NavLink>
                 </ul>
            </aside>
        </nav>
    </>
  )
}

export default Navbar