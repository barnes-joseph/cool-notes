import React,{useState} from 'react'
import { Label,CreateNoteDiv,CreateNoteForm,TextArea,NoteInput,Save } from '../Components/Styled'
import Logo from '../Components/Logo'
import { GiCheckMark } from 'react-icons/gi'

const CreateNote = () => {
    const [saved,setSaved] = useState(false)
    return (
      <CreateNoteDiv>
        <Logo />
        <CreateNoteForm>
          <Label>Title</Label>
          <NoteInput type="text" />
          <Label>Body</Label>
          <TextArea />
          <Label>Tags</Label>
          <NoteInput type="text" />
          <Save>
            {saved ? (
              <>
                {" "}
                <GiCheckMark color="green" />
                saved
              </>
            ) : (
              <span>save</span>
            )}
          </Save>
        </CreateNoteForm>
      </CreateNoteDiv>
    );
}

export default CreateNote
