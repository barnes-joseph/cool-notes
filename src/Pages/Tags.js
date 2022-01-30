import Tag from "../Components/Tag";
import Logo from "../Components/Logo";
import { TagInput,TagInputDiv,TagAdd,TagsContainer,AllTags,TagsDiv } from "../Components/Styled";
import { CreateTag,FetchTags,DeleteTag } from "../API/tags-api";
import {useState,useEffect,useContext} from 'react'
import {Navigate} from 'react-router-dom'
import { Auth } from "../Components/Auth";

const Tags = () => {
  const [tags,setTags] = useState([])
  const [tag,setTag] = useState({'name':''})
  const {fetchToken,signOut} = useContext(Auth)
  const [edit,setEdit] = useState(false)
  const [unauthorized,setUnauthorized] = useState(false)
  const headers = new Headers()
  headers.append("Content-Type","application/json")
  headers.append("Authorization",`Bearer ${fetchToken()}`)

  const onTagChange = (e) => {
    setTag(prevTag=>{
      return {...prevTag,[e.target.name]:e.target.value}
    })
  }

  const onAddTag = () => {
    CreateTag(headers,tag)
    FetchTags(headers,setTags,setUnauthorized,signOut)
  }

  const onDeleteTag = (id) => {
    DeleteTag(parseInt(id),headers)
  }

  useEffect(()=>{
    FetchTags(headers,setTags,setUnauthorized,signOut)
  },[])
    return (
      !unauthorized ?
      <TagsContainer>
        <Logo />
        <TagsDiv>
          <TagInputDiv>
            <TagInput
              placeholder="New Tag"
              name="name"
              onChange={onTagChange}
            />
            <TagAdd onClick={onAddTag}>+</TagAdd>
          </TagInputDiv>
          <h2>Tags</h2>
          <AllTags>
            {tags.map((tag) => {
              return (
                <Tag
                  name={tag.name}
                  key={tag.id}
                  id={tag.id}
                  edit={edit}
                  setEdit={setEdit}
                  deleteTag={onDeleteTag}
                />
              );
            })}
          </AllTags>
        </TagsDiv>
      </TagsContainer> :
      <Navigate to='/login'/>
    );
}
export default Tags;