// imrc
import React, { Component } from 'react'

class Login extends Component {
    state = {
        x: 10,
        y: 20

        // {this.state.x}, {this.state.y}
    }
    render() {
        return (
            <div className='mx-auto border p-3 mt-5' style={{ minWidth: "300px", maxWidth: "600px" }}>
                <h4>Login</h4>
                <hr />
                <form>
                    <div className="mb-3">
                        <label forHtml="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label forHtml="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
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