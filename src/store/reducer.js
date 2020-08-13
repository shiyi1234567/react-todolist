import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE } from './actionType'
const defaultState = {
    inputValue: '',
    list: ['aaa', 'bbb', 'ccc']
};
//reducer 可以接收state  但是绝不能改变state
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }

    if (action.type === CHANGE_LIST_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        newState.inputValue = "";
        return newState
    }
    return state
}
