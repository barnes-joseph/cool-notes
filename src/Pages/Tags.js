import Tag from "../Components/Tag";
import Logo from "../Components/Logo";
import { TagInput,TagInputDiv,TagAdd,TagsContainer,AllTags,TagsDiv } from "../Components/Styled";
const Tags = () => {
    return (
      <TagsContainer>
        <Logo />
        <TagsDiv>
          <TagInputDiv>
            <TagInput placeholder="New Tag"/>
            <TagAdd>+</TagAdd>
          </TagInputDiv>
          <h2>Tags</h2>
          <AllTags>
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
            <Tag name="super" />
          </AllTags>
        </TagsDiv>
      </TagsContainer>
    );
}
export default Tags;