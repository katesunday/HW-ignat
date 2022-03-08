import React , {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";
import s from './HW5.module.css'


function Header() {

    const [showNav , setShowNav] = useState(false)
    // изначально шоунав это фолс, а по клику меняем на тру
    return (
        <div className={s.links}>
            <div onClick={() => setShowNav(!showNav)}><NavLink to={"/"} className={s.alllink} style={(params) => {
                return {color: params.isActive ? 'hotpink' : "black"}
            }}
            >ALL Links:</NavLink></div>
            {showNav && <div className={s.HWlinks}><NavLink to={PATH.PRE_JUNIOR} className={s.link} style={(params) => {
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
                > junior-plus</NavLink></div>}


        </div>
    )
}

export default Header
