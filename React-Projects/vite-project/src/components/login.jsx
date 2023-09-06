// imrc
import React, { Component } from 'react'

class Login extends Component {
    state = {
        user: {
            email: '',
            password: ''
        }
    }

    // handle change method - to capture form data
    handleChange = (event) => {
        //console.log(event);
        // name of the field user selected
        console.log(event.target.name);

        // value entered by user
        console.log(event.target.value);

        // copy user object info into loginUser
        const loginUser = { ...this.state.user };

        // Update form data entered by user in loginUser object
        loginUser[event.target.name] = event.target.value;

        // Update user property defined in state object with loginUser data
        this.setState({ user: loginUser });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        console.log(this.state.user);

        // logic to authenticate user

    }
    render() {
        return (
            <div className='mx-auto border p-3 mt-5' style={{ minWidth: "300px", maxWidth: "600px" }}>
                <h4>Login</h4>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label forHtml="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={this.handleChange} value={this.state.user.email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label forHtml="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={this.handleChange} value={this.state.user.password} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;