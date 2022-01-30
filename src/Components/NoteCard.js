import { BsTrash } from "react-icons/bs";
import {NoteDiv,NoteParagraph,NoteTitle} from '../Components/Styled'
import {Link} from 'react-router-dom'

const NoteCard = ({title,text,id,DeleteNote}) => {
    return (
      <NoteDiv>
        <div>
          <Link to={`/note/${id}`} style={{'textDecoration':'none','color':'black'}}>
            <NoteTitle>{title}</NoteTitle>
          </Link>
            <BsTrash onClick={()=>{DeleteNote(id)}}/>
        </div>
        <Link to={`/note/${id}`} style={{'textDecoration':'none','color':'black'}}>
        <NoteParagraph>{text}</NoteParagraph>
        </Link>
      </NoteDiv>
    );
}
export default NoteCard;