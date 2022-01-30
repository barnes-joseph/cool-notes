import React from 'react'
import { MobileTagSection,TagSearch,SearchedTags,FilteredTags, TagSpan } from './Styled';
import TagFilter from './TagFilter';
import {Link} from 'react-router-dom'
const MobileTagSide = ({tags,onChange}) => {
    return (
      <div>
        <React.Fragment>
          <MobileTagSection>
            <Link to="/tags">
              <TagSpan mobile={true}>Tags</TagSpan>
            </Link>
            <TagSearch
              type="search"
              placeholder="search"
              onChange={onChange}
            />
            <SearchedTags>
              <TagFilter filter={true} tag="food" />
              <TagFilter filter={true} tag="food" />
              <TagFilter filter={true} tag="food" />
              <TagFilter filter={true} tag="food" />
              <TagFilter filter={true} tag="food" />
            </SearchedTags>
            <FilteredTags>
              {tags.map((tag) => {
                return <TagFilter tag={tag.name} key={tag.id} />;
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
          </MobileTagSection>
        </React.Fragment>
      </div>
    );
}

export default MobileTagSide
