import { validationFun } from './supportUtility';
import { noBookImage } from '../../../assets/noBookImage.png';
export function reducerLogger(previousState, action, finalState, ReducerName) {
    let executedActions = [];
    executedActions = [
        { "Reducer": ReducerName },
        { "PreviousState": previousState },
        { "Action": action.type },
        { "CurrentActionData": action.data },
        { "ModifiedState": finalState },
    ]
    console.log("Reducer Name ===", ReducerName, "==Action==", action.type, "====>", executedActions);
}

export const isEmpty = (value) => {
    if (typeof value == 'undefined' || value == null) {
        return true;
    }
    else if (typeof value === "object") {
        if (Array.isArray(value)) {
            return value.length > 0 ? false : true;
        } else {
            return Object.keys(value).length > 0 ? false : true;
        }
    }
    else if (typeof value == "string") {
        return value.length > 0 ? false : true;
    }
    else if (typeof value == 'function') {
        return false;
    }
    return false;
}


export const validateField = (elem, errorConstraints = [], constraints = {}) => {
    const response = {};
    let error;
    try {
        if (isEmpty(elem) || isEmpty(errorConstraints))
            throw new Error('Not sufficient data for validation');

        const { minLength, maxLength } = constraints;
        errorConstraints.map((errorField, index) => {
            switch (errorField) {
                case 'required':
                    error = validationFun.required(elem.value);
                    break;
                case 'onlyNumber':
                    error = validationFun.onlyNumber(elem.value);
                    break;
                case 'onlyAlphabets':
                    error = validationFun.onlyAlphabets(elem.value);
                    break;
                case 'minLength':
                    error = validationFun.minLength(elem.value, minLength);
                    break;
                case 'maxLength':
                    error = validationFun.maxLength(elem.value, maxLength);
                    break;
                case 'validateEmail':
                    error = validationFun.validateEmail(elem.value);
                    break;

            }
            if (error !== true) {
                response[elem.name] = error;
            }
        })
        return response;
    } catch (exception) {
        console.log("Error ==>", exception);
    }


}

export const customValidator = (props : Object, requiredField : Array) => {
    let status = true;
    try {
        if(isEmpty(props) || isEmpty(requiredField)){
            throw new Error("Required Field not Present");
        }
        
        Object.keys(props).map((field) => {
            if (requiredField.includes(field)) {
                return isEmpty(props[field]) ? false : true;
            }
        })

        return status;
    } catch (exception) {
        console.error(exception);
    }


}



export const noBookImageUrl = noBookImage;

