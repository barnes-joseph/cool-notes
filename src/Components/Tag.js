import {BsPencil,BsTrash} from 'react-icons/bs'
import { TagDiv,TagEdit } from './Styled';
import React,{useState,useEffect,useRef,useContext} from 'react'
import {UpdateTag,FetchTag} from '../API/tags-api'
import {Auth} from '../Components/Auth'

const Tag = ({name,id,edit,setEdit,deleteTag}) => {
    const [modify,setModify] = useState(false)
    const [updatedTag,setUpdatedTag] = useState({'new_name':''})
    const [tag,setTag]  = useState(null)
    const ref = useRef()
    const {fetchToken} = useContext(Auth)
    const headers = new Headers()
    headers.append("Content-Type","application/json")
    headers.append("Authorization",`Bearer ${fetchToken()}`)
    // useEffect(()=>{
    //   console.log(ref.current)
    // },[]) 
  
  const onUpdateTag = (e) => {
    const {name,value} = e.target
    setUpdatedTag(prevTag=>{
      return {...prevTag,[name]:value}
      })
    }

    const onUpdate = () => {
      UpdateTag(id,headers,updatedTag,setModify,setTag)
    }

    const onClick = (e) => {
      console.log(ref.current.id === id)
      console.log(ref.current.id == id)
      console.log(e.target.parentNode.id);
      console.log(e.target.parentNode)
      setEdit(true)
      if(edit && ref.current.id === e.target.parentNode.id){
        setModify(true)
      }
    }

    return (
      <TagDiv id={id} ref={ref}>
        {!modify ? (
          <React.Fragment>
            <span>{tag !== null ? tag.name : name}</span>
            <TagEdit id={id}>
                <BsPencil color="black" onClick={onClick}/>
                <BsTrash color="black" onClick={()=>deleteTag(id)}/>
            </TagEdit>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <input
              placeholder={name}
              onChange={onUpdateTag}
              name="new_name"
              style={{
                border: "none",
                height: "80%",
                width: "60%",
                borderRadius: "5px",
                fontSize: "1rem",
                paddingLeft: "5px",
              }}
              type="text"
            />
            <TagEdit id={id}>
              <BsPencil color="black" onClick={onUpdate} />
              <span onClick={() => setModify(false)}>x</span>
            </TagEdit>
          </React.Fragment>
        )}
      </TagDiv>
    );
}
export default Tag