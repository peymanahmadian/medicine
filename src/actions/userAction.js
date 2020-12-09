import {UserActionType} from "../models/actionTypes";
export const getUser=(param)=>({type:UserActionType.GetUser,param});
export const setUser=(param)=>({type:UserActionType.SetUser,param});
export const authentication=(param)=>({type:UserActionType.Authentication,param});
