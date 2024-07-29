import { Component } from "react";
import { ButtonGroup, Row } from "react-bootstrap";

export default class ThongKe extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <Row>
            <div>
                <div className="header pt-3 pb-2 d-flex">
                    <div className="ps-3">
                        <h5>
                        <b>Thống kê</b>
                        </h5>
                    </div>
                    <div>
                        <ButtonGroup>
                        <button type="button" className="border-0 btn">
                            <i className="fa-solid fa-ellipsis"></i>
                        </button>
                        <button type="button" className="border-0 btn">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="mt-3 col-md-6 ms-3">
                    <ul className="nav">
                    <li className="pt-3"><a href="#"><i className="fa-solid fa-ellipsis"></i>&nbsp; Tất cả các phiếu</a></li>
                    <li className="pt-3"><a href="#"><i className="fa-solid fa-ellipsis"></i>&nbsp; Phiếu đã tạo</a></li>
                    <li className="pt-3"><a href="#"><i className="fa-solid fa-ellipsis"></i>&nbsp; Phiếu cần xử lý</a></li>
                    <li className="pt-3"><a href="#"><i className="fa-solid fa-ellipsis"></i>&nbsp; Phiếu đã xử lý</a></li>
                    <li className="pt-3"><a href="#"><i className="fa-solid fa-ellipsis"></i>&nbsp; Báo cáo</a></li>
                    <li className="pt-3"><a href="#"><i className="fa-solid fa-ellipsis"></i>&nbsp; Báo cáo sale</a></li>
                    </ul>
                </div>
            </div>
        </Row>
        );
    }
}