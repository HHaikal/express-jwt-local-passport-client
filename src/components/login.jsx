import React, { Component } from "react"
import { Link, withRouter, Redirect } from "react-router-dom"
import { connect } from "react-redux"

import { AuthLogin } from "../redux/actions/auth"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }

        this.inputChange = this.inputChange.bind(this)
        this.loginPost = this.loginPost.bind(this)
    }

    loginPost() {
        this.props.AuthLogin(this.state, this.props.history)
        this.setState({
            email: '',
            password: ''
        })
    }

    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { message } = this.props.location.state || {
            from: { message: "" }
        };

        return (
            <div>
                {message}
                <Link to="/">Home</Link>
                <br />
                Email <input type="text" name="email" onChange={(e) => this.inputChange(e)} />
                <br />
                Password<input type="password" name="password" onChange={(e) => this.inputChange(e)} />
                <br />
                <button onClick={this.loginPost}>Login</button>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         loginAuth: (state, history) => dispatch(authLogin(state, history))
//     }
// }

// export default connect(null, mapDispatchToProps)(Login)
export default connect(null, { AuthLogin })(Login)