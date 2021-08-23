import React from 'react';
import {NavLink} from 'react-router-dom';
import DownloadLink from "react-download-link"
import Style from '../Navbar.module.scss';
import Toggler from "./Toggler";
import classNames from 'classnames';
import {info} from './Info';

export default function Navbar({darkMode, handleClick}) {


    return (
        <nav>
            <ul className={classNames(Style.navList, darkMode ? Style.dark : null)}>
                <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
                <li><NavLink exact activeClassName="current" to='/about'>About Me</NavLink></li>
                <li><NavLink exact activeClassName="none" to='/'><span className={Style.logo}>{info.initials}</span></NavLink></li>
                <li><NavLink exact activeClassName="current" to='/portfolio'>Portfolio</NavLink></li>
                <li><DownloadLink filename='James+Antley+Resume.pdf' label="Resume" exportFile={() => "My cached data"} target='_blank' style={{textDecoration: 'none'}}>Resume</DownloadLink></li>
                <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </ul>
        </nav>
    )
}