import {Row,Col} from "antd";
import {InfoCircleOutlined,PhoneOutlined} from "@ant-design/icons";
import "./doctorDetails.scss";
import {useSelector} from "react-redux";
const DoctorDetails=(props)=>{
    const model=useSelector(state=>state.DoctorReducer);
    return(
        <div>
            <div className={"home"}>
                <Row justify={"center"}>
                    <Col xs={24} sm={24} md={18} className={"doctorDetails"}>
                        <Row justify={"center"}>
                            <Col xs={24}>
                                <Row>
                                    <Col xs={24} md={24} className={"profile"}>
                                        <div className={"background"} style={{backgroundImage:`url('data:image/jpeg;base64,${model.Pic}')`}} />
                                        <div className={"name"}>
                                            <div className={"fullName"}>{model.FullName}</div>
                                            <div className={"titleJob"}>{model.Title}</div>
                                        </div>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={12} className={"about"}>
                                        <div className={"head"}><InfoCircleOutlined />  درباره پزشک  </div>
                                        <div className={"note"}>
                                            <div>{model.Note}</div>
                                        </div>
                                    </Col>
                                    <Col xs={24} md={12} className={"prices"}>
                                        <div className={"item"}>
                                            <span className={"logo"}>
                                                <PhoneOutlined className={"icon"}/>
                                                <span>  مشاوره تلفنی  </span>
                                            </span>
                                            <span className={"price"}>{model.AmountTel} تومان </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={24} md={24} className={"about"}>
                                        <div className={"head"}><InfoCircleOutlined />  زمان های پاسخگویی  </div>
                                        <div className={"week"}>
                                            <div className="day">
                                                <div className="nameDay">شنبه</div>
                                                <div className="hr">ساعت 8 الی 16</div>
                                            </div>
                                            <div className="day">
                                                <div className="nameDay">یکشنبه</div>
                                                <div className="hr">ساعت 8 الی 16</div>
                                            </div>
                                            <div className="day">
                                                <div className="nameDay">دوشنبه</div>
                                                <div className="hr">ساعت 8 الی 16</div>
                                            </div>
                                            <div className="day">
                                                <div className="nameDay">سه شنبه</div>
                                                <div className="hr">ساعت 8 الی 16</div>
                                            </div>
                                            <div className="day">
                                                <div className="nameDay">جهارشنبه</div>
                                                <div className="hr">ساعت 8 الی 16</div>
                                            </div>
                                            <div className="day">
                                                <div className="nameDay">پنج شنبه</div>
                                                <div className="hr">ساعت 8 الی 16</div>
                                            </div>
                                            <div className="day">
                                                <div className="nameDay">جمعه</div>
                                                <div className="hr">ساعت 8 الی 16</div>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default DoctorDetails;