import React, { Component } from 'react';
import firebase from './firebase';

class Order extends Component {
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
          const sodienthoai = e.val().sodienthoai;
          const diachi = e.val().diachi; 
          const ghichu = e.val().ghichu;
          newState.push({
              key:key,
              ten:ten,
              sodienthoai:sodienthoai,
              diachi:diachi,
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
      // console.log(datas.item.map((i)=>{
      //   console.log(object)
      // }))
      return(
       <tbody key={i}>
       <tr >
         <td>{datas.ten}</td>
         <td>{datas.quantity}</td>
         <td>{datas.item}</td>
         <td>{datas.diachi}</td>
         <td>{datas.sodienthoai}</td>
         <td>{datas.price}</td>
       </tr> 
     </tbody>
      )
  })
)}

  render() {
    
    return (
      <div className="orderpage">
        <div className="danhsachnam">
        <table className="rtable">
          <thead>
            <tr>
              <th>Tên Khách Hàng</th>
              <th>Loại Hàng</th>
              <th>Số Lượng</th>
              <th>Địa Chỉ</th>
              <th>Số Điện Thoại</th>
              <th>Tổng Đơn Hàng</th>
            </tr>
          </thead>
          {this.getFire()}
        </table>
        </div>
      </div>
    )
  }
}

export default Order;