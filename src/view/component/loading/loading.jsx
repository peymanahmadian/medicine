import "./loading.scss";
import LoadingImg from "../../../assets/images/loading.svg";
const Loading=(props)=>{
    return(
        <div className={"loading"}>
            <div className={"focus"}>
                <img src={LoadingImg} alt={"در حال بارگذاری"} />
                <div className={"subtitle"}>{props.text}</div>
            </div>

        </div>
    )
}
export default Loading;