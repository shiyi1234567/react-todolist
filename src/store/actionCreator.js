import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, INIT_LIST_VALUE } from './actionType'
import axios from 'axios'
export const getInputChangeAction = ((value) => ({
    type: CHANGE_INPUT_VALUE,
    value
}));

export const getListChangeAction = ((value) => ({
    type: CHANGE_LIST_VALUE,
    value
}));

export const getInitListValue = () => {
    return ((dispatch) => {
        /*axios.get('/api/js').then((res) => {
            alert('ok');
        }).catch((err) => {
            alert('err');
        })*/
        setTimeout(function () {
            const data = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];
            const action = {
                type: INIT_LIST_VALUE,
                value: data
            }
            dispatch(action)
        }, 500)
    })
}