import React, {Component} from "react";
import CustomerAdd from "./CustomerAdd";

class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {products:[]};
        this.state = {order_title:'', order_details:'', order_due_date:'', order_placement_date:'', order_status:'', payment_status:'',
            transaction_type:'', order_price:'', cancellation_penalty:''};
        this.state = {delivery_type:'', shipping_address:''};
        this.state = {tempProduct:{prodId:"",prodName:"",qty:"", type:""},saveProdList:[]};

        this.productListUpdateHandler = this.productListUpdateHandler.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.changeProdValues = this.changeProdValues.bind(this);
    }


    componentDidMount() {
        fetch('https://us-central1-material-management-f3b68.cloudfunctions.net/product/getProductsList')
            .then(response => response.json())
            .then(data=>{
                console.log(data);
                this.setState({products: data.products})

            });

        if(this.props.match.params.custId !== 'new'){
            fetch(`/customers/${this.props.location.state.custId}`)
                .then(response=>{
                    return response.json();
                }).then(data=>{
                    console.log(data);
                this.setState({customer: data});
            })
        }
    }

    //For Manually Updating the Product List (("Incomplete"))
    productListUpdateHandler(event) {

        const raw_materials ={

        }

    }



    createOrder(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const order={
            order_title: data.get("order_title"),
            order_details: data.get("order_details"),
            order_due_date: data.get("order_due_date"),
            order_placement_date: data.get("order_placement_date"),
            order_status: data.get("order_status"),
            payment_status: data.get("payment_status"),
            transaction_type: data.get("transaction_type"),
            order_price: data.get("order_price"),
            cancellation_penalty: data.get("cancellation_penalty"),

            deliveryDetails:{
                delivery_type: data.get("delivery_type"),
                shipping_address: data.get("shipping_address")
            },

            customers:{
                id: this.state.customer.id,
                first_name: this.state.customer.first_name,
                last_name: this.state.customer.last_name,
                trading_name_ifbusiness: this.state.customer.trading_name_ifbusiness,
                billing_address: this.state.customer.billing_address,
                collection_address_for_returns: this.state.customer.collection_address_for_returns,
                email: this.state.customer.email
            },
            items: this.state.saveProdList
        };




        console.log(order);
        fetch("/orders",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(response=> {
            console.log(response);
            alert("Your Order has been Successfully Placed!");
            return response.json();
        }).then(data=>{
            console.log(data);
            const orderToSend = {
                order_id: data.id,
                order_status: data.order_status,
                order_placement_date: data.order_placement_date,
                products: data.items
            };

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
                order_id: data.id,
                order_status: data.order_status,
                order_due_date: data.order_due_date,
                order_placement_date: data.order_placement_date,
                salesItems:data.items
            };

            const saveProdList = data.items;
            let prodList = [];
            saveProdList.forEach(prod=>{
                if(prod.type==="Bicycle"){
                    prodList.push(prod);
                }
            });
            salesOrders.salesItems = prodList;

            fetch("http://192.168.1.8:8080/salesOrders",{
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

        });
    }




    addProduct(event){

        const tempProduct = this.state.tempProduct;
        console.log(tempProduct)
        const tempProductKeys = Object.keys(this.state.tempProduct);
        let status = true;
        tempProductKeys.forEach(key=>{
            if(key!=="prodName") {
                console.log(tempProduct[key])
                if (tempProduct[key] === "") {
                    console.log(tempProduct[key])
                    status = false;
                }
            }
        });

        if(status){
            let saveProdList = this.state.saveProdList;
            const product = this.state.products[tempProduct.prodId];
            let savedPosition = -1;
            saveProdList.forEach((saveProd,index)=>{


                if(saveProd.prodId===product.product_id){
                    savedPosition = index;
                }
            });

            console.log(product)


            tempProduct.prodName = product.name;
            tempProduct.prodId = product.product_id;
            tempProduct.type = product.type;
            if(savedPosition===-1){

                saveProdList.push(tempProduct);
            }else{
                saveProdList[savedPosition] = tempProduct;
            }

            this.setState({
                saveProdList,
                tempProduct:{prodId:"",prodName:"",qty:""}
            })
        }
        event.preventDefault();
    }

    changeProdValues(event,field){
        let tempProduct = this.state.tempProduct;
        if(field==="prodId"){
            const product = this.state.products[event.target.value];
            tempProduct["type"] = product.type;
        }

        tempProduct[field] = event.target.value;
        this.setState({
           tempProduct
        });
    }

    render() {
        const {products} = this.state;
         console.log("saved ",this.state.products);
        const productsList = products!==undefined && products.map(product => {
            return (
                <table>
                    <tbody>
                    <tr className="row100 body">
                        <td className="cell100 column1">{product.name}</td>
                        <td className="cell100 column2">{product.description}</td>
                        <td className="cell100 column3">{product.price}</td>
                        <td className="cell100 column4">{product.quantity}</td>
                        <td className="cell100 column5">{product.type}</td>
                    </tr>
                    </tbody>
                </table>
            );
        });
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
                        <div className="content">
                            <div className="row">
                                <div className="table100 ver5 m-b-110">
                                    <div className="table100-head">
                                        <table>
                                            <thead>
                                            <tr className="row100 head">
                                                <th className="cell100 column1">Product Name</th>
                                                <th className="cell100 column2">Product Description</th>
                                                <th className="cell100 column3">Product Price</th>
                                                <th className="cell100 column4">Product Quantity</th>
                                                <th className="cell100 column5">Product Type</th>
                                            </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div className="table100-body js-pscroll">
                                        {productsList}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="signup-content">
                                    <form  onSubmit={this.createOrder} className="signup-form">
                                        <h2 className="form-title">Order Placement</h2>
                                        <h3 className="form-title">Order Details</h3>
                                        <div className="form-group">
                                            <input type="text" className="form-input" name="order_title" id="order_title" placeholder="Order Title" value={this.state.order_title} onChange={this.changeHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-input" name="order_details" id="order_details" placeholder="Order Details" value={this.state.order_details} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="date" className="form-input" name="order_due_date" id="order_due_date" placeholder="Order Due Date" value={this.state.order_due_date} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="date" className="form-input" name="order_placement_date" id="order_placement_date" placeholder="Order Placement Date" value={this.state.order_placement_date} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-input" name="order_status" id="order_status" placeholder="Order Status" value={this.state.order_status} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-input" name="payment_status" id="payment_status" placeholder="Payment Status" value={this.state.payment_status} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-input" name="transaction_type" id="transaction_type" placeholder="Transaction Type" value={this.state.transaction_type} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-input" name="order_price" id="order_price" placeholder="Order Price" value={this.state.order_price} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-input" name="cancellation_penalty" id="cancellation_penalty" placeholder="Cancellation Penalty" value={this.state.cancellation_penalty} onChange={this.changeHandler} />
                                        </div>
                                        <br/>
                                        <h3 className="form-title">Delivery Details</h3>
                                        <div className="form-group">
                                            <input type="text" className="form-input" name="delivery_type" id="delivery_type" placeholder="Delivery Type" value={this.state.delivery_type} onChange={this.changeHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-input" name="shipping_address" id="shipping_address" placeholder="Shipping Address" value={this.state.shipping_address} onChange={this.changeHandler} />
                                        </div>

                                        <h3 className="form-title">Product Information</h3>
                                        {/*Dropdown*/}
                                        <div className="form-row align-items-center">
                                            <div className="col-auto">
                                                <select className="form-control mb-2" id="select-prodInfo" onChange={(event)=>this.changeProdValues(event,"prodId")} value={this.state.tempProduct.prodId}>
                                                    <option value="" disabled>Please select</option>
                                                    {
                                                        products!==undefined && products.map((prod,index)=>{
                                                            return <option key={index} value={index}>{prod.name}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            <div className="col-auto">
                                                <input type="number" className="form-control" id="qty-form" placeholder="Quantity" onChange={(event)=>this.changeProdValues(event,"qty")}/>
                                            </div>
                                            <div className="col-auto">
                                                <input type="submit" className="btn btn-primary mb-2" id="btn-prodInfo" onClick={(event)=>this.addProduct(event)}/>
                                            </div>
                                        </div>

                                        <div>
                                            {
                                                this.state.saveProdList.map((saveProd,index)=>{
                                                    return(
                                                        <table className="table table-sm table-dark">
                                                            <thead>
                                                            <tr>
                                                                <th scope="col">Product Name</th>
                                                                <th scope="col">Product quantity</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>{saveProd.prodName}</td>
                                                                <td>{saveProd.qty}</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    )
                                                })
                                            }
                                            <div className="form-group">
                                                <input type="submit"  className="form-submit" />
                                            </div>
                                        </div>
                                    </form>
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
export default ProductList;