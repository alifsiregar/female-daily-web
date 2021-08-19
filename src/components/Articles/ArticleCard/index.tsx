import React from 'react';
import {
    Container,
    ArticleImage,
    ArticleText,
    ArticleUserTime
} from './styles';
import {
    placeholderArticle
} from '../../../assets/images';

const ArticleCard : React.FC<{
    title: string,
    author: string,
    published: string
}> = ({title, author, published}) => {
    return (
        <Container>
            <ArticleImage src={placeholderArticle} /> 
            <ArticleText>
                <h2>
                    { title }
                </h2>
                <ArticleUserTime>
                    <span>
                        <span className="username">{ author }</span> | { published }
                    </span>
                </ArticleUserTime>
            </ArticleText>
        </Container>
    )
}

export default ArticleCard
