import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const History = () => {
  return (
    <ScrollView>
      <Header title="History" />
      <Card
        title="Nueva Ecija History"
        content="Nueva Ecija was founded in 1705 by the Spanish as a military district. It has since grown to become one of the largest provinces in Luzon."
      />
      <Card
        title="Bayombong History"
        content="Bayombong served as the center of political and religious governance during the Spanish colonial period in Nueva Vizcaya."
      />
    </ScrollView>
  );
};

export default History;
