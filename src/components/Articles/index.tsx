import React from 'react';
import {
    Container,
    ArticleContent,
    Header,
    HeaderText,
    HeaderSeeMore,
    RightArrow,
    CardContainer
} from './styles';
import ArticleCard from './ArticleCard';

const Articles : React.FC<{
    articlesInfo: {
    title: string,
    author: string,
    published_at : string
}[]}> = ({articlesInfo}) => {
    return (
        <Container>
            <ArticleContent>
                <Header>
                    <HeaderText>
                        <h2>
                            Latest Articles
                        </h2>
                        <span>
                            So you can make better purchase decision
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
                    {articlesInfo &&
                        articlesInfo.map((article, index) => {
                            return <ArticleCard 
                                        key={index}
                                        title={article.title}
                                        author={article.author}
                                        published={article.published_at}
                                    />
                        })

                    }
                </CardContainer>
            </ArticleContent>
        </Container>
    )
}

export default Articles
