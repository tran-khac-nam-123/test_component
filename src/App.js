import "./App.css";
import { Component, Fragment } from "react";
import { Col, Container, Row, Spinner, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ThongBao from "./thongbao";
import QuyTrinh from "./quytrinh/quytrinh";
import CongViec from "./congviec";
import CuaToi from "./cuatoi";
import ThongKe from "./thongke";
import BaoCaoBl from "./baocaobl";
import Booking from "./booking";
import DuAn from "./duan";
import BaCham from "./bacham";
import Setting from "./setting";
import Help from "./help";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showNotifications: true,
      showProcess: false,
      showMine: false,
      showWork: false,
      showStatistical: false,
      showProject: false,
      showBooking: false,
      showReport: false,
      showBacham: false,
      showSetting: false,
      showHelp: false,
    };
  }

  toggleNotifications = () => {
    this.setState({
      showNotifications: true,
      showProcess: false,
      showMine: false,
      showWork: false,
      showStatistical: false,
      showProject: false,
      showBooking: false,
      showReport: false,
      showBacham: false,
      showSetting: false,
      showHelp: false,
    });
  };

  toggleProcess = () => {
    this.setState({
      showProcess: true,
      showNotifications: false,
      showMine: false,
      showWork: false,
      showStatistical: false,
      showProject: false,
      showBooking: false,
      showReport: false,
      showBacham: false,
      showSetting: false,
      showHelp: false,
    });
  };

  toggleMine = () => {
    this.setState({
      showMine: true,
      showProcess: false,
      showNotifications: false,
      showWork: false,
      showStatistical: false,
      showProject: false,
      showBooking: false,
      showReport: false,
      showBacham: false,
      showSetting: false,
      showHelp: false,
    });
  };

  toggleWork = () => {
    this.setState({
      showWork: true,
      showMine: false,
      showProcess: false,
      showNotifications: false,
      showStatistical: false,
      showProject: false,
      showBooking: false,
      showReport: false,
      showBacham: false,
      showSetting: false,
      showHelp: false,
    });
  };

  toggleStatistical = () => {
    this.setState({
      showStatistical: true,
      showWork: false,
      showMine: false,
      showProcess: false,
      showNotifications: false,
      showProject: false,
      showBooking: false,
      showReport: false,
      showBacham: false,
      showSetting: false,
      showHelp: false,
    });
  };

  toggleProject = () => {
    this.setState({
      showProject: true,
      showWork: false,
      showMine: false,
      showProcess: false,
      showNotifications: false,
      showStatistical: false,
      showBooking: false,
      showReport: false,
      showBacham: false,
      showSetting: false,
      showHelp: false,
    });
  };

  toggleBooking = () => {
    this.setState({
      showBooking: true,
      showProject: false,
      showWork: false,
      showMine: false,
      showProcess: false,
      showNotifications: false,
      showStatistical: false,
      showReport: false,
      showBacham: false,
      showSetting: false,
      showHelp: false,
    });
  };

  toggleReport = () => {
    this.setState({
      showReport: true,
      showBooking: false,
      showProject: false,
      showWork: false,
      showMine: false,
      showProcess: false,
      showNotifications: false,
      showStatistical: false,
      showBacham: false,
      showSetting: false,
      showHelp: false,
    });
  };

  toggleBacham = () => {
    this.setState({
      showBacham: true,
      showReport: false,
      showBooking: false,
      showProject: false,
      showWork: false,
      showMine: false,
      showProcess: false,
      showNotifications: false,
      showStatistical: false,
      showSetting: false,
      showHelp: false,
    });
  };

  toggleSetting = () => {
    this.setState({
      showSetting: true,
      showBacham: false,
      showReport: false,
      showBooking: false,
      showProject: false,
      showWork: false,
      showMine: false,
      showProcess: false,
      showNotifications: false,
      showStatistical: false,
      showHelp: false,
    });
  };

  toggleHelp = () => {
    this.setState({
      showHelp: true,
      showSetting: false,
      showBacham: false,
      showReport: false,
      showBooking: false,
      showProject: false,
      showWork: false,
      showMine: false,
      showProcess: false,
      showNotifications: false,
      showStatistical: false,
    });
  };

  render() {
    const {
      showNotifications,
      showProcess,
      showMine,
      showWork,
      showStatistical,
      showProject,
      showBooking,
      showReport,
      showBacham,
      showSetting,
      showHelp,
      
    } = this.state;
    return (
      <Fragment>
        {/* <Row className="me-0">
          <div className="bg-primary p-2">
            <img />
          </div>
        </Row> */}
        <Row className="wrapper me-0">
          <div id="menu" className="col-md-1 pe-0">
            <div>
              <ul className="br-light nav">
                <li className="nav-item">
                  <button
                    className="border-0 btn-info"
                    onClick={this.toggleNotifications}
                  >
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-solid fa-bell icon"></i>
                      <br />
                      Thông báo
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="border-0" onClick={this.toggleMine}>
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-solid fa-at icon"></i>
                      <br />
                      Của tôi
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="border-0" onClick={this.toggleProcess}>
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-solid fa-bars-progress icon"></i>
                      <br />
                      Quy trình
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="border-0" onClick={this.toggleWork}>
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-solid fa-list-check icon"></i>
                      <br />
                      Công việc
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="border-0" onClick={this.toggleProject}>
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-solid fa-diagram-project icon"></i>
                      <br />
                      Dự án
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="border-0" onClick={this.toggleBooking}>
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-solid fa-calendar-days icon"></i>
                      <br />
                      Booking
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="border-0" onClick={this.toggleReport}>
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-solid fa-chart-pie icon"></i>
                      <br />
                      Báo cáo Bl
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="border-0" onClick={this.toggleBacham}>
                    <div className="title pt-1 pb-3 text-center">
                      &nbsp;
                      <br />
                      <i className="fa-solid fa-ellipsis icon"></i>
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="border-0" onClick={this.toggleStatistical}>
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-solid fa-chart-simple icon"></i>
                      <br />
                      Thống kê
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className="">
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
            </div>
            
            <div>
              <ul className="br-light nav">
                <li className="nav-item">
                  <button
                    className="border-0"
                    onClick={this.toggleSetting}
                  >
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-solid fa-gear icon"></i>
                      <br />
                      Setting
                    </div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="border-0" onClick={this.toggleHelp}>
                    <div className="title pt-2 pb-2 text-center">
                      <i className="fa-regular fa-circle-question icon"></i>
                      <br />
                      Help
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {showNotifications ? (
              <div className="col-md-3">
                <ThongBao />
              </div>
          ) : showProcess ? (
            <div className="col-md-3 ps-0 pe-0">
              <QuyTrinh />
            </div>
          ) : showMine ? (
            <div className="col-md-3">
              <CuaToi />
            </div>
          ) : showWork ? (
            <div className="col-md-3">
              <CongViec />
            </div>
          ) : showStatistical ? (
            <div className="col-md-3">
              <ThongKe />
            </div>
          ) : showProject ? (
            <div className="col-md-3">
              <DuAn />
            </div>
          ) : showBooking ? (
            <div className="col-md-3">
              <Booking />
            </div>
          ) : showReport ? (
            <div className="col-md-3">
              <BaoCaoBl />
            </div>
          ) : showBacham ? (
            <div className="col-md-3">
              <BaCham />
            </div>
          ) : showSetting ? (
            <div className="col-md-3">
              <Setting />
            </div>
          ) : showHelp ? (
            <div className="col-md-3">
              <Help />
            </div>
          ) : null}
        </Row>
      </Fragment>
    );
  }
}
