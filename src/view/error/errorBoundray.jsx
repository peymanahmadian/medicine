import React from "react";
import Error from "./error";
export default class ErrorBoundary extends React.Component{
    state={
        error:null,
        errorInfo:null
    }
    componentDidCatch(error,errorInfo){
        this.setState({
            error:error,
            errorInfo:errorInfo
        })
    }
    render(){
        if(this.state.errorInfo){
            return <Error/>
        }else{
            return this.props.children;
        }
    }
}