// imr
import React, { useState } from 'react'
import UserService from '../services/UserService';
import { Link, useNavigate } from 'react-router-dom';

// sfc
const Login = (props) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        role: ''
    })

    const navigate = useNavigate();
    // handle change method - to capture form data
    const handleChange = (event) => {
        //console.log(event);
        // name of the field user selected
        console.log(event.target.name);

        // value entered by user
        console.log(event.target.value);

        // copy user object info into loginUser
        const loginUser = { ...user };

        // Update form data entered by user in loginUser object
        loginUser[event.target.name] = event.target.value;

        // Update user property defined in state object with loginUser data
        setUser(loginUser);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        console.log(user);

        // logic to authenticate user
        const res = UserService.login(user);
        if (res.isLogin) {
            console.log(res);
            props.updateUserState(res);
            console.log("Login success");
            navigate('/');
        } else {
            console.log(res);
            console.log("Login Failed");
            return;
        }
    }

    return (
        <div className='mx-auto border p-3 mt-5' style={{ minWidth: "300px", maxWidth: "600px" }}>
            <h4>Login</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleChange} value={user.email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handleChange} value={user.password} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <select onChange={handleChange} value={user.role} name="role" className="form-select" aria-label="Default select example">
                    <option defaultValue="Select role">Select role</option>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </div>
            </form>
            <small>Don't have an account? Click <span><Link to="/register">here</Link> to register.</span></small>
        </div>
    );
}


export default Login;