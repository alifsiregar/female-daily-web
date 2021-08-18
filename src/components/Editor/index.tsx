import React, { useEffect } from 'react';
import {
    Container,
    EditorContent,
    HeaderText,
    CardContainer
} from './styles';
import Card from './Card';

const Editor: React.FC<{editorInfo: {
    editor: string,
    role: string,
    product: {
      name: string,
      rating: number,
      description: string,
      image: string
    }
  }[]}> = ({editorInfo}) => {

    useEffect(() => {
        console.log(editorInfo);
    }, []);

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

                    {editorInfo.map((item, index) => {
                        return <Card 
                                    editorName={item.editor}
                                    editorRole={item.role}
                                    productName={item.product.name}
                                    productRating={item.product.rating}
                                    productDescription={item.product.description}
                                    productImage={item.product.image}
                                />
                    })}

                </CardContainer>
            </EditorContent>
        </Container>
    )
}

export default Editor
