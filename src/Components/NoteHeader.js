import React from 'react'
import {NoteHead,TagSpan,NoteSpan,AddNote,SearchTitle,Menu} from '../Components/Styled'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const NoteHeader = ({onClick,onChange}) => {
    return (
      <NoteHead>
        <Menu onClick={onClick}>
          <GiHamburgerMenu size={25} />
        </Menu>
        <Link to="/tags">
          <TagSpan>Tags</TagSpan>
        </Link>
        <NoteSpan>Notes</NoteSpan>
        <Link to="/create_note">
          <AddNote>+</AddNote>
        </Link>
          <SearchTitle
            type="search"
            name="search"
            placeholder="search by title"
            onChange={onChange}
          />
      </NoteHead>
    );
}

export default NoteHeader
