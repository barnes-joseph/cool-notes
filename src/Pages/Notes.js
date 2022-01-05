import NoteCard from "../Components/NoteCard";
import Logo from "../Components/Logo";
import NoteHeader from "../Components/NoteHeader";
import {AllNotes,NotesContainer,MainContent,Bar,TopSection,TagSideBar} from "../Components/Styled"
import TagSide from "../Components/TagSide";
import MobileTagSide from "../Components/MobileTagSide";
import { useState,useRef, useEffect } from "react";

const Notes = () => {
    const [displayTags,setDisplayTags] = useState(false)
    const DisplayTags = () => {
        setDisplayTags(!displayTags)
    }
    const ref = useRef()

    const checkIfClickedOutside = (e) => {
      if (displayTags && ref.current && !ref.current.contains(e.target)) {
        setDisplayTags(false);
      }
    };


    useEffect(()=>{
      document.addEventListener("mousedown",checkIfClickedOutside)
      return ()=>{
        document.removeEventListener("mousedown",checkIfClickedOutside)
      }
    },[displayTags])
  return (
    <NotesContainer>
      <TopSection>
        <Logo />
        <NoteHeader onClick={DisplayTags} />
      </TopSection>
      <MainContent>
        {displayTags && (
          <TagSideBar ref={ref}>
            <MobileTagSide />
          </TagSideBar>
        )}
        <TagSide />
        <Bar></Bar>
        <AllNotes>
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
          <NoteCard
            title="Cool Stuff"
            text="This is a random note. Welcome to my first note created.lskmdfoai alkdf aldkmf lakmdf alkdf lkmokm lkmmom lkmoij ;kmmio lkoij lkoi lkmoij lkojji lknoi lknnok. ;knmoi lknoij lkoij ;lknok ;lknioj ;lknon ;lkno "
          />
        </AllNotes>
      </MainContent>
    </NotesContainer>
  );
};
export default Notes;
