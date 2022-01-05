import { BsTrash } from "react-icons/bs";
import {NoteDiv,NoteParagraph,NoteTitle} from '../Components/Styled'

const NoteCard = ({title,text}) => {
    return (
      <NoteDiv>
        <div>
            <NoteTitle>{title}</NoteTitle>
            <BsTrash/>
        </div>
        <NoteParagraph>{text}</NoteParagraph>
      </NoteDiv>
    );
}
export default NoteCard;