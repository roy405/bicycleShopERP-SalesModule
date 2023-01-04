import React, { Component } from "react";

class UserProfile extends Component {

    userInfo = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        cell_phone: '',
        dob: ''
    };

    constructor(props) {
        super(props);
        this.state = { item: this.userInfo };
        this.state = { userId: localStorage.getItem("userId") };
        this.state = { redirectToEditProfile: false };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleUserUpdate = this.handleUserUpdate.bind(this);

    }

    componentDidMount() {
        if (localStorage.getItem("userId") !== 'new') {
            fetch(`/user/${localStorage.getItem('userId')}`)
                .then(response => {
                    console.log(response);
                    return response.json();
                }).then(data => {
                    this.setState({ item: data });
                })

        }
    }

    onChangeHandler(event) {
        let item = this.state.item;
        item[event.target.name] = event.target.value;
        this.setState({ item });
    }

    handleUserUpdate(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch(`/user/${localStorage.getItem('userId')}`, {
            method: "PUT",
            body: data
        });
        window.location = "UserProfile";
    }

    render() {

        const user = this.state.item;
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
                <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
                <link href="../assets/css/paper-dashboard.css?v=2.0.0" rel="stylesheet" />
                {/* CSS Just for demo purpose, don't include it in your project */}
                <link href="../assets/demo/demo.css" rel="stylesheet" />
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
                                    <a className="navbar-brand" href="#pablo">User Profile</a>
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
                        <div className="content">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card card-user">
                                        <div className="image">
                                            <img src="../assets/img/damir-bosnjak.jpg" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <div className="author">
                                                <a href="#">
                                                    <img className="avatar border-gray" src="../assets/img/default-avatar.png" alt="..." />
                                                    <h5 className="title">FirstName LastName</h5>
                                                </a>
                                                <p className="description">
                                                    @user
                                                </p>
                                            </div>
                                            <p className="description text-center">
                                            </p>
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

export default UserProfile;