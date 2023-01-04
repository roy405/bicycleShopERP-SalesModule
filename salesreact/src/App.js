import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard";
import CustomerManagement from "./CustomerManagement";
import CustomerAdd from "./CustomerAdd";
import CustomerList from "./CustomerList";
import CustomerDetailList from "./CustomerDetailList";
import CustomerDetail from "./CustomerDetail";
import ProductList from "./ProductList";
import Login from "./Login";
import OrderList from "./OrderList";
import OrderDetail from "./OrderDetail";
import OrderHistory from "./OrderHistory";
import CreateItemReturns from "./CreateItemReturns";
import CreateDeliveryNotes from "./CreateDeliveryNotes";
import UserProfile from "./UserProfile";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/customerManagement' element={<CustomerManagement/>} />
          <Route path='/customerDetail' element={<CustomerDetail/>} />
          <Route path='/customerAdd' element={<CustomerAdd/>} />
          <Route path='/customerList' element={<CustomerList/>} />
          <Route path='/customerDetailList' element={<CustomerDetailList/>} />
          <Route path='/productList' element={<ProductList/>} />
          <Route path='/orderList' element={<OrderList/>} />
          <Route path='/orderDetail' element={<OrderDetail/>} />
          <Route path='/orderHistory' element={<OrderHistory/>} />
          <Route path='/createItemReturns' element={<CreateItemReturns/>} />
          <Route path='/createDeliveryNotes' element={<CreateDeliveryNotes/>} />
          <Route path='/userProfile' element={<UserProfile/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;