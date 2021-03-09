import {UserActionType} from "../models/actionTypes";
export const setLogin=(param)=>({type:UserActionType.SetLogin,param});
export const getUser=(param)=>({type:UserActionType.GetUser,param});
export const setUser=(param)=>({type:UserActionType.SetUser,param});
export const authentication=(param)=>({type:UserActionType.Authentication,param});
export const sendSMS=(param)=>({type:UserActionType.SendSMS,param})
