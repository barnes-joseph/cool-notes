import React from "react";
import {BsPencilSquare} from 'react-icons/bs'
import { LogoDiv,Span } from "./Styled";
import {Link} from 'react-router-dom'

const Logo = () => {
    return (
      <div style={{ alignSelf: "start" }}>
        <Link to="/notes" style={{ 'textDecoration': "none" }}>
          <LogoDiv>
            <BsPencilSquare size={40} fill="green" />
            <Span item="cool">cool</Span>
            <Span item="notes">notes</Span>
          </LogoDiv>
        </Link>
      </div>
    );
}
export default Logo;