import NoteCard from "../Components/NoteCard";
import Logo from "../Components/Logo";
import NoteHeader from "../Components/NoteHeader";
import {AllNotes,NotesContainer,MainContent,Bar,TopSection,TagSideBar,NavButton} from "../Components/Styled"
import TagSide from "../Components/TagSide";
import MobileTagSide from "../Components/MobileTagSide";
import { useState,useRef, useEffect,useContext } from "react";
import {Navigate} from 'react-router-dom'
import {FetchNotes,DeleteNote} from '../API/notes-api'
import {FetchTags} from '../API/tags-api'
import {Auth} from '../Components/Auth'
import { Link } from "react-router-dom";

const Notes = () => {
    const [displayTags,setDisplayTags] = useState(false)
    const [notes,setNotes] = useState([])
    const [tags,setTags] = useState([])
    const [title,setTitle] = useState(false)
    const [search,setSearch] = useState(false)
    const [searchedNotesByTitle,setSearchedNotesByTitle] = useState([])
    const [searchedNotesByFilter,setSearchedNotesByFilter] = useState([])
    const [searchedTag,setSearchedTag] = useState(false)
    const {fetchToken,signOut} = useContext(Auth)
    const [unauthorized,setUnauthorized] = useState(false)
    const ref = useRef();
    const headers = new Headers()
    headers.append("Content-Type","application/json")
    headers.append("Authorization",`Bearer ${fetchToken()}`)

    const DisplayTags = () => {
        setDisplayTags(!displayTags)
    }
    
    const checkIfClickedOutside = (e) => {
      if (displayTags && ref.current && !ref.current.contains(e.target)) {
        setDisplayTags(false);
      }
    };

    const searchByTitle = (e) => {
      if(e.target.value !== ''){
        const searched_note = notes.filter(note=>note.title === e.target.value)
        setSearch(true)
        setTitle(true)
        setSearchedNotesByTitle(searched_note)
        console.log(notes.filter(note => note.title === e.target.value))  
      }
      else{
        setSearch(false)
        setTitle(false)
      }
  }
    const searchByFilter = (e) => {
      console.log(e.target.value)
      if(e.target.value !== ''){
        setSearch(true)
        setSearchedTag(true)
        setSearchedNotesByFilter(notes.filter(note=>note.tags.some(searchedTag)))
    }
    else{
      setSearch(false)
      setSearchedTag(false)
    }
  }

  const onDelete = (id) => {
    DeleteNote(parseInt(id),headers)
  }

  const onSignOut = () => {
    signOut()
    setUnauthorized(true)
  }

    useEffect(()=>{
      document.addEventListener("mousedown",checkIfClickedOutside)
      return ()=>{
        document.removeEventListener("mousedown",checkIfClickedOutside)
      }
    },[displayTags])

    useEffect(()=>{
      FetchNotes(headers,setNotes,setUnauthorized,signOut)
      FetchTags(headers,setTags,setUnauthorized,signOut)
    },[])

  return !unauthorized ? (
    <NotesContainer>
      <TopSection>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <Logo />
          <NavButton onClick={onSignOut}>Sign Out</NavButton>
        </div>
        <NoteHeader onClick={DisplayTags} onChange={searchByTitle} />
      </TopSection>
      <MainContent>
        {displayTags && (
          <TagSideBar ref={ref}>
            <MobileTagSide tags={tags} onChange={searchByFilter} />
          </TagSideBar>
        )}
        <TagSide tags={tags} onChange={searchByFilter} />
        <Bar></Bar>
        <AllNotes>
          {!search
            ? notes.map((note) => {
                return (
                  <NoteCard
                    title={note.title}
                    text={note.content}
                    key={note.id}
                    id={note.id}
                    DeleteNote={onDelete}
                  />
                );
              })
            : searchedTag
            ? searchedNotesByFilter.map((note) => {
                return (
                  <NoteCard
                    title={note.title}
                    text={note.content}
                    key={note.id}
                    id={note.id}
                    DeleteNote={onDelete}
                  />
                );
              })
            : title
            ? searchedNotesByTitle.map((note) => {
                return (
                  <NoteCard
                    title={note.title}
                    text={note.content}
                    key={note.id}
                    id={note.id}
                    DeleteNote={onDelete}
                  />
                );
              })
            : null}
        </AllNotes>
      </MainContent>
    </NotesContainer>
  ) : (
    <Navigate to="/login" />
  );
};
export default Notes;
