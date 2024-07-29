import { Component, Fragment } from "react";
import { ButtonGroup, Col, Container, Row } from "react-bootstrap";
import "./thongbao.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ThongBao extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <Row>
            <div>
                <div className="header pt-3 pb-2 d-flex">
                    <div className="ps-3">
                        <h5>
                        <b>Thông báo</b>
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
