import { FIRST_INPUT, SECOND_INPUT, ADD, ERASE, MULTIPLY, DIVIDE, MINUS } from '../actions/types'

const initialState = {
    firstInput: '',
    secondInput: '',
    result: 0
}
export default (state=initialState, action) => {
    switch (action.type) {
        case FIRST_INPUT:
            return {...state, firstInput: action.payload}
        case SECOND_INPUT:
            return {...state, secondInput: action.payload}
        case ADD:
            return {...state, result: parseInt(action.payload[0])+parseInt(action.payload[1])}
        case MINUS:
            return {...state, result: parseInt(action.payload[0])-parseInt(action.payload[1])}
        case MULTIPLY:
            return {...state, result: parseInt(action.payload[0])*parseInt(action.payload[1])}
        case DIVIDE:
            return {...state, result: parseInt(action.payload[0])/parseInt(action.payload[1])}
        case ERASE:
            return {...state, result: ['','']}
        default:
            return state;
    }
}