import React from 'react'
import {NoteHead,TagSpan,NoteSpan,AddNote,SearchTitle,Menu} from '../Components/Styled'
import {GiHamburgerMenu} from 'react-icons/gi'

const NoteHeader = ({onClick}) => {
    return (
        <NoteHead>
            <Menu onClick={onClick}><GiHamburgerMenu size={25}/></Menu>
            <TagSpan>Tags</TagSpan>
            <NoteSpan>Notes</NoteSpan>
            <AddNote>+</AddNote>
            <SearchTitle type='search' placeholder='search title'/>
        </NoteHead>
    )
}

export default NoteHeader
