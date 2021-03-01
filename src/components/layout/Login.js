import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Login extends Component {
    state ={
        name:'',
        password:''
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.login([this.state.name , this.state.password]);
        //this.setState({text:''});
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value}
            );
    }
    render() {
        return (
            <div>                
                <i className={this.props.loginIcon} aria-hidden="true"></i>{this.props.loginTitle}
                <form onSubmit= {this.onSubmit} className="login">
                    <input type="text" name="name" 
                    placeholder="User Name" 
                    value={this.state.name}
                    onChange={this.onChange}/>
                    <input type="text" name="password" 
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.onChange}/>
                    <input type="submit" value="login" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

Login.defaultProps = {
    loginTitle: 'LOGIN',
    loginIcon: 'fa fa-user-o'
};
export default Login