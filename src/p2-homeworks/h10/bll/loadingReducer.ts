import exp from "constants";

const initState = {
    isLoading: false
}
export type initStateType = typeof initState

export const loadingReducer = (state = initState , action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {
                ...state , isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}
export type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'SET-LOADING' ,
        isLoading: isLoading
    } as const
} // fix any