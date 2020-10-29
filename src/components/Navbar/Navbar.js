import React, { Component } from 'react'
import{ MenuItems} from "./MenuItems"
import './Navbar.css'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { SidebarData } from '../Sidebar/SideMenu'



class Navbar extends Component{

    render(){
        return(
            <nav className="NavbarItems">
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars />
            </Link>
                <h1 className="navbar-logo">NewsLetter <i className="far fa-newspaper"></i></h1>
                <ul className="nav-menu">
                {MenuItems.map((item,index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                    
                </ul>
                <ul className="side-menu">
                    {SidebarData.map((item,index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.path}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar