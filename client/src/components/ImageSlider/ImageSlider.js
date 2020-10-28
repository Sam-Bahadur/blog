import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export default function ImageSlider(blogs) {
    return (
        <Carousel>
        <Carousel.Item>
        <Link to={`/blogs/5f957c06495a4c0b143352cb`}>
            <img
            className="d-block w-100 custom_carosel"
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt="First slide"
            />
            </Link>
            <Carousel.Caption>
            {/* <Link to={`/blogs/${blogs._id}`} className="book_item">
            </Link> */}
            <h3>{blogs.title}</h3>
            <p>FIrst item is here</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to={`/blogs/5f957c06495a4c0b143352cb`}>
            <img
            className="d-block w-100 custom_carosel"
            src="https://source.unsplash.com/collection/190728/1600x900"
            alt="First slide"
            />
            </Link>
            <Carousel.Caption>
            {/* <Link to={`/blogs/${blogs._id}`} className="book_item">
            </Link> */}
            <h3>{blogs.title}</h3>
            <p>FIrst Second item</p>
            </Carousel.Caption>
        </Carousel.Item>
</Carousel>
    )
}
