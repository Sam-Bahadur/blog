import React from 'react'

export default function User(props) {
    let user = props.user.login;
    return (
        <div className="user_container">
            <div className="avatar">
                <img src= {
    "img_author/" + user.name.toLowerCase() + ".png"}
 onError={(e) => {
    e.target.src = "img_author/avatar.png" }}/>
            </div>
            <div className="nfo">
                <div>
                Name:  {user.name} {user.lastname} <br></br>
                </div>
                <div>
                Email:{user.email}<br></br>
                </div>
            </div>
        </div>
    )
}
