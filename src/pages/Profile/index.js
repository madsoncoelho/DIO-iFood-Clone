import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { SafeAreaView } from './styles';

export default function Profile() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
          <Text>Profile</Text>
      </SafeAreaView>
    </>
  );
}
