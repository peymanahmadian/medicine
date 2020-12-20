import {VisualActionType} from "../models/actionTypes";
let Model={
    loading:false
}
const Visual=(state=Model,action)=>{
    switch (action.type) {
        case VisualActionType.toggleLoading:
            return{
                ...state,
                loading: action.param
            }
        default:
            return{
                ...state
            }
    }
}
export default Visual;