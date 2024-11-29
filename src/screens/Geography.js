import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const Geography = () => {
  return (
    <ScrollView>
      <Header title="Geography" />
      <Card
        title="Nueva Ecija Geography"
        content="Nueva Ecija is located in Central Luzon, surrounded by Sierra Madre mountains and vast plains, making it ideal for farming."
      />
      <Card
        title="Bayombong Geography"
        content="Bayombong lies in the Cagayan Valley region, bordered by rolling hills and lush forests."
      />
    </ScrollView>
  );
};

export default Geography;
