const url = process.env.REACT_APP_API_URL;

export const FetchNotes = async (headers, setNotes,setUnauthorized,signOut) => {
  const notes = await fetch(`${url}/note/`, {
    method: "GET",
    headers: headers,
  });

  const note_json = await notes.json();
  if (notes.status === 200) {
      console.log(note_json)
    setNotes(note_json.notes);
  } 
  else if(notes.status === 401){
    signOut()
    setUnauthorized(true)
  }
  else {
    alert("Could not fetch notes");
  }
};

export const FetchNoteById = async (id,headers,setNote,setUpdatedTitle,setUpdatedContent,setUpdatedTags) => {
    const note = await fetch(`${url}/note/${id}`,{
        method:'GET',
        headers:headers,
    })

    const note_json = await note.json()
    if(note.status === 200){
        console.log(note_json)
        setNote(note_json.note)
        setUpdatedTitle(note_json.note.title)
        setUpdatedContent(note_json.note.content)
        setUpdatedTags(note_json.note.tags)
    }
    else{
        alert("Could not fetch note")
    }
}

export const PostNote = async (headers,data,setLoading,setSaved) => {
    const note = await fetch(`${url}/note/`,{
        method:'POST',
        headers:headers,
        body:JSON.stringify(data)
    })

    const note_json = await note.json()
    if(note.status === 200){
        alert(note_json.message)
        setLoading(false)
        setSaved(true)
    }
    else if(note.status === 400){
        alert(note_json.message)
        alert (note_json.errors)
        setLoading(false)
    }
    else{
        alert('Could not create note')
        setLoading(false)
    }
}

export const UpdateNote = async (id,headers,data,setSaved,setUpdate,FetchUpdatedNote) => {
    const updated_note = await fetch(`${url}/note/${id}`,{
        method:'PUT',
        headers:headers,
        body:JSON.stringify(data)
    })

    const updated_note_json = await updated_note.json()
    if(updated_note.status === 200){
        alert(updated_note_json.message)
        FetchUpdatedNote()
        setSaved(false)
        setUpdate(false)
    }
    else{
        alert('Could not update note')
        setSaved(false)
        setUpdate(false)
    }
}

export const DeleteNote = async (id,headers) => {
    const deleted_note = await fetch(`${url}/note/${id}`,{
        method:'DELETE',
        headers:headers
    })

    const deleted_note_json = await deleted_note.json()
    if(deleted_note.status === 200){
        alert(deleted_note_json.message)
    }
    else{
        alert('Could not delete note')
    }
}
