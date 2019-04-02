import { FIRST_INPUT, SECOND_INPUT, ERASE, ADD, MINUS, MULTIPLY, DIVIDE } from '../actions/types'

//Text Inputs
export const firstNumber =(num) =>{
    return {
        type: FIRST_INPUT,
        payload: num
    }
}

export const secondNumber =(num) =>{
    return {
        type: SECOND_INPUT,
        payload: num
    }
}

export const clear =(firstInput, secondInput) =>{
    return {
        type: ERASE,
        payload: ['', '']
    }
}

//Operations
export const sum =(firstInput, secondInput) =>{
    return {
        type: ADD,
        payload: [firstInput, secondInput]
    }
}

export const diff =(firstInput, secondInput) =>{
    return {
        type: MINUS,
        payload: [firstInput, secondInput]
    }
}

export const prod =(firstInput, secondInput) =>{
    return {
        type: MULTIPLY,
        payload: [firstInput, secondInput]
    }
}

export const quo =(firstInput, secondInput) =>{
    return {
        type: DIVIDE,
        payload: [firstInput, secondInput]
    }
}
