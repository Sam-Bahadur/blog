import React, { Component } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import Nav from './Sidenav/Nav'
import SidenavItems from './Sidenav/Sidenav_items';


export default class Header extends Component {
    state={
        showNav:false
    }

    showBurger =()=>{
        return <>
          <div className="open_nav">
        <GiHamburgerMenu 
        onClick={()=>this.setState({
            showNav:true
        })}
        style={{
            color:'#000',
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
        </>
    }

    showNormalNav=()=>{
        return <div>
        <SidenavItems />
        </div>
    }

    onHideNav=()=>{
        this.setState({showNav:false})
    }
    render() {
        return (
            <>
            <header>
                <Link to="/" className="logo">
                Upholding Rights of minorities Beyond Borders <br></br> South Asia (URMB)
                </Link>
            </header>
               {window.innerWidth < 768 ? 
               this.showBurger() : 
               this.showNormalNav()}
               </>
        )
    }
}
