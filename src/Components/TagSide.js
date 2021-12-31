import React from 'react'
import {TagSection,TagSearch,SearchedTags,FilteredTags} from "../Components/Styled";
import TagFilter from "../Components/TagFilter";

const TagSide = () => {
    return (
      <React.Fragment>
        <TagSection>
          <TagSearch type="search" placeholder="search" />
          <SearchedTags>
            <TagFilter filter={true} tag="food" />
            <TagFilter filter={true} tag="food" />
            <TagFilter filter={true} tag="food" />
            <TagFilter filter={true} tag="food" />
            <TagFilter filter={true} tag="food" />
          </SearchedTags>
          <FilteredTags>
            <TagFilter tag="cool" />
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
            <TagFilter tag="free" />
          </FilteredTags>
        </TagSection>
      </React.Fragment>
    );
}

export default TagSide
