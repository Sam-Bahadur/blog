import React, { Component } from 'react'
import { connect } from 'react-redux';
import {loginUser} from '../../actions'


class Login extends Component {
    
    state={
        email:'',
        password:'',
        error: '',
        success: false
    }

    handelInputEmail = (event) =>{
    this.setState({
        email:event.target.value
    })
}
handelInputPassword = (event) =>{
    this.setState({
        password:event.target.value
    })
}



UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.user.login.isAuth){
     return this.props.history.push('/user')
    }
    // return null;
    // console.log(nextProps.user.login.id); 
}

// componentDidUpdate(nextProps){
//     if(nextProps.user.login.isAuth){
//      return this.props.history.push('/user')
//     }
// }

    submitForm= (e) =>{
        e.preventDefault();
        this.props.dispatch(loginUser(this.state))
    }

    render() {
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                <h2>login here</h2>
                <div className="form_element">
                <input 
                type="email"
                placeholder="enter email"
                value={this.state.email}
                onChange={this.handelInputEmail}
                />                    
                </div>
                <div className="form_element">
                <input 
                type="password"
                placeholder="enter password" 
                value={this.state.password}
                onChange={this.handelInputPassword}
                />                    
                </div>
                <button type="submit">
                Log in
                </button>
                {user.login ?
                <div className="error">
                    {user.login.message}
                </div>
                :null}
            </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)