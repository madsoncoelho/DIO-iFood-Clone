import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { SafeAreaView, Image, View, ButtonContainer } from './styles';

import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner} />
          <Text>Permitir localização</Text>
          <Text>Para descobrir restaurantes que entregam em sua localidade</Text>
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={() => navigation.navigate('Main')} />
          <Button text="ENTRAR" theme="primary" />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
