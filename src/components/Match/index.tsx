import React from 'react';
import {
    Container,
    MatchContent,
    TextContainer,
    MatchButton,
    CardContainer
} from'./styles';
import Card from '../Card';
import {
    Horizontal
} from '../Advertisements';

const Match : React.FC<{editorInfo: {
    editor: string,
    role: string,
    product: {
      name: string,
      rating: number,
      description: string,
      image: string
    }
  }[]}> = ({editorInfo})  => {
    return (
        <Container>
            <MatchContent>
                <TextContainer>
                    <h2>
                        Looking for products that are just simply perfect for you?
                    </h2>
                    <span>
                        Here are some products that we believe match your skin, hair, and body! Have we mentioned they solve your concerns too?
                    </span>
                    <MatchButton>
                        See My Matches
                    </MatchButton>
                </TextContainer>
                <CardContainer>
                    {editorInfo.slice(0, 3).map((item, index) => {
                        return index !== editorInfo.length -1 ? 
                                <Card
                                    header={false}
                                    background
                                    border={false}
                                    match
                                    editorName={item.editor}
                                    editorRole={item.role}
                                    productName={item.product.name}
                                    productRating={item.product.rating}
                                    productDescription={item.product.description}
                                    productImage="https://image.femaledaily.com/dyn/640/images/prod-pics/product_1558085107_YOU_MAKEUP_800x800.png"
                                /> : 
                                <Card
                                    header={false}
                                    background
                                    border={false}
                                    match
                                    editorName={item.editor}
                                    editorRole={item.role}
                                    productName={item.product.name}
                                    productRating={item.product.rating}
                                    productDescription={item.product.description}
                                    productImage="https://image.femaledaily.com/dyn/640/images/prod-pics/product_1558085107_YOU_MAKEUP_800x800.png"
                                    margin={"0px"}
                                />
                    })}
                </CardContainer>
            </MatchContent>
            <Horizontal />
        </Container>
    )
}

export default Match
