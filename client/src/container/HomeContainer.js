import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getBlogs} from '../actions'
import BookItem from './../widgetsUI/BookItem';
import ImageSlider from './../components/ImageSlider/ImageSlider';


class HomeContainer extends Component {
    constructor(){
        super();
        this.state={
            search : ''
        };
    }

    updateSearch(event){
        this.setState({
            search: event.target.value.substr(0,20)
        })
        console.log(this.state.search);
    }
    componentDidMount(){
        this.props.dispatch(getBlogs(5,0,'desc'))
    }

    renderItems = (blogs) => (
                blogs.list ? blogs.list.map(item=>(
                <>
            <BookItem {...item} key={item._id}/>
            <div className="blog_card_dividor"></div>
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
        let  filteredTitle = this.props.blogs;
        return (
            <>
            <div className="home_div">
            {this.imageSlide(this.props.blogs)}
            <div className="home_content">
                <div className="blog_name_container">
                <span>Blog Posts</span> 
                {/* <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}></input> */}
                </div>
              {/* {this.renderItems(this.props.blogs)} */}
              {this.renderItems(filteredTitle)}
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