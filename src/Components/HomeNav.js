import React from 'react'
import Logo from './Logo'
import {Nav,NavButton} from '../Components/Styled'
import {Link} from 'react-router-dom'

const HomeNav = () => {
    return (
      <Nav>
        <Logo />
        <div>
          <Link to="/login">
            <NavButton>Login</NavButton>
          </Link>
          <Link to='/register'>
            <NavButton>Sign Up</NavButton>
          </Link>
        </div>
      </Nav>
    );
}

export default HomeNav
