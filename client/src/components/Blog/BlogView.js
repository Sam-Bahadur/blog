import React, { Component } from 'react'
import {getBlogWithAuthor} from '../../actions'
import { connect } from 'react-redux';


class BlogView extends Component {

    componentDidMount(){
        this.props.dispatch(getBlogWithAuthor(this.props.match.params.id))
    }

    renderBlog = (blogs)=>(
        blogs.blog ?
        <div className="br_container">
        <div className="br_header">
        <h2>{blogs.blog.title}</h2>
        <h5>Author: {blogs.blog.author}</h5>
        </div>
        <div className="blog_image">
                <img 
                src={`/uploads/${blogs.blog._id}.jpg`} 
                onError={(e) => {
                    e.target.src = "https://source.unsplash.com/collection/190727/800x600" }}
                alt=""/>
            </div>
        <div className="br_review">
            <h5>{blogs.blog.description}</h5>
        </div>
        </div>
        :null
    )

    render() {
        let blogs = this.props.blogs;
        return (
            <div style={{'white-space': 'pre-line'}}>
                {this.renderBlog(blogs)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        blogs:state.blogs
    }
}

export default connect(mapStateToProps)(BlogView)