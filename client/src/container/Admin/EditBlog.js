import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { getBlog, updateBlog, clearBlog, deleteBlog } from './../../actions/index';

class EditBlog extends PureComponent {

    state={
        formdata:{
            _id:this.props.match.params.id,
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

    submitForm=(e)=>{
        e.preventDefault();
        this.props.dispatch(updateBlog(this.state.formdata))
    }

    deletePost =()=>{
        this.props.dispatch(deleteBlog(this.props.match.params.id))
    }
    redirectUser =()=>{
        setTimeout(()=>{
            this.props.history.push('/user/user_blogs')
        },1000)
    }

    componentWillMount(){
        this.props.dispatch(getBlog(this.props.match.params.id)) 
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        let blog = nextProps.blogs.blog;
        this.setState({
            formdata:{
                _id:blog._id,
                title: blog.title,
                author: blog.author,
                description: blog.description
            }
        })
    }
    componentWillUnmount(){
        this.props.dispatch(clearBlog())
    }
    render() {
        let blogs = this.props.blogs;
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    {
                        blogs.updateBlog ? 
                        <div className="edit_confirm">
                            post updated,
                            <Link to={`/blogs/${blogs.blog._id}`}>
                                click here for the updated post
                            </Link>
                        </div>
                        :null
                    }
                    {
                        blogs.postDeleted ? 
                        <div className="red_tag">
                            post deleted
                            {this.redirectUser()}
                        </div> : null
                        }
                <h2>Edit the Blog</h2>
                <button type="submit">Update Blog</button>
                <div className="form_element">
                <input type="text" placeholder="Authors Name" 
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
                onChange={(event)=>this.handleInput(event,'description')}/>

                <button type="submit">Update Blog</button>


                <div className="delete_post">
                    <div className="button">
                        
                <div onClick={this.deletePost}>
                    Delete Blog
                </div>
                    </div>

                </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        blogs:state.blogs
    }
}

export default connect(mapStateToProps)(EditBlog)
