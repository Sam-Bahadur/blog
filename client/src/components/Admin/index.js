import React from 'react'

export default function User(props) {
    let user = props.user.login;
    return (
        <div className="user_container">
            <div className="nfo">
                <div>
                name:{user.name} <br></br>
                </div>
                <div>
                lastname:{user.lastname}<br></br>
                </div>
                <div>
                email:{user.email}<br></br>
                </div>
            </div>
        </div>
    )
}
