import React from 'react';
import { Navbar,Nav, Container, Button } from 'react-bootstrap/';
import { NavLink } from "react-router-dom";
import './mainNavBarStyle.css';
import { getAuth } from "firebase/auth";


// onAuthStateChanged(auth, (user) => {

//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

class AccountLink extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
        this.auth = getAuth();
        this.logout = () => { this.auth.signOut() }
    }

    componentDidMount() {
        this.auth.onAuthStateChanged((user) => { this.setState({ user }) })
    }

    render() {
        return this.state.user ? <Button onClick={this.logout}>Sign Out</Button> : <Button ><a className='text-white' href="/auth">Sign in</a></Button>;
    }
};

const MainNavBar = () => (
    <Navbar collapseOnSelect bg="dark" variant="dark" >
        <Container>
            <Navbar.Brand>
                <NavLink to="/">
                    <img
                        src='/logo.png'
                        height="75"
                        className='d-inline-block align-center'
                        alt='Contaxt Logo'
                    ></img>
                </NavLink>

            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                
                <NavLink className="nav-link" to="/"> Home </NavLink>
                <NavLink className="nav-link" to="/sensor-data"> Sensor Data </NavLink>
                <AccountLink />
                



            </Navbar.Collapse>
        </Container>
    </Navbar>
)



export default MainNavBar;