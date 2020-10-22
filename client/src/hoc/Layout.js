import React from 'react'
import Header from './../components/Header/Header';

export default function Layout(props) {
    return (
        <div>
            <Header />
            <div>
                {props.children}
            </div>
        </div>
    )
}
