import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { addBlog, clearNewBlog } from '../../actions'
import axios from 'axios'
import Upload from './Upload';


class AddBlog extends Component {

    state={
        formdata:{
            title:'',
            author:'',
            description:''
        }
    }
handleInput=(event,name)=>{
    const newFormdata = {...this.state.formdata}
    newFormdata[name] = event.target.value;
    this.setState({
        formdata:newFormdata
    })
}


    submitForm= (e)=>{
        e.preventDefault();
        console.log(this.state.formdata);
        this.props.dispatch(addBlog({
            ...this.state.formdata,
            ownerId: this.props.user.login.id
        }))
    }


    componentWillUnmount(){
        this.props.dispatch(clearNewBlog())
    }

    showNewBlog = (blog) =>(
        
        blog.post ?
        <>
        <Upload blogid= {this.props.blogs.newblog.blogId}/>
        <div className="conf_link">
            {console.log(this.props.blogs.newblog)}
            Done!!! <Link to={`/blogs/${blog.blogId}`}>
                Click here to see the post
            </Link>
        </div>
        </>
        : null
    )

    render() {
        return (
            <>
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                <h2>Add a Blog</h2>
                <div className="form_element">
                <input type="text" placeholder="enter your name" 
                value={this.state.formdata.author}
                onChange={(event)=>this.handleInput(event,'author')}/>
                </div>
                <div className="form_element">
                <input type="text" placeholder="enter title of the blog" 
                value={this.state.formdata.title}
                onChange={(event)=>this.handleInput(event,'title')}/>
                </div>
                <textarea 
                value={this.state.formdata.description}
                placeholder="enter the blog" 
                onChange={(event)=>this.handleInput(event,'description')}/>
                <div className="form_element">
                {/* <Upload /> */}
                </div>
                <button type="submit">add blog</button>
                </form>
                {
                    this.props.blogs.newblog ? 
                    this.showNewBlog(this.props
                        .blogs.newblog)
                        :null
                    }
                
            </div>
                    </>
        )
    }
}

function mapStateToProps(state){
    return{
        blogs:state.blogs
    }
}

export default connect(mapStateToProps)(AddBlog)
