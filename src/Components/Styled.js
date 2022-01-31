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
  ${({ item }) =>
    item === "notes" &&
    css`
      background-color: white;
      color: black;
      border-radius: 5px;
    `}
  ${({ item }) =>
    item === "cool" &&
    css`
      color: #66ff88;
    `}
    padding:0px;
  margin-right: 2px;
`;
export const Button = styled.button`
  background-color: #66ff88;
  color: white;
`;
export const Input = styled.input`
    border-bottom:solid 1px white;
    outline:none;
`

export const TagDiv = styled.div`
  height: 40px;
  width: 300px;
  color: black;
  background-color: #66ff88;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
  font-size: 1rem;
  margin-bottom: 10px;
  @media only screen and (min-width: 600px) {
    width: 200px;
  }
`;
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
    // @media only screen and (min-width:600px){
    //     align-items:start;
    // }
`

export const TagInput = styled.input`
    outline:none;
    border:none;
    height: 30px;
    font-size:1rem;
    background-color:black;
    color:white;
    padding-left:5px;
`

export const TagInputDiv = styled.div`
  border: solid 1px #66ff88;
  display: flex;
  width: 50%;
  margin-top: 30px;
  @media only screen and (min-width: 600px) {
    width: 300px;
  }
`;

export const TagAdd = styled.span`
    font-size:1.3rem;
    margin-left:auto;
    margin-right:10px;
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
    font-weight:500; 
`

export const Line1 = styled.span`
    display:block;
    height:5px;
    width:60px;
    background-color:#66ff88;
`

export const Line2 = styled.span`
    display:block;
    height:5px;
    width:60px;
    background-color:white;
    margin-left:3px;
    z-index:10;
    margin-top:-2px;
`

export const Form = styled.form`
    color:white;
    // border: solid 3px green;
    // border-radius:5px;
    display:flex;
    flex-direction:column;
    width:80%;
    ${({page})=>page==='login' && css`height:300px;`}
    ${({page})=>page==='register' && css`height:500px;`}
    // padding-left:30px;
    // padding-top:20px;
    box-sizing:border-box;
    margin-top:auto;
    margin-bottom:auto;
    @media only screen and (min-width:600px){
        width: 50%;
    }
`
export const InputDiv = styled.div`
    margin-top:auto;
    margin-bottom:auto;
`

export const FormInput = styled.input`
    width:100%;
    background-color:black;
    color:white;
    outline:none;
    border:1px solid white;
    // border-bottom: 1px solid white;
    margin-bottom:0.5rem;
    height:2rem;
    font-size:1.1rem;
    border-radius:5px;
    padding-left:5px;
`
export const FormLabel = styled.label`
    margin-bottom:0.8rem;
    margin-top:0.5rem;
    font-size:1.1rem;
`

export const SubmitDiv = styled.div`
    // margin-top:auto;
    // margin-bottom:10px;
    align-self:start;
    color:#66FF88;
    display:flex;
    flex-direction:column-reverse;
    justify-content:space-between;
    align-items:center;
    width:100%;
`

export const Submit = styled.input`
    background-color:#66FF88;
    color:black;
    border:none;
    border-radius:5px;
    padding:10px 0;
    font-size:1.1rem;
    margin-top:20px;
    width:100%;
`

export const NotesContainer = styled.div`
    padding:20px 10px;
    box-sizing:border-box;
    @media only screen and (min-width:600px){
        padding:20px 30px;
    } 
`

export const NoteDiv = styled.div`
  width: 40%;
  min-width: 200px;
  background-color: #66ff88;
  color: black;
  height: 200px;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  margin: 10px;
  @media only screen and (min-width: 600px) {
    width: 200px;
    margin-left: 0px;
  }
`;

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
  ${({ mobile }) =>
    mobile === true
      ? css`
          display: inline-block;
          color: white;
          text-decoration: none;
        `
      : css`
          display: none;
          @media only screen and (min-width: 600px) {
            display: inline-block;
            width: 20%;
            color: white;
            text-decoration: none;
          }
        `}
`;
export const NoteSpan = styled.h3`
    display:inline-block;
    width:50%;
    @media only screen and (min-width:600px){
        width:70%;
        text-align:center;
    }
`
export const AddNote = styled.span`
  display: inline-block;
  font-size: 1.3rem;
  margin-right: 10px;
  background-color: #66ff88;
  border-radius: 5px;
  padding: 0px 8px;
  color: black;
`;

export const SearchTitle = styled.input`
  height: 30px;
  border-radius: 5px;
  background-color: black;
  border: 1px solid #66ff88;
  padding-left: 5px;
  color: white;
  outline: green;
