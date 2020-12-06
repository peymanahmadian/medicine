debugger;
const ServerUrl=process.env.REACT_APP_SERVER_URL;
export const User={
    Authenticate:`${ServerUrl}/User/Authenticate`,
    GetUser:`${ServerUrl}/User/GetUser`
}