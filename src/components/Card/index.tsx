import React from 'react';
import {
    Container,
    CardHeader,
    CardContainer,
    EditorImage,
    EditorInfo,
    ProductImage,
    RatingContainer,
    RatingStar,
    ProductInfo
} from './styles';
import {
    placeholderUser
} from '../../assets/images';

const Card : React.FC<
    {
        header: boolean,
        background: boolean,
        border: boolean,
        match: boolean,
        editorName: string,
        editorRole: string,
        productName: string,
        productRating: number,
        productDescription: string,
        productImage: string,
        margin?: string
    }
> = ({ header, background, border, match, editorName, editorRole, productName, productRating, productDescription, productImage, margin }) => {
    return (
        <Container margin={margin}>
            {header && 
                <CardHeader>
                    <EditorImage src={placeholderUser} />
                    <EditorInfo>
                        <h2>
                            { editorName }
                        </h2>
                        <span>
                            { editorRole }
                        </span>
                    </EditorInfo>
                </CardHeader>
            }
            <CardContainer background={background} border={border}>
                <ProductImage src={ productImage } />
                {
                    match &&
                        <span className="match">
                            Match Skin Type
                        </span>
                }
                <RatingContainer>
                    <h3>
                        { productRating }
                    </h3>
                    <RatingStar rated />
                    <RatingStar rated />
                    <RatingStar rated />
                    <RatingStar rated />
                    <RatingStar />
                    <span>
                        (7)
                    </span>
                </RatingContainer>
                <ProductInfo>
                    <h4>
                        { productName }
                    </h4>
                    <span className="product-title">
                        { productDescription }
                    </span>
                    <span>
                        Lorem Ipsum
                    </span>
                </ProductInfo>
            </CardContainer>
        </Container>
    )
}

export default Card
