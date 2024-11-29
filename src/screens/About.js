import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title="About Nueva Ecija & Bayombong" />
        <Card
          title="Nueva Ecija"
          content="Nueva Ecija is a province in the Philippines known for its rich agricultural heritage, especially rice production, earning it the title 'Rice Granary of the Philippines.'"
        />
        <Card
          title="Bayombong"
          content="Bayombong, located in Nueva Vizcaya, is known for its cultural and historical significance as a former provincial capital during the Spanish era."
        />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
  },
});

export default About;
