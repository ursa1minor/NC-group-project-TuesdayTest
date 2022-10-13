import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web'; //Added
import { useState } from 'react/cjs/react.development'; //Added

import { doc, setDoc } from "firebase/firestore"; //Added from Firebase
import { db } from '../components/Config'; //Added

export default function App() {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  
  
  function create () {

    //submit data
    setDoc(doc(db, "users", "LA"), {
      username: username,
      email: email,
    }).then(() => {
      //Data saved successfully
      console.log('data submitted');

    }).catch((error) => {
      //write failed
      console.log(error);
    });
    }
 
  return (
    <View style={styles.container}>

      <Text>Firebase CRUD test app</Text>

      <TextInput value={username} onChangeText={(username) => {setName(username)}} placeholder="Username" style={styles.textBoxes}></TextInput>

      <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>

      

      <button onClick={create}>Submit Data </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBoxes: {
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor: 'gray',
    bordeWidth: 0.2,
    borderRadius: 10
  }
});
