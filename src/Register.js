import React from 'react'

const Register = () => {
    return (
        <div className="error-pagewrap">
		<div className="error-page-int">
			<div className="text-center custom-login">
				<h3>Registration</h3>
				<p>This is the best app ever!</p>
			</div>
			<div className="content-error">
				<div className="hpanel">
                    <div className="panel-body">
                        <form action="#" id="loginForm">
                            <div className="row">
                                <div className="form-group col-lg-12">
                                    <label>Username</label>
                                    <input className="form-control" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <label>Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <label>Repeat Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <label>Email Address</label>
                                    <input className="form-control" />
                                </div>
                                <div className="form-group col-lg-6">
                                    <label>Repeat Email Address</label>
                                    <input className="form-control" />
                                </div>
                                <div className="checkbox col-lg-12">
                                    <input type="checkbox" className="i-checks" checked /> Sigh up for our newsletter
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success loginbtn">Register</button>
                                <button className="btn btn-default">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
			</div>
			<div className="text-center login-footer">
				<p>Copyright © 2018. All rights reserved. Template by <a href="https://colorlib.com/wp/templates/">Colorlib</a></p>
			</div>
		</div>   
    </div>
    )
}

export default Register
