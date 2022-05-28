import React , {useState} from 'react';
import s from '../h4/common/c2-SuperButton/SuperButton.module.css'
import {RequestsApi} from "../../RequestsApi/RequestsApi";

const HW13 = () => {
    return (
        <Request/>
    );
};

const Request = () => {
    const [checked , setChecked] = useState(false)
    const requestHandler = () => {
        RequestsApi.postRequest(checked)
    }
    return (
        <div>
            <button onClick={requestHandler} className={s.default}>Send request</button>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
        </div>
    )
}

export default HW13;