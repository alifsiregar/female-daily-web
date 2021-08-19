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

const Editor = () => {

    const editor = useSelector ((state: State) => state.editor);

    return (
        <Container>
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
                                        productImage="https://image.femaledaily.com/dyn/640/images/prod-pics/product_1558085107_YOU_MAKEUP_800x800.png"
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
                                        productImage="https://image.femaledaily.com/dyn/640/images/prod-pics/product_1558085107_YOU_MAKEUP_800x800.png"
                                        margin={"0px"}
                                    />
                    })}
                </CardContainer>
            </EditorContent>
        </Container>
    )
}

export default Editor
