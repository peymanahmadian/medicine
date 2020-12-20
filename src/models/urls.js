const ServerUrl=process.env.REACT_APP_SERVER_URL;
export const User={
    Authenticate:`${ServerUrl}/User/Authenticate`,
    GetUser:`${ServerUrl}/User/GetUser`
}
export const Visual={
    GetMasterServiceGroup:`${ServerUrl}/Medicine/GetMasterServiceGroup`,
    GetMasterService:`${ServerUrl}/Medicine/GetMasterService`,
    GetMasterServiceItem:`${ServerUrl}/Medicine/GetMasterServiceItem`,
    GetPractitioner:`${ServerUrl}/Medicine/GetPractitioner`
}