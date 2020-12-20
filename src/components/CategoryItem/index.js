import React from 'react';

import { CategoryView, CategoryPhoto, CategoryText } from './styles';

const CategoryItem = ({ photo, text, id }) => {
    return (
        <CategoryView key={id}>
            <CategoryPhoto source={{
                uri: photo.trim(),
                width: 98,
                height: 58,
            }} />
            <CategoryText>{text}</CategoryText>
        </CategoryView>
    );
};

export default CategoryItem;