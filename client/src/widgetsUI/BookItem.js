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
                        <div className="blog_author_img">
                            <div className="blog_author_img_img">
                            <img className="small_pic" 
                            src={ 
                            "img_author/" + item.author + ".png" ? "img_author/" + item.author + ".png" :
                            "img_author/avatar.png"} alt=""/>
                            </div>
                            <div className="book_author">
                               {item.author}
                            </div>
                        </div>
                    <div className="book_desc">
                    {item.description.slice(0,60)}...
                    </div>
                    </div>
                </Link>
                </div>
                </div>
        </>
    )
}
