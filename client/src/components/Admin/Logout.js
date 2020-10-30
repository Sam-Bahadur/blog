import React from 'react';
import axios from 'axios';

export default function Logout(props) {

    const request = axios.get(`/api/logout`)
    .then(request =>{
        setTimeout(()=>{
            props.history.push('/')
        },2000)

    })
    return (
        <div>
            <h1>See you again</h1>
        </div>
    )
}
