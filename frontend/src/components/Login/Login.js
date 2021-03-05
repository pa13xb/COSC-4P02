import React from 'react';
import './Login.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("Submitted something." + this.state.username + " and " + this.state.password)
        event.preventDefault();
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({ [nam]: val });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='loginForm'>
                <div className='formDiv'>
                    <div>
                        <label>Username</label>
                    </div>
                    <input type="text" name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange}  className='textBox'/>
                    <div>
                        <label>Password</label>
                    </div>
                    <div>
                        <input type="password" name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange} className='textBox'/>
                    </div>

                    <input type="submit" value="Login" />
                </div>
            </form>
        )
    }
}
export default LoginForm