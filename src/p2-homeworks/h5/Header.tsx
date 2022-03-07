import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";
import s from './HW5.module.css'

// const showLinks = () => {
//     let links = document.getElementsByClassName('link');
//
// }

function Header() {
    return (
        <div className={s.links}>
            <NavLink to={PATH.LINKS} className={s.alllink} style={(params) => {
                return {color: params.isActive ? 'hotpink' : "black"}
            }}
            >ALL Links:</NavLink>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} style={(params) => {
                return {color: params.isActive ? 'hotpink' : "black"}
            }}
            >pre junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} style={(params) => {
                return {color: params.isActive ? 'hotpink' : "black"}
            }}
            > junior</NavLink>
            <NavLink to={PATH.JUNIORPLUS} className={s.link} style={(params) => {
                return {color: params.isActive ? 'hotpink' : "black"}
            }}
            > junior-plus</NavLink>

        </div>
    )
}

export default Header
