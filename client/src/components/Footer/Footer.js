import React from 'react'

export default function Footer() {
    return (
        <>
        <div className="footer_container">
        <div className="footer_div_two">
            <div className="logo1">
            <h1>In partnership with</h1>
                <img src={'images/left.png'} alt=""/>
            </div>
            <div className="logo2">
            <h1></h1>
                <img src="images/middle.jpg" alt=""/>
            </div>
            <div className="logo3">
            <h1>In collaboration with</h1>
                <img src="images/right.png" alt=""/>
            </div>
        </div>
        </div>
        <div className="footer_div">
            <h4>copyright 2020</h4>
        </div>
        <div className="footer_div_media">
            <h6>developed by <span>	&#169;mayan media</span></h6>
        </div>
        </>
    )
}
