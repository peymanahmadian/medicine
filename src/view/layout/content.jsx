import {Col, Layout, Row} from "antd";
import Error from "../error/error";
const Context=(props)=>{
    return(
        <Layout.Content>
            <Row justify="center">
                <Col xs={20} className={"content"}>
                    <Error/>
                </Col>
            </Row>
        </Layout.Content>
    )
}
export default Context;
