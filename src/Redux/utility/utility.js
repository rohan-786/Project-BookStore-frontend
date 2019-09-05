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

