import NoteCard from "../Components/NoteCard";
import Logo from "../Components/Logo";
import NoteHeader from "../Components/NoteHeader";
import {AllNotes,NotesContainer,MainContent,Bar,TopSection,TagSideBar} from "../Components/Styled"
import TagSide from "../Components/TagSide";
import { useState } from "react";

const Notes = () => {
    const [displayTags,setDisplayTags] = useState(false)
    const DisplayTags = () => {
        setDisplayTags(!displayTags)
    }

  return (
    <NotesContainer>
      <TopSection>
        <Logo />
        <NoteHeader onClick={DisplayTags}/>
      </TopSection>
      <MainContent>
        <TagSide/>
        {displayTags && <TagSideBar>
            <TagSide/>
            </TagSideBar>}
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
