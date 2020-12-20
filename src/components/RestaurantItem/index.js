import React from 'react';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { RestaurantView, RestaurantInfo, RestaurantPhoto } from './styles';

const RestaurantItem = ({ photo, restaurantName, id, grade, category, distance, shippingValue, deliveryTime }) => {
    return (
        <RestaurantView key={id}>
            <RestaurantPhoto source={{
                uri: photo.trim(),
                width: 50,
                height: 50,
                resizeMode: 'cover',
            }} />
            <RestaurantInfo>
                <Text>{restaurantName}</Text>
                <Text>
                    <AntDesign name="star" size={12} color="#f9a825" /> {grade} - {category} - {distance}
                </Text>
                <Text>{deliveryTime} - R$ {shippingValue}</Text>
            </RestaurantInfo>
        </RestaurantView>
    );
};

export default RestaurantItem;