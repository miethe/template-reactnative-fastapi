import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to {{ project_name }}!</Text>
    </SafeAreaView>
  );
}