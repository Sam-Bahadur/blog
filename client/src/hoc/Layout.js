import React from 'react'
import Header from './../components/Header/Header';
import Footer from '../components/Footer/Footer'

export default function Layout(props) {
    return (
        <div>
            <Header />
            <div className="home_div">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
