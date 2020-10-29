import React, { Component } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import Nav from './Sidenav/Nav'
import SidenavItems from './Sidenav/Sidenav_items';


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
                <Link to="/" className="logo">
                    <img src="logo512.png" alt=""/>
                </Link>
                <div className="navbar_bigscreen">
            <SidenavItems />
            </div>
            </header>
        )
    }
}
