import styled,{css} from 'styled-components'

export const LogoDiv = styled.div`
    align-self:start;
    font-size:1rem;
    display:flex;
    align-items:center;
    position:sticky;
    left:0;
    top:10;
`
export const TopSection = styled.div`
    position:sticky;
    background-color:black;
    top:0;
    left:0;
`

export const Span = styled.span`
    ${({item})=>item === 'notes' && 
    css`
    background-color:white;
    color:black;
    border-radius:5px;`}
    ${({item})=>item === 'cool' && css`
        color:green;
    `}
    padding:0px;
    margin-right:2px;
`
export const Button = styled.button`
    background-color:green;
    color:white;
`
export const Input = styled.input`
    border-bottom:solid 1px white;
    outline:none;
`

export const TagDiv = styled.div`
    height:40px;
    width:300px;
    color:black;
    background-color:green;
    display:flex;
    align-items:center;
    border-radius:5px;
    justify-content:space-between;
    padding:10px;
    box-sizing:border-box;
    font-size:1rem;
    margin-bottom:10px;
    @media only screen and (min-width:600px){
        width:200px;
    }
`
export const TagEdit = styled.div`
    width:40px;
    display:flex;
    justify-content:space-between;
`

export const TagsDiv = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media only screen and (min-width:600px){
        align-items:start;
    }
`

export const TagInput = styled.input`
    outline:none;
    border:none;
    height: 30px;
    font-size:1rem;
    background-color:black;
    color:white;
`

export const TagInputDiv = styled.div`
    border: solid 1px green;
    width:50%;
    margin-top:30px;
    @media only screen and (min-width:600px){
        width:300px;
    }
`

export const TagAdd = styled.span`
 font-size:1.3rem;
`

export const TagsContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    padding: 30px 20px;
    box-sizing:border-box;
`

export const AllTags = styled.div`
    display:flex;
    flex-direction:column;
    @media only screen and (min-width:600px){
        flex-direction:row;
        width: 60%;
        flex-wrap:wrap;
        justify-content:space-around;
    }
`
export const FormContainer = styled.div`
    padding:30px 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
    box-sizing:border-box;
`

export const FormSpan = styled.span`
    align-self:start; 
`
export const Form = styled.div`
    color:white;
    border: solid 3px green;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    width:70%;
    height:70vh;
    padding-left:30px;
    padding-top:20px;
    box-sizing:border-box;
    margin-top:auto;
    margin-bottom:auto;
    @media only screen and (min-width:600px){
        width: 320px
    }
`
export const InputDiv = styled.div`
    margin-top:auto;
    margin-bottom:auto;
`

export const FormInput = styled.input`
    width:80%;
    background-color:black;
    color:white;
    outline:none;
    border:none;
    border-bottom: 1px solid white;
    margin-bottom:25px;
    height:20px;
    font-size:1.1rem;
`
export const FormLabel = styled.label`
    margin-bottom:10px;
    margin-top:20px;
    font-size:1.1rem;
`

export const SubmitDiv = styled.div`
    margin-top:auto;
    margin-bottom:10px;
    align-self:start;
    color:green;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const Submit = styled.button`
    background-color:green;
    color:black;
    border:none;
    border-radius:5px;
    padding:10px;
    font-size:1.1rem;
    margin-left:20px;
`

export const NotesContainer = styled.div`
    padding:20px 10px;
    @media only screen and (min-width:600px){
        padding:20px 30px;
    } 
`

export const NoteDiv = styled.div`
    width:40%;
    min-width:200px;
    background-color:green;
    color:black;
    height:200px;
    border-radius:5px;
    padding-top:10px;
    padding-left:10px;
    box-sizing:border-box;
    margin:10px;
    @media only screen and (min-width:600px){
        width:200px;
        margin-left:0px;
    }
`

export const NoteParagraph = styled.p`
    width:180px;
    display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 6;
	white-space: normal;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const NoteTitle = styled.span`
    display:inline-block;
    width:150px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`

export const Menu = styled.div`
    // display:block
    margin-right:20px;
    padding-left:4px;
    @media only screen and (min-width:600px){
        display:none;
    }
`

export const NoteHead = styled.div`
    display:flex;
    color:white;
    width:100%;
    align-items:center;
    position:sticky;
    left:0;
    top:0;
`
export const TagSpan = styled.h3`
display:none;
@media only screen and (min-width:600px){
    display:inline-block;
    width:20%;
}
`
export const NoteSpan = styled.h3`
    display:inline-block;
    width:50%;
    @media only screen and (min-width:600px){
        width:70%;
        text-align:center;
    }
`
export const AddNote = styled.span`
    display:inline-block;
    font-size:1.3rem;
    margin-right:10px;
    background-color:green;
    border-radius:5px;
    padding: 0px 8px;
`

export const SearchTitle = styled.input`
    height:30px;
    border-radius:5px;
    background-color:black;
    border: 1px solid green;
    padding-left:5px;
    color:white;
`

export const AllNotes = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    overflow:auto;
    @media only screen and (min-width:600px){
        width: 70%;
        height:100vh;
        overflow:auto;
    }
`

export const FilterDiv = styled.div`
    display:flex;
    width:50px;
    height:25px;
    justify-content:space-between;
    padding: 0px 5px;
    border-radius:5px;
    margin-bottom:5px;
    margin-right: 5px;
    ${({filter})=>filter === true ? css`background-color:green;`: css` border:1px solid green;color:white;`}
`

export const FilterTag = styled.span`
    width:40px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`
export const TagSection = styled.div`
    display:none;
    width:200px;
    @media only screen and (min-width:600px){
        display:flex;
        flex-direction:column;
        height:100vh;
    }
`

export const TagSideBar = styled.div`
    width:300px;
    z-index:10;
    top:0;
    left:0;
    background-color:black;
    position:fixed;
`

export const MainContent = styled.div`
    display:flex;
    width:100%;

`
export const TagSearch = styled.input`
    background-color:black;
    border: 1px solid green;
    height:30px;
    border-radius:5px;
    margin-bottom:20px;
    width:80%;
    color:white;
`

export const SearchedTags = styled.div`
    height:30%;
    display:flex;
    width:80%;
    flex-wrap:wrap;
`

export const FilteredTags = styled.div`
    border: 1px solid green;
    margin-top:auto;
    height: 30%;
    display:flex;
    flex-wrap:wrap;
    padding:10px;
    box-sizing:border-box;
    width:80%;
    border-radius:5px;
    overflow:auto;
    scrollbar-width:none;
    -ms-overflow-style:none;
`
export const Bar = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    display:inline-block;
    width: 2px;
    height: 300px;
    border: 1px solid green;
    background-color: green;
    margin-right: 10%;
    align-self: center;
    border-radius:10px;
  }
`;