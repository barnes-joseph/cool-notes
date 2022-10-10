import React,{useState,useContext,useEffect} from 'react'
import { Label,CreateNoteDiv,CreateNoteForm,TextArea,NoteInput,Save,SelectTag,Back} from '../Components/Styled'
import Logo from '../Components/Logo'
import { GiCheckMark } from 'react-icons/gi'
import {PostNote} from '../API/notes-api'
import { AddTagToNote,FetchTags } from '../API/tags-api'
import {Auth} from '../Components/Auth'
import {Navigate,Link} from 'react-router-dom'
import TagFilter from '../Components/TagFilter'
import {BiArrowBack} from 'react-icons/bi'

const CreateNote = () => {
    const [saved,setSaved] = useState(false)
    const [note,setNote] = useState({'title':'','content':''})
    const [tags,setTags] = useState([])
    const [selectedTags,setSelectedTags] = useState([])
    const [unauthorized,setUnauthorized] = useState(false)
    const [loading,setLoading] = useState(false)
    const {fetchToken,signOut} = useContext(Auth)
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    headers.append('Authorization',`Bearer ${fetchToken()}`)

    const onNoteChange = (e) => {
      const {name,value} = e.target
      setNote(prevNote=>{
        return {...prevNote,[name]:value}
      })
    }

    // const onTagChange = (e) => {
    //   const {value} = e.target
    //   console.log(value)
    //   if(value){
    //     setTags((prevTags) => {
    //       return [...prevTags, value];
    //     });
    //   }
    //   else{
    //     setTags(prevTags=>{
    //       return prevTags.splice(prevTags.indexOf(value),1)
    //     })
    //   }
    //   console.log(tags)
    // }
    const handleSelect = (e) => {
      if(e.target.value !== 'no-value'){
        if(!selectedTags.includes(e.target.value)){
          setSelectedTags(prevSelectedTags=>{
            return [...prevSelectedTags,{'name':e.target.value}]
          })
        }
      }
    }

    const onRemoveTag = (e) => {
      setSelectedTags(prevSelectedTags=>{
        for (const tag of prevSelectedTags){              
        if(e.target.id === tag.name){
          return [...prevSelectedTags].filter((tag) => tag.name !== e.target.id); 
        }}
      })
    }
    const onSaveNote = (e) => {
      e.preventDefault()
      setLoading(true)
      const noteData = {'note':note,'tags':selectedTags}
      console.log(noteData)
      PostNote(headers,noteData,setLoading,setSaved)
    }

    useEffect(()=>{
      FetchTags(headers,setTags,setUnauthorized,signOut)
    },[])

    return !unauthorized ? (
      <CreateNoteDiv>
        <Logo />
        <CreateNoteForm onSubmit={onSaveNote}>
          <Link to="/notes" style={{ textDecoration: "none" }}>
            <Back style={{ marginBottom: "0.5rem" }}>
              <BiArrowBack size={20} color="white" />
              <span style={{ color: "white", fontWeight: "bold" }}>Back</span>
            </Back>
          </Link>
          <Label>Title</Label>
          <NoteInput
            type="text"
            name="title"
            onChange={onNoteChange}
            required
          />
          <Label>Body</Label>
          <TextArea name="content" onChange={onNoteChange} required />
          <Label htmlfor="tags">Tags</Label>
          <div style={{ display: "flex", color: "white" }}>
            {selectedTags.map((tag) => {
              return <TagFilter tag={tag.name} onClick={onRemoveTag} />;
            })}
          </div>
          {/* <NoteInput type="text"/> */}
          <SelectTag name="selectedTags" id="tags" onChange={handleSelect}>
            <option value="no-value">Select a Tag</option>
            {tags.map((tag) => {
              return (
                <option value={tag.name} key={tag.id}>
                  {tag.name}
                </option>
              );
            })}
          </SelectTag>
          <Save>
            {!loading ? (
              saved ? (
                <>
                  <GiCheckMark color="green" />
                  saved
                </>
              ) : (
                <input
                  type="submit"
                  value="save"
                  style={{
                    border: "none",
                    background: "none",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                />
              )
            ) : (
              <button
                style={{ border: "none", background: "none", color: "white" }}
              >
                saving...
              </button>
            )}
          </Save>
        </CreateNoteForm>
      </CreateNoteDiv>
    ) : (
      <Navigate to="/login" />
    );
}

export default CreateNote
