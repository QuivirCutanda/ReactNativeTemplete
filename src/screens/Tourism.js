import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const Tourism = () => {
  return (
    <ScrollView>
      <Header title="Tourism Spots" />
      <Card
        title="Minalungao National Park"
        content="A stunning natural park in Nueva Ecija known for its limestone formations and emerald-green river."
      />
      <Card
        title="St. Dominic Cathedral"
        content="A historical church in Bayombong, a masterpiece of Spanish-era architecture."
      />
    </ScrollView>
  );
};

export default Tourism;
