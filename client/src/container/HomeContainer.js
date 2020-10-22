import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getBlogs} from '../actions'
import BookItem from './../widgetsUI/BookItem';


class HomeContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getBlogs(5,0,'desc'))
    }

    renderItems = (blogs) =>(
        blogs.list ? blogs.list.map(item=>(
            <BookItem {...item} key={item._id}/>
        )) :null
    )

    loadmore =()=>{
        let count = this.props.blogs.list.length;
        this.props.dispatch(getBlogs(5,count,'desc',this.props.blogs.list))
    }

    render() {
        return (
            <div>
              {this.renderItems(this.props.blogs)}
              <div onClick={this.loadmore} className="loadmore">
                  Load more
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(HomeContainer)