import React, { Component } from 'react';
import Store from "@material-ui/icons/Store";
import PermIdentity from "@material-ui/icons/PermIdentity";
import { BrowserRouter as Router } from "react-router-dom";
import ChartistGraph from "react-chartist";
import DataNV from './NhanVien.json';
import DataT from './Task.json';

import { dailySalesChart, completedTasksChart } from "./chartist";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: [],
      data1: [],
      dataNV: DataNV,
      dataT: DataT,
      trangthai1: false,
      trangthai2: false,
      done: false,
      id:"",
      name:"",
      name1:""
    };
  }

  componentWillMount(){
      // integrate Google Embed API with React.js

      (function(w,d,s,g,js,fs){
        g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
        js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
        js.src='https://apis.google.com/js/platform.js';
        fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
      }(window,document,'script'));

      window.gapi.analytics.ready(function() {
        window.gapi.analytics.auth.authorize({
          container: 'embed-api-auth-container',
          clientid: 'UA-126048279-1'
        });

        var activeUsers = new window.gapi.analytics.ext.ActiveUsers({
          container: 'active-users-container',
          pollingInterval: 5
        });
        
        activeUsers.once('success', function() {
          var element = this.container.firstChild;
          var timeout;

          this.on('change', function(data) {
            var element = this.container.firstChild;
            var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
            element.className += (' ' + animationClass);

            clearTimeout(timeout);
            timeout = setTimeout(function() {
              element.className =
                  element.className.replace(/ is-(increasing|decreasing)/g, '');
            }, 3000);
          });
        });
      })
      // end
  }

  componentDidMount() {
    fetch('https://5bb4c77ca3dce60014cae945.mockapi.io/chart1')
      .then((Response) => Response.json())
      .then((findresponse) => {
        this.setState({
          data1: findresponse,
        })
        this.dulieu = {
          labels: this.state.data1.map(function (user) {
            return user.labels;
          }),
          series: [this.state.data1.map(function (user) {
            return user.series;
          })]
        };
      })
      .catch((error) => console.error(error))

    fetch('https://5baf2f51a65be000146764f0.mockapi.io/chart')
      .then((Response) => Response.json())
      .then((findresponse1) => {
        this.setState({
          data2: findresponse1,
        })
        this.dulieu1 = {
          labels: this.state.data2.map(function (user) {
            return user.labels;
          }),
          series: [this.state.data2.map(function (user) {
            return user.series;
          })]
        };
      })
      .catch((error) => console.error(error))
  }

  isChange =(event)=>{
    const name = event.target.name;
    const value = event.target.value
    this.setState({
      [name]:value
    });
  }

  SaveNV=()=>{
    var nhanvien={};
    nhanvien.id= this.state.id,
    nhanvien.name= this.state.name
    var nhanviens = this.state.dataNV
    nhanviens.push(nhanvien)
    this.setState({
      dataNV: nhanviens
    });
  }

  Delete = (idU) => {
    var temp = this.state.dataNV.filter(value => value.id != idU )
    this.setState({
      dataNV:temp
    });
  }

  FormEditNV = () => {
    if (this.state.trangthai1 === true) {
      return (
        <form className="nutchinh">
          <input className="metqua" name="name"
            placeholder="Tên Nhân Viên" 
            onChange={(event)=>this.isChange(event)}
          />
          <input className="nutsave" type="reset" onClick={()=>this.SaveNV()} value="Save" />
          <span onClick={() => this.ClickClear()}>
            <i class="fas fa-angle-double-down"></i>
          </span>
        </form>
      )
    }
  }

  FormEditTask = () => {
    if (this.state.trangthai2 === true) {
      return (
        <div className="nutchinh">
          <input className="metqua" 
            placeholder="Tên Task" />
          <button>
            Save
            </button>
          <span onClick={() => this.ClickClear()}>
            <i className="fas fa-angle-double-down"></i>
          </span>
        </div>
      )
    }
  }

  DoneTask = () => {
    if (this.state.done === false) {
      this.state.dataT.map((data, i) => {
        return (
          <div className="motbox" key={i}>
            <input className="check" type="checkbox" onClick={() => this.ClickDone()} />
            <p className="tieude"> {data.name} </p>
            <span className="met"><i className="far fa-trash-alt"></i></span>
          </div>
        )
      })
    }
    else {
      this.state.dataT.map((data, i) => {
        return (
          <div className="motbox" key={i} >
            <input className="check" type="checkbox" onClick={() => this.ClickDone()} />
            <del className="tieudesua"> {data.name} </del>
            <span className="met"><i className="far fa-trash-alt"></i></span>
          </div>
        )
      })
    }
  }

  ClickDone = () => {
    this.setState({
      done: !this.state.done
    });
  }

  ClickAppear = () => {
    this.setState({ trangthai1: true, trangthai2: false });
  }

  ClickAppear1 = () => {
    this.setState({ trangthai2: true, trangthai1: false });
  }

  ClickClear = () => {
    this.setState({ trangthai2: false, trangthai1: false });
  }

  render() {

    return (
      <div>
        <Router>

          <div className="main">
            <div className="tren">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="doanhthu">
                      <Store />
                      <p>Tổng Số Vốn</p>
                      <h1> 500 $</h1>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="doanhthu">
                      <PermIdentity />
                      <p> Số Lượng Truy Cập</p>
                      <div id="active-users-container"></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                  </div>
                </div>
              </div>
            </div>
            <div className="giua">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <ChartistGraph
                      className="ct-chart"
                      data={this.dulieu}
                      type="Line"
                      options={completedTasksChart.options}
                      listener={completedTasksChart.animation}
                    />
                    <div className="chu">
                      <h1>Doanh Thu Hàng Tháng</h1>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <ChartistGraph
                      className="ct-chart"
                      data={this.dulieu1}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                    <div className="chu">
                      <h1>Doanh Thu Hàng Ngày</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.FormEditNV()}
            {this.FormEditTask()}
            <div className="duoi">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" href="#profile" role="tab" data-toggle="tab">NHIỆM VỤ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#buzz" role="tab" data-toggle="tab">NHÂN VIÊN</a>
                </li>
              </ul>
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active" id="profile">
                    {}
                  <div className="dauthemdautien">
                    <span className="dauthem" onClick={() => this.ClickAppear1()}>
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="buzz">
                  { 
                    this.state.dataNV.map((data, i) => {
                        return (
                          <div className="so1" key={i}>
                            <p className="cach">{data.name}</p>
                            <span className="met" onClick={(idU)=> this.Delete(data.id)}><i className="far fa-trash-alt"></i></span>
                          </div>
                        )
                      })
                  }
                  <div className="dauthemdautien">
                    <span className="dauthem" onClick={() => this.ClickAppear()}>
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default DashBoard;
