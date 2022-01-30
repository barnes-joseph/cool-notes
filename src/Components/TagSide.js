import React from 'react'
import {TagSection,TagSearch,SearchedTags,FilteredTags} from "../Components/Styled";
import TagFilter from "../Components/TagFilter";

const TagSide = ({tags,onChange}) => {
    return (
      <React.Fragment>
        <TagSection>
          <TagSearch type="search" placeholder="search" onChange={onChange}/>
          <SearchedTags>
            <TagFilter filter={true} tag="food" />
            <TagFilter filter={true} tag="food" />
            <TagFilter filter={true} tag="food" />
            <TagFilter filter={true} tag="food" />
            <TagFilter filter={true} tag="food" />
          </SearchedTags>
          <FilteredTags>
            {tags.map(tag=>{
              return <TagFilter tag={tag.name} key={tag.id}/>
            })}
            {/* <TagFilter tag="cool" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" />
            <TagFilter tag="free" /> */}
          </FilteredTags>
        </TagSection>
      </React.Fragment>
    );
}

export default TagSide
