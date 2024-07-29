import { Component } from "react";
import { ButtonGroup, Row } from "react-bootstrap";

export default class BaCham extends Component{
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
                        <b>Bổ sung</b>
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
            </div>
        </Row>
        );
    }
}