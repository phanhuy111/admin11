import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[]
     };
  }

componentDidMount() {
    fetch('https://5baa375653adf70014d15cbf.mockapi.io/admin/admin')
        .then((Response) => Response.json())
        .then((findresponse) => {
            this.setState({
                data: findresponse,
            })
        })
  }

   getData = () => {  
     return(
       this.state.data.map((datas,i)=>{
         return(
          <tbody key={i}>
          <tr >
            <td>{datas.name}</td>
            <td>{datas.quantity}</td>
            <td>{datas.color}</td>
            <td>{datas.size}</td>
            <td>{datas.price}</td>
          </tr> 
        </tbody>
         )
      
         
     })
   )}
 
  render() {
    return (
      <div className="productlist">
        <div className="danhsachnam">
          <div className="chu">
          <h1></h1>
          </div>  
        <table className="rtable">
          <thead>
            <tr>
              <th>Tên Sản Phẩm</th>
              <th>Số Lượng</th>
              <th>Màu Sắc</th>
              <th>Size</th>
              <th>Giá</th>
            </tr>
          </thead>
          {this.getData()}
        </table>
        </div>
        <div className="danhsachnu">
        <table className="rtable">
          <thead>
          <tr>
              <th>Tên Sản Phẩm</th>
              <th>Số Lượng</th>
              <th>Màu Sắc</th>
              <th>Size</th>
              <th>Giá</th>
            </tr>
          </thead>
          {this.getData()}
        </table>
        </div>
        <div className="danhsachphukien">
        <table className="rtable">
          <thead>
          <tr>
              <th>Tên Sản Phẩm</th>
              <th>Số Lượng</th>
              <th>Màu Sắc</th>
              <th>Size</th>
              <th>Giá</th>
            </tr>
          </thead>
          {this.getData()}
        </table>
        </div>
      </div>
    )
  }
}

export default ProductList;