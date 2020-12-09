//header
import LocalStorage from "./localStorage";
export const TokenName=process.env.REACT_APP_TOKEN_NAME;
const HttpHeader=(hasToken)=>{
    if(hasToken){
        let value=LocalStorage.getValue(TokenName);
        if(value){
            return{
                headers: {
                    "Content-Type":"application/json",
                    "Authorization":value
                }
            }
        }
    }else{
        return {
            headers:{
                "Content-Type":"application/json"
            }
        }
    }
}
export default HttpHeader;