import {DoctorActionType} from "../models/actionTypes";
// let Model={
//     address:null,
//     AmountTel:null,
//     AmountText:null,
//     AmountVideo:null,
//     FatherName:null,
//     FirstName:null,
//     FullName:null,
//     LastName:null,
//     Note:null,
//     Pic:null,
//     MasterServiceName:null,
//     Title:null
// }
const DoctorReducer=(state=null,action)=>{
    switch (action.type) {
        case DoctorActionType.SetInformation:
            return{
                ...action.param
            }
        default:
            return{
                ...state
            }
    }
}
export default DoctorReducer;