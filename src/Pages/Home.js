import React from 'react'
import HomeNav from '../Components/HomeNav'
import {HomeContainer,MakeNote,HomeContent,Svg,First,Second} from '../Components/Styled'
import MemoNoteSvg from '../Components/svg'

const Home = () => {
    return (
      <HomeContainer>
        <HomeNav />
        <HomeContent>
          <MakeNote style={{ color: "#039924" }}>
            <First>
              Make <span>your</span>
            </First>
            <Second>notes cool</Second>
          </MakeNote>
          {/* <Svg>
            <MemoNoteSvg style={{ "font-size": "30em" }} />
          </Svg> */}
        </HomeContent>
      </HomeContainer>
    );
}

export default Home
