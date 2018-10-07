import React, { Component } from 'react';
import firebase from './firebase';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[]
     };
  }

componentDidMount() {
  const itemsRef = firebase.database().ref('donhang');
  itemsRef.on('value', (snapshot) => {
      let newState = [];
      snapshot.forEach(e => {
        const key = e.key;
        const ten = e.val().ten;
        const soluongsao = e.val().soluongsao;
        const ghichu = e.val().ghichu;
        newState.push({
            key:key,
            ten:ten,
            soluongsao:soluongsao,
            ghichu:ghichu
        });
      }) 
      this.setState({
        data: newState
      });
      
  });
}


getFire=()=>{  
return(
  this.state.data.map((datas,i)=>{
    return(
     <tbody key={i}>
     <tr >
       <td>{datas.ten}</td>
       <td>{datas.quantity}</td>
       <td>{datas.item}</td>
     </tr> 
   </tbody>
    )
})
)}
  render() {
    return (
      <div className="reviewpage">
        <div className="danhsachnam">
        <table className="rtable">
          <thead>
            <tr>
              <th>Tên Khách Hàng</th>
              <th>Số Sao</th>
              <th>Comment</th>
            </tr>
          </thead>
          
        </table>
        </div>
      </div>
    )
  }
}

export default Review;


 // var apiRequest1 = fetch('https://5baf2f51a65be000146764f0.mockapi.io/chart').then(function (response) {
    //     return response.json()
    //   });
    //   var apiRequest2 = fetch('https://5bb4c77ca3dce60014cae945.mockapi.io/chart1').then(function (response) {
    //     return response.json()
    //   });
    //   Promise.all([apiRequest1, apiRequest2]).then((findresponse) => {
    //       this.setState({
    //         data2: findresponse,
    //         data1 : findresponse
    //       })
    //         this.dulieu1 = {
    //           labels: this.state.data2.map(function (user) {
    //             return user.labels;
    //           }),
    //           series: [this.state.data2.map(function (user) {
    //             return user.series;
    //           })]
    //         };
    //         this.dulieu = {
    //           labels: this.state.data1.map(function (user) {
    //             return user.labels;
    //           }),
    //           series: [this.state.data1.map(function (user) {
    //             return user.series;
    //           })]
    //         };
    //     })


      // integrate Google Embed API with React.js

      // (function(w,d,s,g,js,fs){
      //   g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
      //   js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
      //   js.src='https://apis.google.com/js/platform.js';
      //   fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
      // }(window,document,'script'));

      // this.analytics();

      // window.gapi.analytics.ready(function() {
      //   window.gapi.analytics.auth.authorize({
      //     container: 'embed-api-auth-container',
      //     clientid: 'UA-126048279-1'
      //   });
      //   var activeUsers = new window.gapi.analytics.ext.ActiveUsers({
      //     container: 'active-users-container',
      //     pollingInterval: 5
      //   });
      //   activeUsers.once('success', function() {
      //     var element = this.container.firstChild;
      //     var timeout;

      //     this.on('change', function(data) {
      //       var element = this.container.firstChild;
      //       var animationClass = data.delta > 0 ? 'is-increasing' : 'is-decreasing';
      //       element.className += (' ' + animationClass);

      //       clearTimeout(timeout);
      //       timeout = setTimeout(function() {
      //         element.className =
      //             element.className.replace(/ is-(increasing|decreasing)/g, '');
      //       }, 3000);
      //     });
      //   });
      // })
      // end