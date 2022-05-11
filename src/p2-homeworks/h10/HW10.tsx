import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import loader from '../../img/loader.svg'
import {useDispatch , useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType , loadingAC} from "./bll/loadingReducer";
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType , initStateType>(state => state.loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        console.log('loading...')
        setTimeout(() => dispatch(loadingAC(false)) , 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {loading.isLoading
                ? (
                    <div>крутилка...
                        <img className={s.loader} src={loader} alt="loader"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
