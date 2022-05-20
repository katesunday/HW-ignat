import React from 'react'
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";
import HW12 from "../../h12/HW12";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {ThemeType} from "../../h12/bll/themeReducer";
import s from "../../h12/HW12.module.css";

function JuniorPlus() {
    const theme = useSelector<AppStoreType , ThemeType>(state => state.theme)
    return (
        <div className={s[theme.color]}>
            Homeworks from 10...
            <HW12/>
            <HW10/>
            <HW11/>


        </div>
    )
}

export default JuniorPlus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз