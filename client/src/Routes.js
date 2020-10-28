import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './hoc/Layout';
import BlogView from './components/Blog/BlogView'
import Login from './container/Admin/Login';
import Auth from './hoc/auth'
import User from './components/Admin'
import AddBlog from './container/Admin/AddBlog';
import UserPosts from './components/Admin/UserPosts';
import EditBlog from './container/Admin/EditBlog';
import Logout from './components/Admin/Logout'
import Register from './container/Admin/Register';



export default function Routes() {
    return (
        <Layout>
        <Switch>
            <Route path="/" exact component={Auth(Home,null)} />
            <Route path="/blogs/:id" exact component={Auth(BlogView,null)} />
            <Route path="/login" exact component={Auth(Login,false)} />
            <Route path="/user" exact component={Auth(User,true)} />
            <Route path="/user/logout" exact component={Auth(Logout,true)} />
            <Route path="/user/add" exact component ={Auth(AddBlog,true)}/>
            <Route path="/user/register" exact component ={Auth(Register,true)}/>
            <Route path="/user/user_blogs" exact component={Auth(UserPosts,true)} />
            <Route path="/user/edit_post/:id" exact component ={Auth(EditBlog,true)}/>
        </Switch>
            
        </Layout>
    )
}
