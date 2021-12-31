import React from "react";
import { FaRegEdit } from "react-icons/fa";
import {BsPencilSquare} from 'react-icons/bs'
import { LogoDiv,Span } from "./Styled";

const Logo = () => {
    return(
        <LogoDiv>
            <BsPencilSquare size={40} fill='green'/><Span item='cool'>cool</Span><Span item='notes'>notes</Span>
        </LogoDiv>
    )
}
export default Logo;