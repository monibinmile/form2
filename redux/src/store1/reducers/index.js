// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
const initialState = 0;
const changeValue = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT": return state+1;
        case "DECREMENT": return state-1;
        default: return state

    }
}
export default changeValue