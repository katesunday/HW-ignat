const initState = {
    color: 'none'
};
export type ThemeType = typeof initState

export const themeReducer = (state = initState , action: changeThemeCType): ThemeType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state , color: action.color
            }
        }
        default:
            return state;
    }
};
type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (color: string) => {
    return {
        type: 'CHANGE-THEME' ,
        color: color
    } as const
}