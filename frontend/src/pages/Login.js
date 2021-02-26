import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {username: '', password: '',};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log("Submitted something."+this.state.username +" and " + this.state.password)
        event.preventDefault();
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        
        this.setState({[nam]: val});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" name ='username' value={this.state.username} onChange={this.handleChange}/>
                <label>Password</label>
                <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default LoginForm