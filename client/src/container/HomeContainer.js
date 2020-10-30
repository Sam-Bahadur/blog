import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getBlogs} from '../actions'
import BookItem from './../widgetsUI/BookItem';
import { Link } from 'react-router-dom';
import ImageSlider from './../components/ImageSlider/ImageSlider';
import SidenavItems from './../components/Header/Sidenav/Sidenav_items';


class HomeContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getBlogs(5,0,'desc'))
    }

    renderItems = (blogs) =>(
        blogs.list ? blogs.list.map(item=>(
            <>
            <BookItem {...item} key={item._id}/>
            </>
        )) :null
    )
    imageSlide = (blogs)=>(
            <>
            <ImageSlider />
            </>
        )

    loadmore =()=>{
        let count = this.props.blogs.list.length;
        this.props.dispatch(getBlogs(5,count,'desc',this.props.blogs.list))
    }

    render() {
        return (
            <>
            <div className="home_div">
            {this.imageSlide(this.props.blogs)}

            <div className="home_content">
                <div className="blog_name_container">
                <span>Blog Posts</span> 
                </div>
              {this.renderItems(this.props.blogs)}
              <div onClick={this.loadmore} className="loadmore_alt"
            //   className="loadmore"> 
            >
                  Load more >
                </div>
            </div>
            </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(HomeContainer)