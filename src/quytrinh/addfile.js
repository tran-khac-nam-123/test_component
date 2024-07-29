import { Component } from "react";

export default class AddFile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <table
        style={{ height: "150px" }}
        className="shadow p-3 mb-5 bg-body-tertiary rounded col-md-12"
      >
        <thead>
          <tr>
            <td>
              <p className="text-secondary mt-2 ps-2">
                <b>Tài liệu đính kèm</b>
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div
              className="pb-3 ps-2 pe-3 ms-4 me-3"
              style={{ border: "2px dashed #e1e2eb" }}
            >
              <button className="btn btn-primary mt-3">
                <i className="fa-solid fa-paperclip"></i>&nbsp;&nbsp; Add File
                <input hidden type="file"/>
              </button>
            </div>
          </tr>
        </tbody>
      </table>
    );
  }
}
