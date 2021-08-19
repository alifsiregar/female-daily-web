import React from 'react';
import {
    Container,
    CardContainer,
    TopCard,
    ProductImage,
    ProductInfo,
    Border,
    BottomCard,
    RatingContainer,
    Rating,
    RatingStar,
    Timestamp,
    Comments,
    Commenter,
    CommenterImage
} from './styles';
import {
    placeholderUser
} from '../../../assets/images';

const ReviewCard : React.FC<{
    productName: string,
    productDesc: string,
    productImage: string,
    comment: string,
    userName: string,
    userInfo: string[] 
}> = ({productName, productDesc, productImage, comment, userName, userInfo}) => {
    return (
        <Container title="Reviews">
            <CardContainer>
                <TopCard>
                    <ProductImage src={productImage} />
                    <ProductInfo>
                        <h2>
                            { productName }
                        </h2>
                        <span>
                            { productDesc }
                        </span>
                    </ProductInfo>
                </TopCard>
                <Border />
                <BottomCard>
                    <RatingContainer>
                        <Rating>
                            <RatingStar rated />
                            <RatingStar rated />
                            <RatingStar rated />
                            <RatingStar rated />
                            <RatingStar />
                        </Rating>
                        <Timestamp>
                            2 hours ago
                        </Timestamp>
                    </RatingContainer>
                    <Comments>
                        <span>
                            {comment}... 
                            <span className="read-more">Read More </span>
                        </span>
                    </Comments>
                </BottomCard>
            </CardContainer>    
            <Commenter>
                <CommenterImage src={placeholderUser} />
                <span className="commenter-name">
                    { userName }
                </span>
                <span className="commenter-info">
                    { userInfo.join() }
                </span>
            </Commenter>
        </Container>
    )
}

export default ReviewCard