`;

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
  display: flex;
  width: 50px;
  height: 25px;
  justify-content: space-between;
  padding: 0px 5px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  ${({ filter }) =>
    filter === true
      ? css`
          background-color: #66ff88;
        `
      : css`
          border: 1px solid #66ff88;
          color: white;
        `}
`;

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

export const MobileTagSection = styled.div`
    display:flex;
    flex-direction:column;
    height:80vh;
    width:200px;
    padding: 10px;
`

export const TagSideBar = styled.div`
    width:300px;
    z-index:10;
    top:0;
    left:0;
    background-color:black;
    position:fixed;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    @media only screen and (min-width:600px){
        display:none;
    }
`

export const MainContent = styled.div`
    display:flex;
    width:100%;

`
export const TagSearch = styled.input`
  background-color: black;
  border: 1px solid #66ff88;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 80%;
  color: white;
  outline: green;
  padding-left: 5px;
`;

export const SearchedTags = styled.div`
    height:30%;
    display:flex;
    width:80%;
    flex-wrap:wrap;
`

export const FilteredTags = styled.div`
  border: 1px solid #66ff88;
  margin-top: auto;
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
  width: 80%;
  border-radius: 5px;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
export const Bar = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    display: inline-block;
    width: 2px;
    height: 300px;
    border: 1px solid #66ff88;
    background-color: #66ff88;
    margin-right: 10%;
    align-self: center;
    border-radius: 10px;
  }
`;

export const CreateNoteDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 20px 30px;
`

export const CreateNoteForm = styled.form`
  display:flex;
  flex-direction:column;
  width:80%;
  margin-top:2rem;
  @media only screen and (min-width:600px){
      width:60%;
  }
`

export const Label = styled.label`
  font-weight:bold;
  font-size:1.2rem;
  color:white;
  background-color:black;
  margin-bottom:1rem;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 40vh;
  background-color: black;
  border: 1px solid #66ff88;
  border-radius: 10px;
  color: white;
  outline: #66ff88;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  ${({update})=>update === true && css`background-color:white; color:black;`}
`;

export const NoteInput = styled.input`
  width: 100%;
  background-color: black;
  border: 1px solid #66ff88;
  border-radius: 5px;
  height: 40px;
  color: white;
  font-size: 1.2rem;
  outline: #66ff88;
  padding-left: 10px;
  margin-bottom: 1rem;
  ${({update})=>update === true && css`background-color:white; height:30px; width:70%;`}
`;
export const Save = styled.span`
  color:white;
  align-self:end;
`
export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding:30px 20px;
  box-sizing:border-box;
`;
export const Note = styled.div`
  width:80%;
  display:flex;
  flex-direction:column;
  margin-top:auto;
  margin-bottom:auto;
  height:80vh;
  @media only screen and (min-width:600px){
      width:60%;
  }
`
export const Back = styled.div`
  display:flex;
  width:60px;
  justify-content:space-between;
  align-items:center;
`

export const NoteSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow-y: auto;
  margin-top: 1rem;
  background-color: #66ff88;
  padding: 2rem;
  border-radius: 10px;
`;

export const Title = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
`

export const NoteContent = styled.p`
  height:90%;
  overflow-y:auto;
`

export const NoteTagSpan = styled.h3`
  color:white;
`

export const Nav = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:50px;
`

export const NavButton = styled.button`
  background-color: #66ff88;
  outline: none;
  border: none;
  padding: 10px 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: bold;
`;

export const HomeContainer = styled.div`
  padding:20px 30px;
  box-sizing:border-box;
  width:100vw;
  overflow-x:clip;
  display:flex;
  flex-direction:column;
`

export const HomeContent = styled.div`
  display:flex;
  @media only screen and (min-width:800px){
      justify-content:space-between;
      align-items:center;
      margin-top:auto;
      
  }
`
export const Svg = styled.div`
  @media only screen and (min-width:600px){
    //   z-index:10;
      margin-left:auto;
      margin-right:2rem;
  }
`

export const MakeNote = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  z-index: 10;
  left: 20;
  top: 10rem;
  position: fixed;
  font-size: 3.5rem;
  font-weight:bold;
  @media only screen and (min-width: 600px) {
    color: white;
    font-weight: bold;
    font-size: 5rem;
    margin-left: 3rem;
    margin-right: auto;
    mix-blend-mode: difference;
  }
`;

export const First = styled.span`
  margin-left:1rem;
`

export const Second = styled.span`
 margin-left:5rem;
 mix-blend-mode:difference;
`

export const SelectTag = styled.select`
  background-color: black;
  color: white;
  border: 1px solid #66ff88;
  outline: #66ff88;
  border-radius: 5px;
  height: 2rem;
  padding: 5px;
  @media only screen and (min-width: 600px) {
    width: 50%;
  }
`;