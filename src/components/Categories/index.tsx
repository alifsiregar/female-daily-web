import React from 'react';
import {
    Container,
    CategoriesContent
} from './styles';

const Categories = () => {

    const categories = [
        "SKINCARE",
        "MAKE UP",
        "BODY",
        "HAIR",
        "FRAGRANCE",
        "NAILS",
        "TOOLS",
        "BRANDS"
    ];

    return (
        <Container>
            <CategoriesContent>
                {categories.map((category, index) : JSX.Element => {
                    return <h4 key={index}>{category}</h4>
                })}
            </CategoriesContent>
        </Container>
    )
}

export default Categories
