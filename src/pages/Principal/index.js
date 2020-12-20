import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, ActivityIndicator } from 'react-native';

import {
    SafeAreaView, ActivityView, CategoryView, BannerView,
    PrincipalView, RestaurantsView, RestaurantsTitle, ButtonTypeSelect,
    TextTypeSelect, TypeSelect
} from './styles';

import RestaurantItem from '../../components/RestaurantItem';
import CategoryItem from '../../components/CategoryItem';
import BannerItem from '../../components/BannerItem';

export default function Principal() {
    const [banners, setBanners] = useState([]);
    const [categories, setCategories] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [type, setType] = useState('Delivery');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    'http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');
                const data = await response.json();
                console.log('Data:');
                console.log(data);

                setRestaurants(data.restaurantes);
                setBanners(data.banner_principal);
                setCategories(data.categorias);

                setLoaded(true);
            } catch (err) {
                Alert.alert('Erro ao buscar dados: ' + err.message);
            }
        }

        fetchData();
    }, []);

    const ViewHome = (props) => {
        return (
            <PrincipalView>
                <TypeSelect>
                    <ButtonTypeSelect onPress={() => setType('Delivery')}>
                        <TextTypeSelect selected={type === 'Delivery'}>
                            Entrega
                        </TextTypeSelect>
                    </ButtonTypeSelect>
                    <ButtonTypeSelect onPress={() => setType('Withdraw')}>
                        <TextTypeSelect selected={type === 'Withdraw'}>
                            Retirada
                        </TextTypeSelect>
                    </ButtonTypeSelect>
                </TypeSelect>
                <CategoryView horizontal={true} showHorizontalScrollIndicator={false}>
                    {categories.map(category => (
                        <CategoryItem key={category.id} id={category.id}
                        photo={category.img_url} text={category.nome} />
                    ))}
                </CategoryView>
                <BannerView horizontal={true} showHorizontalScrollIndicator={false}>
                    {banners.map(banner => (
                        <BannerItem key={banner.id} id={banner.id} photo={banner.banner_img_url} />
                    ))}
                </BannerView>
                <RestaurantsTitle>Restaurantes</RestaurantsTitle>
                <RestaurantsView>
                    {restaurants.map(restaurant => (
                        <RestaurantItem key={restaurant.id} id={restaurant.id} photo={restaurant.url_img}
                            restaurantName={restaurant.nome} grade={restaurant.nota} category={restaurant.categoria}
                            distance={restaurant.distancia} shippingValue={restaurant.valor_frete}
                            deliveryTime={restaurant.tempo_entrega}
                        />
                    ))}
                </RestaurantsView>
            </PrincipalView>
        );
    };

    return (
        <>
            <StatusBar style="theme-dark" />
            <SafeAreaView>
                {loaded ? (
                    <ViewHome />
                ) : (
                    <ActivityView>
                        <ActivityIndicator color="#f0001a" size="large" />
                    </ActivityView>
                )}
            </SafeAreaView>
        </>
  );
}
