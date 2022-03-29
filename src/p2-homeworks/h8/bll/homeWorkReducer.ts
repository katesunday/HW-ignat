import {UserType} from "../HW8";

export type ActionType = {
    type: string
    payload: string | number
}
export const homeWorkReducer = (state: Array<UserType> , action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            console.log(state.sort((a , b) => a.age - b.age))
            return action.payload === 'up' ?
                [...state].sort((a , b) => a.age - b.age)
                : [...state].sort((a , b) => b.age - a.age)

        }
        case 'check': {
            console.log(state.filter((el) => el.age >= 18).sort((a , b) => a.age - b.age))
            return action.payload === 18 ?
                state.filter((el) => el.age >= 18).sort((a , b) => a.age - b.age)
                : state
        }
        default:
            return state
    }
}
