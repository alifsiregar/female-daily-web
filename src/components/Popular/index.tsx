import React from 'react';
import {
    Container,
    PopularContent,
    Header,
    HeaderText,
    HeaderSeeMore,
    RightArrow,
    CardContainer
} from './styles';
import PopularCard from './PopularCard';

const Popular = () => {
    return (
        <Container>
            <PopularContent>
                <Header>
                    <HeaderText>
                        <h2>
                            Popular Groups
                        </h2>
                        <span>
                            Where the beauty TALK are
                        </span>
                    </HeaderText>
                    <HeaderSeeMore>
                        <span>
                            See more
                        </span>
                        <RightArrow />
                    </HeaderSeeMore>
                </Header>
                <CardContainer>
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                </CardContainer>
            </PopularContent>
        </Container>
    )
}

export default Popular
