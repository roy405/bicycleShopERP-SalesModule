import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Dashboard extends Component {


    constructor(props) {
        super(props);
        this.state = { userId: localStorage.getItem("userId"), orderDetail: false };
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("userId") !== 'new') {
            fetch(`/user/${localStorage.getItem('userId')}`)
                .then(response => {
                    console.log(response);
                    return response.json();
                }).then(data => {
                    console.log(data);
                    this.setState({ item: data });
                })
        }

        fetch('/orders')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ orders: data })
            });
    }

    clickHandler(id) {
        console.log(id);
        this.setState(({
            orderId: id,
            orderDetail: true
        }))
    }




    render() {
        const { orders } = this.state;
        console.log(orders);
        const ordersList = orders !== undefined && orders.map(order => {
            return (
                <tr onClick={() => this.clickHandler(order.id)}>
                    <td>{order.id}</td>
                    <td>{order.order_title}</td>
                    <td>{order.order_status}</td>
                    <td>{order.order_due_date}</td>
                    <td>{order.order_placement_date}</td>
                </tr>
            );
        });
        const user = this.state.item;
        return (
            <div>
                {
                    this.state.orderDetail ? (
                        <Navigate to={{ pathname: "/orderDetail", state: { orderId: this.state.orderId } }} />
                    ) : ("")
                }
                <meta charSet="utf-8" />
                <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png" />
                <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" name="viewport" />
                {/*     Fonts and icons     */}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
                {/* CSS Files */}

                <div className="wrapper ">
                    <div className="sidebar" data-color="white" data-active-color="danger">
                        <div className="logo">
                            <a href="" className="simple-text logo-mini">
                            </a>
                            <a href="" className="simple-text logo-normal">
                                {
                                    user !== undefined ? (
                                        <div>
                                            {user.first_name}
                                        </div>

                                    ) : ("")

                                }
                            </a>
                        </div>
                        <div className="sidebar-wrapper">
                            <ul className="nav">
                                <li className="active ">
                                    <a href="/dashboard">
                                        <i className="nc-icon nc-bank" />
                                        <p>Dashboard</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/userProfile">
                                        <i className="nc-icon nc-diamond" />
                                        <p>Profile</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/orderList">
                                        <i className="nc-icon nc-pin-3" />
                                        <p>Order List</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/customerManagement">
                                        <i className="nc-icon nc-bell-55" />
                                        <p>Customer Management</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/customerList">
                                        <i className="nc-icon nc-single-02" />
                                        <p>Place Order</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/createItemReturns">
                                        <i className="nc-icon nc-tile-56" />
                                        <p>Returns</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/createDeliveryNotes">
                                        <i className="nc-icon nc-caps-small" />
                                        <p>Delivery Notes</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-panel">
                        {/* Navbar */}
                        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                            <div className="container-fluid">
                                <div className="navbar-wrapper">
                                    <div className="navbar-toggle">
                                        <button type="button" className="navbar-toggler">
                                            <span className="navbar-toggler-bar bar1" />
                                            <span className="navbar-toggler-bar bar2" />
                                            <span className="navbar-toggler-bar bar3" />
                                        </button>
                                    </div>
                                    <a className="navbar-brand" href="#pablo">Paper Dashboard 2</a>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-bar navbar-kebab" />
                                    <span className="navbar-toggler-bar navbar-kebab" />
                                    <span className="navbar-toggler-bar navbar-kebab" />
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link btn-magnify" href="#pablo">
                                                <i className="nc-icon nc-layout-11" />
                                                <p>
                                                    <span className="d-lg-none d-md-block">Stats</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li className="nav-item btn-rotate dropdown">
                                            <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="nc-icon nc-bell-55" />
                                                <p>
                                                    <span className="d-lg-none d-md-block">Some Actions</span>
                                                </p>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link btn-rotate" href="#pablo">
                                                <i className="nc-icon nc-settings-gear-65" />
                                                <p>
                                                    <span className="d-lg-none d-md-block">Account</span>
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        {/* End Navbar */}
                        {/* <div class="panel-header panel-header-lg">

  <canvas id="bigDashboardChart"></canvas>


</div> */}
                        <div className="content">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-body ">
                                            <div className="row">
                                                <div className="col-5 col-md-4">
                                                    <div className="icon-big text-center icon-warning">
                                                        <i className="nc-icon nc-globe text-warning" />
                                                    </div>
                                                </div>
                                                <div className="col-7 col-md-8">
                                                    <div className="numbers" h>
                                                        <a className="card-category" href="/customerManagement"><div>Customer Management</div></a>
                                                        <p className="card-title">
                                                        </p><p>
                                                        </p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-body ">
                                            <div className="row">
                                                <div className="col-5 col-md-4">
                                                    <div className="icon-big text-center icon-warning">
                                                        <i className="nc-icon nc-money-coins text-success" />
                                                    </div>
                                                </div>
                                                <div className="col-7 col-md-8">
                                                    <div className="numbers">
                                                        <a className="card-category" href="/customerList"><div>Place Order</div></a>
                                                        <p className="card-title">
                                                        </p><p>
                                                        </p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-body ">
                                            <div className="row">
                                                <div className="col-5 col-md-4">
                                                    <div className="icon-big text-center icon-warning">
                                                        <i className="nc-icon nc-vector text-danger" />
                                                    </div>
                                                </div>
                                                <div className="col-7 col-md-8">
                                                    <div className="numbers">
                                                        <a className="card-category" href="/createItemReturns"><div>Issue Returns</div></a>
                                                        <p className="card-title">
                                                        </p><p>
                                                        </p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-body ">
                                            <div className="row">
                                                <div className="col-5 col-md-4">
                                                    <div className="icon-big text-center icon-warning">
                                                        <i className="nc-icon nc-favourite-28 text-primary" />
                                                    </div>
                                                </div>
                                                <div className="col-7 col-md-8">
                                                    <div className="numbers">
                                                        <a className="card-category" href="/createDeliveryNotes"><div>Delivery Note</div></a>
                                                        <p className="card-title">
                                                        </p><p>
                                                        </p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card ">
                                        <div className="card-header ">
                                            <h5 className="card-title">Enquiry List</h5>
                                            <p className="card-category">24 Hours Holds</p>
                                        </div>
                                        <div className="card-body ">
                                            <canvas id="chartHours" width={400} height={100} />
                                            <table className="table table-sm table-dark">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Order ID</th>
                                                        <th scope="col">Order Title</th>
                                                        <th scope="col">Order Status</th>
                                                        <th scope="col">Order Due Date</th>
                                                        <th scope="col"> Order Placement Date</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {ordersList}
                                                </tbody>
                                            </table>

                                        </div>
                                        <div className="card-footer ">
                                            <hr />
                                            <div className="stats">
                                                <i className="fa fa-history" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card ">
                                        <div className="card-header ">
                                            <h5 className="card-title">Email Statistics</h5>
                                            <p className="card-category">Last Campaign Performance</p>
                                        </div>
                                        <div className="card-body ">
                                            <canvas id="chartEmail" />
                                        </div>
                                        <div className="card-footer ">
                                            <div className="legend">
                                                <i className="fa fa-circle text-primary" /> Opened
                                                <i className="fa fa-circle text-warning" /> Read
                                                <i className="fa fa-circle text-danger" /> Deleted
                                                <i className="fa fa-circle text-gray" /> Unopened
                                            </div>
                                            <hr />
                                            <div className="stats">
                                                <i className="fa fa-calendar" /> Number of emails sent
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer footer-black  footer-white ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="credits ml-auto">
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;