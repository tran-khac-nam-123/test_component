import { Component } from "react";
import { ButtonGroup } from "react-bootstrap";
import HeaDer from "./header";
import AddFile from "./addfile";
import ConFirm from "./confirm";

export default class ThongTinChung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: this.props.obj,
      items: this.props.items,
      selectedRequest: this.props.selectedRequest,
    };
  }

  render() {
    const { obj } = this.state;
    const {selectedRequest} = this.props;
    return (
      <div className="ao">
        <div className="title-name col-md-11 d-flex mb-5 mt-3">
          <div>
            <h6 className="pt-2">
              {selectedRequest == "lamthem"
                ? "YÊU CẦU LÀM THÊM GIỜ"
                : "XIN NGHỈ PHÉP"}
            </h6>
          </div>
          <div className="">
            <ButtonGroup className="pt-1">
              <button
                type="button"
                style={{ background: "white" }}
                className="border-0"
              >
                Quy trình
              </button>
              /
              <button
                type="button"
                style={{ background: "white" }}
                className="border-0"
              >
                {this.state.selectedRequest == "lamthem"
                  ? "Yêu Cầu Làm Thêm Giờ"
                  : "Xin Nghỉ Phép"}
              </button>
            </ButtonGroup>
          </div>
        </div>
        <div>
          <HeaDer selectedRequest={selectedRequest}/>
        </div>
        <div
          style={{ width: "1000px" }}
          className="row ms-0 me-0 shadow p-3 mb-5 bg-body-tertiary rounded"
        >
          <table className="table table-striped mb-3 responsiveTable">
            <thead>
              <tr>
                <th>Title</th>
                <th>Descriptions</th>
                <th className="text-center">Hoạt động</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((item) => (
                <tr key={item.Id}>
                  <td>{item.Title}</td>
                  <td>{item.Descriptions}</td>
                  <td>
                    <div className="button-items text-center">
                      <button
                        className="btn btn-sm waves-effect waves-light"
                        color="primary"
                      >
                        <i className="fa fa-pencil mr-2 align-middle text-primary font-size-16"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm waves-effect waves-light"
                        color="primary"
                      >
                        <i className="fa fa-trash mr-2 align-middle text-danger font-size-16"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <td>
                  <h5 className="mt-5 ps-2">Thông tin chung</h5>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label className="col-md-3 col-form-label ps-4">
                    {obj.Title}
                    <span className="text-danger">*</span>
                  </label>
                </td>
                <td>
                  <label className="col-md-3 col-form-label">
                    {selectedRequest == "lamthem" ? obj.MoTa : obj.LyDo}
                    <span className="text-danger">*</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col-md-11 ps-4">
                    <input className="form-control" type="text" />
                  </div>
                </td>
                <td>
                  <div className="col-md-11">
                    <textarea className="form-control" type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="col-md-9 col-form-label ps-4">
                    {obj.TimeStart}
                    <span className="text-danger">*</span>
                  </label>
                </td>
                <td>
                  <label className="col-md-9 col-form-label">
                    {obj.TimeEnd}
                    <span className="text-danger">*</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col-md-11 ps-4">
                    <input className="form-control" type="datetime-local" />
                  </div>
                </td>
                <td>
                  <div className="col-md-11">
                    <input className="form-control" type="datetime-local" />
                  </div>
                </td>
              </tr>
              {selectedRequest == "lamthem" ? (
                <>
                  <tr>
                    <td>
                      <label className="col-md-5 col-form-label ps-4">
                        {obj.SoGioLam}
                        <span className="text-danger">*</span>
                      </label>
                    </td>
                    <td>
                      <label className="col-md-5 col-form-label">
                        {obj.PhanTram}
                        <span className="text-danger">*</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="col-md-11 ps-4 mb-5">
                        <input className="form-control" type="number" />
                      </div>
                    </td>
                    <td>
                      <div className="col-md-11 mb-5">
                        <input className="form-control" type="number" />
                      </div>
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  <tr>
                    <td>
                      <label className="col-md-5 col-form-label ps-4">
                        {obj.TongNgayNghi}
                        <span className="text-danger">*</span>
                      </label>
                    </td>
                    <td>
                      <label className="col-md-5 col-form-label">
                        {obj.NguoiPheDuyet}
                        <span className="text-danger">*</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="col-md-11 ps-4 mb-5">
                        <input className="form-control" type="number" />
                      </div>
                    </td>
                    <td>
                      <div className="col-md-11 mb-5">
                        <input className="form-control" type="text" />
                      </div>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        <AddFile />
        <ConFirm />
      </div>
    );
  }
}
