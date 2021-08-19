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
import {  useSelector } from 'react-redux';
import { State } from '../../state';

const Articles  = () => {

    const articles = useSelector ((state: State) => state.articles);

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
                    {articles &&
                        articles.map((article, index) => {
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
