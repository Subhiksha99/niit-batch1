import React, { useState } from 'react';
import UserService from '../services/UserService';
import { useNavigate, Link } from 'react-router-dom';


const Register = (props) => {
    const [user, setUser] = useState({
        fullName: '',
        contactNo: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        console.log("handleChange");
        const regUser = { ...user };
        regUser[event.target.name] = event.target.value;
        setUser(regUser);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        console.log(user);
        // Call service addUser() method to add user to db.
        const res = UserService.addUser(user);

        console.log("Response", res);
        if (!res.isLogin) {
            navigate('/login')
        } else {
            return;
        }
    }
    return (
        <div className='mx-auto border p-3 mt-5' style={{ minWidth: "300px", maxWidth: "600px" }}>
            <h4 className='text-secondary'>Register</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Fullname</label>
                    <input onChange={handleChange} value={user.fullName} name="fullName" type="text" className="form-control" id="fullName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="contactNo" className="form-label">Contact No</label>
                    <input onChange={handleChange} value={user.contactNo} name="contactNo" type="text" className="form-control" id="contactNo" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={handleChange} value={user.email} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={handleChange} value={user.password} name="password" type="password" className="form-control" id="password" />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </div>
            </form>
            <small>Already have an account? Login <span><Link to="/login">here</Link></span></small>
        </div>
    );
}

export default Register;