import React from 'react';
import {
    Container,
    VideosContent,
    Header,
    HeaderText,
    HeaderSeeMore,
    RightArrow,
    LatestVideosContainer,
    LeftContainer,
    RightContainer
} from './styles';
import {
    Video1
} from './EmbedVideo';

const Videos = () => {
    return (
        <Container>
            <VideosContent>
                <Header>
                    <HeaderText>
                        <h2>
                            Latest Videos
                        </h2>
                        <span>
                            Watch and learn, ladies
                        </span>
                    </HeaderText>
                    <HeaderSeeMore>
                        <span>
                            See more
                        </span>
                        <RightArrow />
                    </HeaderSeeMore>
                </Header>
                <LatestVideosContainer>
                    <LeftContainer>
                        <Video1 fullsize embedId="6LUdS0VFOJc" />
                    </LeftContainer>
                    <RightContainer>
                        <div className="top-video">
                            <Video1 fullsize={false} embedId="ZIpYneSeqOw" />
                        </div>
                        <div className="bottom-video">
                            <Video1 fullsize={false} embedId="FvbNZd-IxK4" />
                        </div>
                    </RightContainer>
                </LatestVideosContainer>    
            </VideosContent>
        </Container>
    )
}

export default Videos
