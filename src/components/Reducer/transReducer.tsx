
export const transReducer =(state:any,action:any)=>{
    switch (action.type) {
    case"Add_Transaction":
        return [...state,action.payload]
        
        default:
            return state
            
    }
}