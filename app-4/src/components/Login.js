import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();

        this.state={
            user: '',
            password:''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    
    handleUserChange(value){
        this.setState({user: value})
    }

    handlePasswordChange(value){
        this.setState({password: value})
    }

    handleLogin(){
        alert(`Username: ${this.state.user} Password: ${this.state.password}`)
    }

    render(){

        return(
        <div className="App">
            <input type="text" onChange={(e) => this.handleUserChange(e.target.value)}></input>
            <input type="text" onChange={(e) => this.handlePasswordChange(e.target.value)}></input>
            <button onClick={this.handleLogin}>Login</button>
        </div>
        )
    }
}
export default Login