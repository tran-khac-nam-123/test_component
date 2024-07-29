import { Component, Fragment } from "react";
import { Col, Container, ButtonGroup, Row, Dropdown } from "react-bootstrap";
import "./quytrinh.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThongTinChung from "./thongtinchung";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists/web";
import "@pnp/sp/items";
import "@pnp/sp/profiles";
import "@pnp/sp/site-users/web";
import "@pnp/sp/site-groups/web";
import workflowService from "../workflowService";

export default class QuyTrinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormLamThem: false,
      showFromXinNghi: false,
      selectedRequest: null,
      items: [],
      obj: {
        Title: "Tiêu đề",
        LyDo: "Lý do",
        LoaiXinNghi: "Loại xin nghỉ",
        ThoiGian: "Thời gian",
        TimeStart: "Thời gian bắt đầu",
        TimeEnd: "Thời gian kết thúc",
        TimeDiMuon: "Thời gian xin đi muộn/về sớm",
        TongNgayNghi: "Tổng ngày nghỉ",
        ThongBaoCho: "Thông báo cho",
        TruongBoPhan: "Trưởng bộ phận",
        NguoiPheDuyet: "Người phê duyệt",
        MoTa: "Mô tả",
        SoGioLam: "Số giờ làm việc",
        PhanLoaiLT: "Phân loại làm thêm",
        PhanTram: "Phần trăm",
      },
    };
  }

  // async componentDidMount() {
  //   const items = await workflowService.getItemToList('xin_nghi', "Title eq 'ot'")
  //   this.setState({ items : items });
  // }

  // toggleXinNghi = () => {
  //   workflowService.getItemToList('xin_nghi', "Title eq 'ot'").then((items) => {
  //     this.setState({ 
  //       items,
  //       showFromXinNghi: true,
  //       showFormLamThem: false,
  //     });
  //   });
  // };

  // toggleLamThem = () => {
  //   workflowService.getItemToList('xin_nghi', "Title eq 'xin nghỉ'").then((items) => {
  //     this.setState({ 
  //       items,
  //       showFromXinNghi: false,
  //       showFormLamThem: true,
  //     });
  //   });
  // };

  toggleRequest = (requestType) => {
    let text = '';

    if (requestType == 'lamthem') {
      text = "Title eq 'xin nghỉ'";
    } else if (requestType == 'xinnghi') {
      text = "Title eq 'ot'";
    }

    workflowService.getItemToList('xin_nghi', text).then((items) => {
      this.setState({ 
        items,
        selectedRequest: requestType
      });
    });
  };

  render() {
    const { obj, items, selectedRequest } = this.state;
    return (
      <div className="d-flex">
        <div className="abc shadow p-3 bg-body-tertiary rounded col-md-3">
          <div className="process pb-2 d-flex">
            <div className="ps-3">
              <h5>
                <b>Quy trình</b>
              </h5>
            </div>
            <div>
              <ButtonGroup>
                <button type="button" className="border-0 btn">
                  <i className="fa-solid fa-bars p-1"></i>
                </button>
                <button type="button" className="border-0 btn">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </ButtonGroup>
            </div>
          </div>
          <div className="mt-3 col-md-10 ms-3">
            <ul className="nav">
              <li className="pt-3">
                <a href="#YeuCauLamThemGio" onClick={()=>this.toggleRequest("lamthem")}>
                  <i className="fa-solid fa-ellipsis"></i>&nbsp; Yêu Cầu Làm
                  Thêm Giờ
                </a>
              </li>
              <li className="pt-3">
                <a href="#XinNghiPhep" onClick={()=>this.toggleRequest("xinnghi")}>
                  <i className="fa-solid fa-ellipsis"></i>&nbsp; Xin Nghỉ Phép
                </a>
              </li>
              <li className="pt-3">
                <a href="#">
                  <i className="fa-solid fa-ellipsis"></i>&nbsp; Đánh Giá Thử
                  Việc
                </a>
              </li>
              <li className="pt-3">
                <a href="#">
                  <i className="fa-solid fa-ellipsis"></i>&nbsp; Yêu cầu mua
                  hàng
                </a>
              </li>
              <li className="pt-3">
                <a href="#">
                  <i className="fa-solid fa-ellipsis"></i>&nbsp; Yêu cầu thanh
                  toán
                </a>
              </li>
              <li className="pt-3">
                <a href="#">
                  <i className="fa-solid fa-ellipsis"></i>&nbsp; Yêu Cầu Làm
                  Việc Ngoài Công Ty
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div>

        {selectedRequest && (
            <ThongTinChung 
              obj={obj}
              items = {items}
              selectedRequest={selectedRequest}
            />
        )}

        {/* <ThongTinChung 
          obj={obj}
          showFormLamThem = {showFormLamThem}
          showFromXinNghi = {showFromXinNghi}
          selectedRequest = {selectedRequest}
          items = {items}
          /> */}
        </div>
      </div>
    );
  }
}
