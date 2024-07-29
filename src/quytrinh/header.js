import { Component } from "react";
import './header.css';

export default class HeaDer extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedRequest: this.props.selectedRequest,
        };
    }

    render(){
        const {selectedRequest} = this.props;
        return(
            <div style={{width:"1000px"}} className="row ms-0 me-0">
                <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="">
                        <ul style={{fontSize: "10px"}} className="nav justify-content-center">
                            <li className="pe-2"><i className="fa-solid fa-circle text-success"></i> &nbsp;Hoàn thành</li>
                            <li className="pe-2"><i className="fa-solid fa-circle text-warning"></i> &nbsp;Đang xử lý</li>
                            <li className="pe-2"><i className="fa-solid fa-circle text-primary"></i> &nbsp;Chuyển bước</li>
                            <li className="pe-2"><i className="fa-solid fa-circle text-danger"></i> &nbsp;Từ chối</li>
                            <li className="pe-2"><i className="fa-solid fa-circle text-info"></i> &nbsp;Lưu</li>
                            <li className="pe-2"><i className="fa-solid fa-circle text-secondary"></i> &nbsp;Chưa đến</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-center mt-3">Luồng trạng thái</h5>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex">
                                <div>
                                    <div className="triangle-first text-center text-light pt-2">Người yêu cầu {selectedRequest}</div>
                                </div>
                                <div className="block col-md-4">
                                    <div className="triangle-a"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex">
                                <div>
                                    <div className="triangle-second text-center text-light pt-2">TBP</div>
                                </div>
                                <div className="block col-md-4">
                                    <div className="triangle-b"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex">
                                <div>
                                    <div className="triangle-third text-center text-light pt-2">HCNS</div>
                                </div>
                                <div className="block col-md-4">
                                    <div className="triangle-c"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}