import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


const SidenavItems = ({user}) => {
    const items =[
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted: false
        },
        {
            type:'navItem',
            icon:'home',
            text:'My profile',
            link:'/user',
            restricted: true
        },
        {
            type:'navItem',
            icon:'home',
            text:'Add User',
            link:'/user/register',
            restricted: false
        },
        {
            type:'navItem',
            icon:'home',
            text:'Login',
            link:'/login',
            restricted: false,
            exclude: true
        },
        {
            type:'navItem',
            icon:'home',
            text:'My Blogs',
            link:'/user/user_blogs',
            restricted: true
        },
        {
            type:'navItem',
            icon:'home',
            text:'Add Blog',
            link:'/user/add',
            restricted: true
        },
        {
            type:'navItem',
            icon:'home',
            text:'Log out',
            link:'/user/logout',
            restricted: true
        }
    ]

    const element = (item,i) =>(
        <div key={i} className={item.type}>
                <Link to={item.link}>
                {item.text}
            </Link>
                </div>
    )
    const showItems=()=>(
        user.login ? 
        items.map((item,i)=>{
            if(user.login.isAuth){
                return !item.exclude ?
                element(item,i)
                :null
            }
            else{
                return !item.restricted ? 
                element(item,i)
                :null
            }
            // return element(item,i)
        })
        :null
    )
    return (
        <div className="navbar_bigscreen">
            {showItems()}
        </div>
    )
}



function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(SidenavItems)