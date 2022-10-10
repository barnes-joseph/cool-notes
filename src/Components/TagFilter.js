import React from 'react'
import {FilterDiv,FilterTag} from '../Components/Styled'

const TagFilter = ({tag,filter,onClick,noClose}) => {
    return (
        <FilterDiv filter={filter}>
            <FilterTag>{tag}</FilterTag>
            {!noClose ? <span id={tag} onClick={onClick}>x</span>:null}
            
        </FilterDiv>
    )
}

export default TagFilter
