const url = process.env.REACT_APP_API_URL;

export const FetchTags = async (headers, setTags,setUnauthorized,signOut) => {
  const tags = await fetch(`${url}/tag/`, {
    method: "GET",
    headers: headers,
  });

  const tags_json = await tags.json();
  if (tags.status === 200) {
    console.log(tags_json);
    setTags(tags_json.tags);
  } 
  else if(tags.status === 401){
      signOut()
      setUnauthorized(false)
  }
  else {
    alert("Could not fetch Tags");
  }
};

export const CreateTag = async (headers,data) => {
    const tag = await fetch(`${url}/tag/`,{
        method:'POST',
        headers:headers,
        body:JSON.stringify(data)
    })

    const tag_json = await tag.json()
    if(tag.status === 200){
        alert(tag_json.message)
    }
    else if(tag.status === 400){
        alert(tag_json.message)
    }
    else{
        alert('Could not create tag')
    }
}

export const DeleteTag = async (id,headers) => {
    const deleted_tag = await fetch(`${url}/tag/${id}`,{
        method:'DELETE',
        headers:headers,
    })

    const deleted_tag_json = await deleted_tag.json()
    if(deleted_tag.status === 200){
        alert(deleted_tag_json.message)
    }
    else{
        alert('Could not delete tag')
    }
}

export const UpdateTag = async (id,headers,data,setModify,setTag) => {
    const updated_tag = await fetch(`${url}/tag/${id}`,{
        method:'PUT',
        headers:headers,
        body:JSON.stringify(data)
    })

    const updated_tag_json = await updated_tag.json()
    if(updated_tag.status === 200){
        alert(updated_tag_json.message)
        FetchTag(id,headers,setTag)
    }
    else if(updated_tag.status === 400){
        alert(updated_tag_json.message)
    }
    else{
        alert('Could not update tag')
    }
    setModify(false);
}

export const FetchTag = async (id,headers,setTag) => {
    const tag = await fetch(`${url}/tag/${id}`,{
        method:'GET',
        headers:headers,
    })

    const tag_json = await tag.json()
    if(tag.status === 200){
        console.log(tag_json)
        setTag(tag_json.tag)
    }
    else{
        alert('Could not fetch tag')
    }
}

export const AddTagToNote = async (headers,data) => {
    const tag_add_to_note = await fetch(`${url}/tag/add_tag`,{
        method:'POST',
        headers:headers,
        body:JSON.stringify(data)
    })

    const tag_add_to_note_json = await tag_add_to_note.json()
    if(tag_add_to_note.status === 200){
        alert(tag_add_to_note_json.message)
    }
    else{
        alert('Could not add tag to note')
    }
}

export const RemoveTagFromNote = async (headers,data) => {
    const tag_remove_from_note = await fetch(`${url}/tag/remove_tag`,{
        method:"POST",
        headers:headers,
        body:JSON.stringify(data)
    })

    const tag_remove_from_note_json = await tag_remove_from_note.json()
    if(tag_remove_from_note.status === 200){
        alert(tag_remove_from_note_json.message)
    }
    else{
        alert('Could not remove tag from note')
    }
}

