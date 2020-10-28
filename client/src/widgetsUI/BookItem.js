import React from 'react'
import {Link} from 'react-router-dom'

export default function BookItem(item) {
    return (
        
        <>
                <div className="blog_card">
                <div className="flex_image">
                    <img src="https://source.unsplash.com/collection/190727/800x600" alt="" srcset=""/>
                </div>
                <div className="flex_desc">
                <Link to={`/blogs/${item._id}`} className="book_item">
                    <div className="book_header">
                    <h2>{item.title}</h2>
                    </div>
                    <div className="book_items">
                    <div className="book_author">
                    {item.author}
                    </div>
                    {item.description.slice(0,60)}...
                    </div>
                </Link>
                </div>
                </div>
        </>
    )
}
