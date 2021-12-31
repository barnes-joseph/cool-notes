import {FaTrashAlt} from 'react-icons/fa'
import {BsPencil,BsTrash} from 'react-icons/bs'
import { TagDiv,TagEdit } from './Styled';

const Tag = ({name}) => {
    return (
      <TagDiv>
        <span>{name}</span>
        <TagEdit>
          <BsPencil color='black'/>
          <BsTrash color='black' />
        </TagEdit>
      </TagDiv>
    );
}
export default Tag;