import React from 'react'
import {Link} from 'react-router-dom'

export default function BookItem(item) {
    return (
        <Link to={`/blogs/${item._id}`} className="book_item">
            <div className="book_header">
            <h2>{item.title}</h2>
            </div>
            <div className="book_items">
            <div className="book_author">
            {item.author}
            </div>
            </div>
        </Link>
    )
}
