import React , {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState , saveState} from './localStorage/localStorage'
import s from '../h6/common/c4-SuperEditableSpan/SuperEditableSpan.module.css';

function HW6() {
    const [value , setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value' , value)
    }
    const restore = () => {
        let valueFromLS = localStorage.getItem('editable-span-value') || ''
        setValue(JSON.parse(valueFromLS))
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={s.spanDiv}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : ' click here to enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
