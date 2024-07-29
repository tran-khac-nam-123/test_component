import { Component } from "react";
import { ButtonGroup, Row } from "react-bootstrap";

export default class CuaToi extends Component{
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
                        <b>Của tôi</b>
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
                <div className="mt-3 col-6 ms-3">
                    <ul className="nav">
                        <li className="pt-3"><a href="#"><i className="fa-solid fa-ellipsis"></i>&nbsp; Profile cá nhân</a></li>
                        <li className="pt-3"><a href="#"><i className="fa-solid fa-ellipsis"></i>&nbsp; Văn bản ban hành</a></li>
                        <li className="pt-3"><a href="#"><i className="fa-solid fa-ellipsis"></i>&nbsp; Danh sách tin tức</a></li>
                    </ul>
                </div>
            </div>
        </Row>
        );
    }
}