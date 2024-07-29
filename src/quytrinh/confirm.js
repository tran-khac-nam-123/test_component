import { Component } from "react";
import { ButtonGroup } from "react-bootstrap";

export default class ConFirm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <table className="shadow p-3 mb-5 bg-body-tertiary rounded col-md-12">
        <thead>
          <tr>
            <td className="col-md-3">
              <label
                for="example-text-input"
                className="col-md-3 col-form-label ps-4"
              >
                Lý do
              </label>
            </td>
            <td>
              <div className="col-md-12 pe-4 pt-2">
                <textarea className="form-control" type="text" />
              </div>
            </td>
          </tr>

          <tr>
            <td className="col-md-3">
              <label
                for="example-text-input"
                className="col-md-7 col-form-label ps-4"
              >
                Người phê duyệt
              </label>
            </td>
            <td>
              <div className="col-md-5 pt-2">
                <input
                  style={{
                    borderLeft: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                  className="form-control"
                  type="text"
                  placeholder="Tìm kiếm người dùng"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td className="col-md-3">
              <label
                for="example-text-input"
                className="col-md-8 col-form-label ps-4"
              >
                Trạng thái khẩn cấp
              </label>
            </td>
            <td>
              <div
                style={{ backgroundColor: "#eef3f9", borderRadius: "5px" }}
                className="col-md-5 pt-2 d-flex"
              >
                <input className="form-check" type="checkbox" />
                &nbsp;&nbsp; Có/Không
              </div>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="col-2" colSpan={"2"}>
              <ButtonGroup className="mt-4 mb-2 ps-3">
                <button
                  type="button"
                  className="border-0 btn text-secondary pe-4"
                >
                  <i className="fa-regular fa-floppy-disk text-primary"></i>
                  &nbsp; <b>Lưu</b>
                </button>
                <button
                  type="button"
                  className="border-0 btn text-secondary pe-4"
                >
                  <i className="fa-regular fa-paper-plane text-success"></i>
                  &nbsp; <b>Gửi Đi</b>
                </button>
                <button type="button" className="border-0 btn text-secondary">
                  <i className="fa-solid fa-arrows-rotate text-secondary"></i>
                  &nbsp; <b>Làm Mới</b>
                </button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
