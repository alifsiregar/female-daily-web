import React from 'react';
import {
    Container,
    MatchContent,
    TextContainer,
    MatchButton,
    CardContainer
} from'./styles';
import {
    placeholderProduct
} from '../../assets/images';
import Card from '../Card';
import {
    Horizontal
} from '../Advertisements';
import {  useSelector } from 'react-redux';
import { State } from '../../state';

const Match = ()  => {

    const editor = useSelector ((state: State) => state.editor);

    return (
        <Container title="Match">
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
                    {editor && 
                        editor.slice(0, 3).map((item, index) => {
                            return index !== editor.length -1 ? 
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
                                        productImage={placeholderProduct}
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
                                        productImage={placeholderProduct}
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
