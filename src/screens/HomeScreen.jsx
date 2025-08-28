import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Button from '../components/Button';
import { colors } from '../constants/colors';

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/casual_dog.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>
      <View style={styles.buttonContainer}>
        <Button variant="primary">
            <Image source={require('../assets/images/Google.png')} style={styles.icon} />
            <Text style={styles.googleButtonText}>Acessar com Google</Text>
        </Button>
        <Button variant="secondary" onPress={() => navigation.navigate('Login')}>
          Outras opções
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 40,
    color: colors.text,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  googleButtonText: {
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16
  }
});

export default HomeScreen;