export function reducerLogger(previousState , action , finalState , ReducerName) {
    let executedActions = [];
    executedActions =[
        {"Reducer" : ReducerName},
        {"PreviousState" : previousState},
        {"Action" : action.type},
        {"CurrentActionData" : action.payload},
        {"ModifiedState" : finalState},
    ]
    console.log("Reducer Name ===",ReducerName,"====>",executedActions); 
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
    else if(typeof value == 'function') {
        return false;
    }
    return false;
}

