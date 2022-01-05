import React from 'react'
import { MobileTagSection,TagSearch,SearchedTags,FilteredTags, TagSpan } from './Styled';
import TagFilter from './TagFilter';
import {Link} from 'react-router-dom'
const MobileTagSide = () => {
    return (
      <div>
        <React.Fragment>
          <MobileTagSection>
            <Link to="/tags">
              <TagSpan mobile={true}>Tags</TagSpan>
            </Link>
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
          </MobileTagSection>
        </React.Fragment>
      </div>
    );
}

export default MobileTagSide
