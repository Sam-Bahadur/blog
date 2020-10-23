import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { getUsers, userRegister} from '../../actions'

class Register extends PureComponent {
    state ={
        name: '',
        lastname:'',
        email:'',
        password:'',
        error:''
    }

    componentWillMount(){
        this.props.dispatch(getUsers())
    }
    handelInputEmail=(event)=>{
        this.setState({email:event.target.value})
    }
    handelInputPassword=(event)=>{
        this.setState({password:event.target.value})
        
    }
    handelInputName=(event)=>{
        this.setState({name:event.target.value})
        
    }
    handelInputLastname=(event)=>{
        this.setState({lastname:event.target.value})

    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.user.register === false){
            this.setState({error:"error! try again"})
        }
        else{
            this.setState({
                name:'',
                lastname:'',
                email:'',
                password:'',
            })
        }

    }

    submitForm = (event)=>{
        event.preventDefault();
        this.setState({error:''});
        this.props.dispatch(userRegister({
            email:this.state.email,
            password:this.state.password,
            name: this.state.name,
            lastname:this.state.lastname
        },this.props.user.users))
    }
    showUsers =(user) =>(
        user.users ? user.users.map(item=>(
                
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                </tr>
            ))
        :null
    )

    render() {
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form  onSubmit={this.submitForm}>
                <h2>Add User</h2>
                <div className="form_element">
                    <input 
                    type="text"
                    placeholder="enter name"
                    value={this.state.name}
                    onChange={this.handelInputName}
                    />
                    <input 
                    type="text"
                    placeholder="enter last name"
                    value={this.state.lastname}
                    onChange={this.handelInputLastname}
                    />
                    <input 
                    type="email"
                    placeholder="enter email"
                    value={this.state.email}
                    onChange={this.handelInputEmail}
                    />
                    <input 
                    type="password"
                    placeholder="enter password"
                    value={this.state.password}
                    onChange={this.handelInputPassword}
                    />
                    <button type="submit"> Add user</button>
                    <div className="error">
                        {this.state.error}
                    </div>
                </div>

                </form>
                <div className="current_users">
                    <h4>Current users:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>last name</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showUsers(user)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Register)