import React, { Component } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import Nav from './Sidenav/Nav'


export default class Header extends Component {
    state={
        showNav:false
    }

    onHideNav=()=>{
        this.setState({showNav:false})
    }
    render() {
        return (
            <header>
                <div className="open_nav">
                
                <GiHamburgerMenu 
                onClick={()=>this.setState({
                    showNav:true
                })}
                style={{
                    color:'#fff',
                    padding: '0px',
                    cursor: 'pointer',
                    fontSize: '40px',
                    marginLeft: '1rem'
                }} />

                </div> 
                <Nav 
                showNav={this.state.showNav}
                onHideNav={()=>this.onHideNav()}
                />
                <Link to="/" className="logo">BLOGS HERE</Link>
            </header>
        )
    }
}
