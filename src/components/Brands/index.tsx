import React from 'react';
import {
    Container,
    BrandsContent,
    Header,
    HeaderText,
    HeaderSeeMore,
    RightArrow,
    TopBrandsContainer,
    Logo,
    TextContainer
} from './styles';
import {
    nivea,
    the_ordinary,
    bodyShop,
    sk,
    maybelline,
    innisfree
} from '../../assets/images';

const Brands = () => {

    const brandsList = [
        nivea,
        the_ordinary,
        bodyShop,
        sk,
        maybelline,
        innisfree
    ]

    return (
        <Container title="Brands">
            <BrandsContent>
                <Header>
                    <HeaderText>
                        <h2>
                            Top Brands
                        </h2>
                        <span>
                            We all know and love
                        </span>
                    </HeaderText>
                    <HeaderSeeMore>
                        <span>
                            See more
                        </span>
                        <RightArrow />
                    </HeaderSeeMore>
                </Header>
                <TopBrandsContainer>
                    {brandsList.map((brand, index) => {
                        return <Logo key={index} src={brand} />
                    })

                    }
                </TopBrandsContainer>
                <TextContainer>
                    <h2>
                        Female Daily - Find everything you want to know about beauty on Female Daily
                    </h2>
                    <span>
                        Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!
                    </span>
                </TextContainer>
            </BrandsContent>
        </Container>
    )
}

export default Brands
