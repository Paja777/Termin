import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import RegistrationForm from '@/components/Registration';
import { useEffect } from 'react';
import axios from 'axios';

export default function TabOneScreen() {

  useEffect(() => {
    const response = axios.post('https:localhost:5092/register')
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registracija Sladjana</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <RegistrationForm />
    </View>
  );
}


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
