export const setActiveTab = (tab) => {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_TAB",
            payload: tab
        })
    }
}