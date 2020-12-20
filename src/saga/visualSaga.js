import {takeEvery,call,put} from "redux-saga/effects";
//import Actions type
import {VisualActionType} from "./../models/actionTypes";
//import Actions
import {setMainItems} from "./../actions/visualAction";
//import Services
import VisualService from "../services/visualService";
//flow function
function* getMainItemsFN(){
    const result=yield call(VisualService.getMainMenu);
    if(!result.isAxiosError && result.status===200){
        let dataCash=[];
        result.data.forEach(item=>{
            let cash={name:item.MasterServiceGroupName,image:`url('data:image/jpeg;base64,${item.Pic}')`};
            dataCash.push(cash);
        });
        yield put(setMainItems(dataCash));
    }else{
        //@todo create show alert
    }

}
function* getSubMainItemsFN(action){
}
//set action monitor
export function* getMainItems() {
    yield takeEvery(VisualActionType.GetMainMenu,getMainItemsFN);
}
export function* getSubMainItems(){
    yield takeEvery(VisualActionType.GetSubMainMenu,getSubMainItemsFN);
}