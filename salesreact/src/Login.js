import React, {Component} from "react";

class Login extends Component{

    constructor(props){
        super(props);
        this.state={username:'', password:''};
        this.changeHandler = this.changeHandler.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    changeHandler = event=>
        this.setState({[event.target.name]: event.target.value});

    handleLogin(event){
        event.preventDefault();
        const data= new FormData(event.target);
        fetch("/login", {
            method: "POST",
            body: data
        }).then(response  =>{
            if(response.status===200){
                response.json().then(userId=>{
                    localStorage.setItem("userId", userId);
                    window.location = "Dashboard";
                });
            }else{
                alert("Incorrect Username/Password Combination!");
                window.location = "Login";
            }
        });
    }
        render() {
            return (
                <div>
                    <title>Login V3</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {/*===============================================================================================*/}
                    <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
                    {/*===============================================================================================*/}
                    <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
                    {/*===============================================================================================*/}
                    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                    {/*===============================================================================================*/}
                    <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css" />
                    {/*===============================================================================================*/}
                    <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
                    {/*===============================================================================================*/}
                    <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
                    {/*===============================================================================================*/}
                    <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />
                    {/*===============================================================================================*/}
                    <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
                    {/*===============================================================================================*/}
                    <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />
                    {/*===============================================================================================*/}
                    <link rel="stylesheet" type="text/css" href="css/util.css" />
                    <link rel="stylesheet" type="text/css" href="css/main.css" />
                    {/*===============================================================================================*/}
                    <div className="limiter">
                        <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
                            <div className="wrap-login100">
                                <form className="login100-form validate-form" onSubmit={this.handleLogin} >
                <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape" />
                </span>
                                    <span className="login100-form-title p-b-34 p-t-27">
                                        <h1>Sales</h1>
                                        <br/>
                                        <h4> Log in</h4>
                </span>
                                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                                        <input className="input100" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                                        <span className="focus-input100" data-placeholder="" />
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate="Enter password">
                                        <input className="input100" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                                        <span className="focus-input100" data-placeholder="" />
                                    </div>
                                    <div className="contact100-form-checkbox">
                                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                        <label className="label-checkbox100" htmlFor="ckb1">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <button className="login100-form-btn" type="submit">
                                            Login
                                        </button>
                                    </div>
                                    <div className="text-center p-t-90">
                                        <a className="txt1" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="dropDownSelect1" />
                    {/*===============================================================================================*/}
                    {/*===============================================================================================*/}
                    {/*===============================================================================================*/}
                    {/*===============================================================================================*/}
                    {/*===============================================================================================*/}
                    {/*===============================================================================================*/}
                    {/*===============================================================================================*/}
                </div>
            );
        }
}

export default Login;