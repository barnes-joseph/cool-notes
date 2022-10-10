import React,{useState,useContext,useEffect} from 'react'
import Logo from '../Components/Logo'
import {BiArrowBack} from 'react-icons/bi'
import { BsTrash,BsPencil } from "react-icons/bs";
import {Note,NoteContainer,Back,Title,NoteSection,NoteContent,NoteTagSpan,NoteInput,TextArea,SelectTag,Save} from '../Components/Styled'
import TagFilter from '../Components/TagFilter';
import {Link,Navigate,useParams} from 'react-router-dom'
import {FetchTags,AddTagToNote,RemoveTagFromNote} from '../API/tags-api'
import { FetchNoteById,UpdateNote } from '../API/notes-api';
import {Auth} from '../Components/Auth'
import {GiCheckMark} from 'react-icons/gi'

const SingleNote = () => {
  const {id} = useParams()
  const [update,setUpdate] = useState(false)
  const [saved,setSaved] = useState(false)
  const [note,setNote] = useState({title:'',content:'',tags:[]})
  const [tags,setTags] = useState([])
  const {fetchToken,signOut} = useContext(Auth)
  const [unauthorized,setUnauthorized] = useState(false)
  const [updatedTags, setUpdatedTags] = useState([])
  const [updatedTitle,setUpdatedTitle] = useState('')
  const [updatedContent,setUpdatedContent] = useState("")
  const headers = new Headers()
  headers.append("Content-Type",'application/json')
  headers.append("Authorization",`Bearer ${fetchToken()}`)

  const handleSelect = (e) => {
      if(e.target.value !== 'no-value'){
        if(!note.tags.includes(e.target.value)){
          const data = {note_id:parseInt(id),tag_id:parseInt(e.target.id)}
          setUpdatedTags(prevTags=>{
            return [...prevTags,e.target.value]
          })
          AddTagToNote(headers,data)
        }
      }
    }

  const onRemoveTag = (e) => {
     const data = {note_id:parseInt(id),tag_id:parseInt(e.target.id)}
      setUpdatedTags(prevTags=>{
        return [...prevTags.splice(prevTags.indexOf(e.target.value),1)]
      })
      RemoveTagFromNote(headers,data)
    }

  const onUpdateNote = () => {
      setSaved(true)
      const updated_note =  {new_title:updatedTitle,new_content:updatedContent}
      const FetchUpdatedNote = () => {
        FetchNoteById(parseInt(id),headers,setNote,setUpdatedTitle,setUpdatedContent,setUpdatedTags)
      }
      UpdateNote(parseInt(id),headers,updated_note,setSaved,setUpdate,FetchUpdatedNote)
    }

  useEffect(()=>{
    FetchTags(headers,setTags,setUnauthorized,signOut)
    FetchNoteById(parseInt(id),headers,setNote,setUpdatedTitle,setUpdatedContent,setUpdatedTags)
   },[])

    return (
      !unauthorized ?
      <NoteContainer>
        <Logo />
        <Note>
          <Link to='/notes' style={{'textDecoration':'none'}}>
            <Back>
              <BiArrowBack size={20} color="white" />
              <span style={{ color: "white" }}>Back</span>
            </Back>
          </Link>

          <NoteSection>
            <Title>
              {!update ? <span style={{ fontWeight: "bold" }}>{note.title}</span> : <NoteInput update={true} type='text' name='title' value={updatedTitle} style={{'color':'black'}} onChange={(e)=>setUpdatedTitle(e.target.value)}/>}
              
              <div
                style={{
                  display: "flex",
                  width: "60px",
                  "justify-content": "space-between",
                }}
              >
                {!update ? <React.Fragment>
                  <BsPencil color="black" size={24} onClick={()=>{setUpdate(!update)}}/>
                <BsTrash color="black" size={24} />
                </React.Fragment> : <React.Fragment>
                  <BsPencil color="black" size={24} onClick={onUpdateNote}/>
                  <span style={{'fontSize':'1.3rem'}} onClick={()=>{setUpdate(!update)}}>x</span>
                  </React.Fragment>}
                
              </div>
            </Title>
            {!update ? <NoteContent style={{ color: "black" }}>
              {note.content}
            </NoteContent>: <TextArea update={true} value={updatedContent} name='content' onChange={(e)=>setUpdatedContent(e.target.value)}/>}
            
          </NoteSection>
          <div>
            <NoteTagSpan>Tags</NoteTagSpan>
            {!update ? 
            <div style={{ display: "flex" }}>
              {note.tags.map(tag=>{
                  return <TagFilter tag={tag.name} noClose={true}/>
                })}
            </div> : 
            <React.Fragment>
              <div style={{'display':'flex','color':'white'}}>
                {updatedTags.map(tag=>{
                  return <TagFilter tag={tag.name} onClick={onRemoveTag}/>
                })}
            </div>
            <SelectTag name='selectedTags' id='tags' onChange={handleSelect} >
              <option value='no-value'>Select a Tag</option>
              {tags.map(tag=>{
                return <option value={tag.name} key={tag.id} id={tag.id}>{tag.name}</option>
              })}
            </SelectTag>
            {/* {!update ? null : 
            <Save>
            {!loading ? (
              saved ? (
                <>
                  <GiCheckMark color="green" />
                  saved
                </>
              ) : (
                <button
                  type="submit"
                  style={{ border: "none", background: "none", color: "white" }}
                  onClick={onUpdateNote}
                >save</button>
              )
            ) : (
              <button
                style={{ border: "none", background: "none", color: "white" }}
              >saving...</button>
            )}
            </Save>
          } */}
        </React.Fragment>
        }
        </div>
        </Note>
      </NoteContainer> :
      <Navigate to='/login'/>
    );
}

export default SingleNote;
