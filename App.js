import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web'; //Added
import { useState } from 'react/cjs/react.development'; //Added

import { doc, setDoc, addDoc, collection } from "firebase/firestore"; //Added from Firebase
import { db } from './components/Config'; //Added

export default function App() {

  const [authorFirstName, setAuthorFirstName] = useState('');
  const [authorSurname, setAuthorSurname] = useState('');
  const [available, setAvailable] = useState(true);
  const [cover_img, setCover_img] = useState('');
  const [numberOfReviews, setNumberOfReviews] = useState(0);
  const [title, setTitle] = useState('');
  
  function create () {

    // const docRef = await addDoc(collection(db, "books"), {
    //   authorFirstName: authorFirstName,
    //   authorSurname: authorSurname,
    //   available: available,
    //   cover_img: cover_img,
    //   numberOfReviews: numberOfReviews,
    //   title: title,
    //   location: location
    // });

   // console.log("Document written with ID: ", docRef.id);

    addDoc(collection(db, "books"), {
      authorFirstName: authorFirstName,
      authorSurname: authorSurname,
      available: available,
      cover_img: cover_img,
      numberOfReviews: numberOfReviews,
      title: title
    }).then(() => {
      console.log('data submitted');
    }).catch((error) => {
      console.log(error);
    });
    };
 
  return (
    <View style={styles.container}>

      <Text>Firebase CRUD test app</Text>

      <TextInput value={authorFirstName} onChangeText={(authorFirstName) => {setAuthorFirstName(authorFirstName)}} placeholder="Author first name " style={styles.textBoxes}></TextInput>

      <TextInput value={authorSurname} onChangeText={(authorSurname) => {setAuthorSurname(authorSurname)}} placeholder="Author surname" style={styles.textBoxes}></TextInput>

      <TextInput value={available} onChangeText={(available) => {setAvailable(available)}} placeholder="Cover image " style={styles.textBoxes}></TextInput>

      <TextInput value={cover_img} onChangeText={(cover_img) => {setCover_img(cover_img)}} placeholder="Cover image " style={styles.textBoxes}></TextInput>

      <TextInput value={location} onChangeText={(location) => {setLocation(location)}} placeholder="Location " style={styles.textBoxes}></TextInput>

      <TextInput value={numberOfReviews} onChangeText={(numberOfReviews) => {setCover_img(cover_img)}} placeholder="Cover image " style={styles.textBoxes}></TextInput>

      <TextInput value={title} onChangeText={(title) => {setTitle(title)}} placeholder="Title" style={styles.textBoxes}></TextInput>

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

