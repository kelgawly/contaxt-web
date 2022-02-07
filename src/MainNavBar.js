import React from 'react';
import {Navbar, Container} from 'react-bootstrap/';
import {NavLink} from "react-router-dom";
import './mainNavBarStyle.css';
class MainNavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                        <img 
                        src='/logo.png'
                        height="50"
                        className='d-inline-block align-center'
                        alt='Contaxt Logo'
                        ></img> 
                        </NavLink>
                        
                    </Navbar.Brand>
                    <Navbar.Collapse className='justify-content-end'>
                        
                        <NavLink activeClassName="selected" to="/account"  >Account</NavLink>
                        
                            
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default MainNavBar;