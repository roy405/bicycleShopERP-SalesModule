import React, {Component} from "react";

class OrderDetail extends Component{

    constructor(props){
        super(props);
        this.state = {order_title:'', order_details:'', order_due_date:'', order_placement_date:'', order_status:'', payment_status:'',
            transaction_type:'', order_price:'', cancellation_penalty:''};
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleUpdateOrder = this.handleUpdateOrder.bind(this);

    }

    componentDidMount() {
            fetch(`/orders/${this.props.location.state.orderId}`)
                .then(response=>{
                    return response.json();
                }).then(data=>{
                console.log(data);
                this.setState({orders: data});
            })
        }


    onChangeHandler(event){
        let theOrders = this.state.orders;
        theOrders[event.target.name] = event.target.value;
        this.setState({ theOrders });
    }


    handleUpdateOrder(event){
        event.preventDefault();
        const data = new FormData(event.target);
        //Material Management Order Update
        const orderToSend = {
            order_id: this.props.location.state.orderId,
            order_status: data.get("order_status"),
            order_due_date: data.get("order_dude_date"),
            order_payment_status: data.get("order_payment_status")
        };
        console.log("MMOrderUpdate", orderToSend);

        fetch("https://us-central1-material-management-f3b68.cloudfunctions.net/enquiry/newEnquiry",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderToSend)
        }).then(response=> {
            console.log(response);
            alert("Your Order has been Successfully Placed! (Material Management)");
        });
        const salesOrders = {
            order_id: this.props.location.state.orderId,
            order_status: data.get("order_status"),
            order_due_date: data.get("order_dude_date"),
            order_placement_date: data.get("order_placement_date"),
        };
        console.log("ProductionOrderUpdate", salesOrders);

        //Production Order Update
        fetch("http://192.168.1.8:8080/salesOrders/completedOrder",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(salesOrders)
        }).then(response=> {
            console.log(response);
            alert("Your Order has been Successfully Placed!(Production!!!!)");

        })

    }

    render () {
        const theOrders = this.state.orders;
        console.log(theOrders);
        return (
            <div>
                <meta charSet="utf-8" />
                <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png" />
                <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" name="viewport" />
                {/*     Fonts and icons     */}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
                {/* CSS Files */}
                {/* New Form stuff */}

                <div className="wrapper ">
                    <div className="sidebar" data-color="white" data-active-color="danger">
                        {/*
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    */}
                        <div className="logo">
                            <a href="" className="simple-text logo-mini">
                            </a>
                            <a href="" className="simple-text logo-normal">
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
                                <li className="active-pro">
                                    <a href="./upgrade.html">
                                        <i className="nc-icon nc-spaceship" />
                                        <p>Upgrade to PRO</p>
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
                                    <a className="navbar-brand" href="#pablo">Sales</a>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-bar navbar-kebab" />
                                    <span className="navbar-toggler-bar navbar-kebab" />
                                    <span className="navbar-toggler-bar navbar-kebab" />
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                    <form>
                                        <div className="input-group no-border">
                                            <input type="text" defaultValue className="form-control" placeholder="Search..." />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <i className="nc-icon nc-zoom-split" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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

                        {
                            theOrders !== undefined ? (

                        <div className="content">
                            <div className="row">
                                <div className="signup-content">
                                    <form  onSubmit={this.handleUpdateOrder} className="signup-form">
                                        <h2 className="form-title">Update Order</h2>
                                        <div className="form-group">
                                            <label>Order ID</label> <input type="text" className="form-input" name="id" id="id" placeholder="Order ID" value={theOrders.id} disabled/>
                                        </div>
                                        <div className="form-group">
                                            <label>Order Placement Date</label><input type="date" className="form-input" name="order_placement_due" id="order_placement_due" placeholder="" value={theOrders.order_placement_date} disabled/>
                                        </div>
                                        <div className="form-group">
                                            <label>Order Due Date</label><input type="date" className="form-input" name="order_dude_date" id="order_due_date" placeholder="Order Due Date" value={theOrders.order_due_date} disabled />
                                        </div>
                                        <div className="form-group">
                                            <label>Order Status</label> <input type="text" className="form-input" name="order_status"  placeholder="Status" value={theOrders.order_status} onChange={this.onChangeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-input" name="payment_status" placeholder="Payment Status" value={theOrders.payment_status} onChange={this.onChangeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-input" name="cancellation_penalty"  placeholder="Cancellation Penalty" value={theOrders.cancellation_penalty} onChange={this.onChangeHandler} />
                                        </div>


                                        <div className="form-group">
                                            <input type="submit"  className="form-submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                            ) : ("")

                        }
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
export default OrderDetail;