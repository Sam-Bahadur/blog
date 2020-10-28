import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getUserPosts} from '../../actions'
import { Link } from 'react-router-dom';

class UserPosts extends Component {
    componentWillMount(){
        this.props.dispatch(getUserPosts(this.props.user.login.id))
    }
    showUserPosts=(user)=>(
        user.userPosts ? 
        user.userPosts.map(item =>(
        
            <div key={item._id} className="user_blog">
                <li>
                <Link to={`/user/edit_post/${item._id}`}>
                    {item.title}
                </Link>
                </li>
            </div>
            
        ))
        :null
        )
        render() {
            let user = this.props.user;
        console.log(this.props);
        return (
            <div className="user_blogs">
                <h4>Your Blogs:</h4>
                {this.showUserPosts(user)}
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(UserPosts)