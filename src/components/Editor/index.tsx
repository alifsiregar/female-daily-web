import React from 'react';
import {
    Container,
    EditorContent,
    HeaderText,
    CardContainer
} from './styles';
import Card from '../Card';
import {  useSelector } from 'react-redux';
import { State } from '../../state';
import {
    placeholderProduct
} from '../../assets/images';

const Editor = () => {

    const editor = useSelector ((state: State) => state.editor);

    return (
        <Container title="Editor">
            <EditorContent>
                <HeaderText>
                    <h2>
                        Editor's Choice
                    </h2>
                    <span>
                        Curated with love
                    </span>
                </HeaderText>
                <CardContainer>
                    {editor && 
                        editor.map((item, index) => {
                            return index !== editor.length -1 ? 
                                    <Card
                                        header
                                        background={false}
                                        border
                                        match={false}
                                        editorName={item.editor}
                                        editorRole={item.role}
                                        productName={item.product.name}
                                        productRating={item.product.rating}
                                        productDescription={item.product.description}
                                        productImage={placeholderProduct}
                                    /> : 
                                    <Card
                                        header
                                        background={false}
                                        border
                                        match={false}
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
            </EditorContent>
        </Container>
    )
}

export default Editor
