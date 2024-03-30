import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text : string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text : string) => {
    setPassword(text);
  };

  const handleRegistration = () => {
    // Implement registration logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can send this data to your backend for registration process
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default RegistrationForm;
