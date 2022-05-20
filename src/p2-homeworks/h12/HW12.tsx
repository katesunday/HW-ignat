import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch , useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC , ThemeType} from "./bll/themeReducer";

const themes = ['none' , 'dark' , 'red' , 'some'];

function HW12() {
    const theme = useSelector<AppStoreType , ThemeType>(state => state.theme)
    const dispatch = useDispatch()
    const onChangeCallback = (color: string) => {
        dispatch(changeThemeC(color))
    }

    return (
        <div className={s[theme.color]}>
            <hr/>
            <span className={s[theme.color + '-text']}>
                homeworks 12 <br/> Choose your color theme
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
            {/*or SuperRadio*!/*/}

            <hr/>
        </div>
    );
}

export default HW12;
