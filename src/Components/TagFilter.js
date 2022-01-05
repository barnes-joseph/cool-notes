import React from 'react'
import {FilterDiv,FilterTag} from '../Components/Styled'

const TagFilter = ({tag,filter}) => {
    return (
        <FilterDiv filter={filter}>
            <FilterTag>{tag}</FilterTag>
            <span>x</span>
        </FilterDiv>
    )
}

export default TagFilter
