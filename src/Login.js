import React from "react";
import { NavLink } from "react-router-dom";
function Login(){
    return(
        <div>
            <h1 className="font-weight-bold text-center py-5">Login</h1>
            <div className="container login" >
                <div className="container ">
                    <div className="form-row">
                        <div className="col-4">
                            <input type="text" placeholder="UserName" className="form-control my-4 p-4" required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-4">
                            <input type="password" placeholder="password" className="form-control my-4 p-4" required/>
                        </div>
                    </div>
                    <div className="form-row ">
                        <div className="col-4">
                            <NavLink to="/Dashboard" className="b btn btn-success btn-lg btn-dark w-100  mb-5 mt-4">Login</NavLink>
                        </div>
                    </div>
                </div>
                <a href="" className="fs-5">Forgot password</a>
                <p className="fs-5">Dont have an account? <NavLink to="/Signup">Register here</NavLink></p>
            </div>
        </div>
    );
}
export default Login;