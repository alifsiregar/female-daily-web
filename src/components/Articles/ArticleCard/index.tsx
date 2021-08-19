import React from 'react';
import {
    Container,
    ArticleImage,
    ArticleText,
    ArticleUserTime
} from './styles';

const ArticleCard : React.FC<{
    title: string,
    author: string,
    published: string
}> = ({title, author, published}) => {
    return (
        <Container>
            <ArticleImage src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-body-oils-1544457771.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*" /> 
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
