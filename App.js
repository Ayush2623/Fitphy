import React, { JSXElementConstructor, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Navigation from './Screens/Navigation/Navigation';
import Login from './Screens/Login/Login';
import { getDocs, setDoc, collection, doc, addDoc } from "firebase/firestore";

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from 'firebase/auth';
import { auth, db } from './firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [userInfo, setUserInfo] = React.useState({});

  const [loading, setLoading] = React.useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '144161466815-n11gde0neratj42379ig3n67s5kkfps3.apps.googleusercontent.com',
    iosClientId: '144161466815-k2i5gjno18kcd5u4psunv6bq0od01i3i.apps.googleusercontent.com'
  })

  React.useEffect(() => {
    const handleResponse = async () => {
      if (response?.type === "success") {
        const { id_token } = response.params;
        const credential = GoogleAuthProvider.credential(id_token);
        await signInWithCredential(auth, credential);

        const user = auth.currentUser;

        if (user && user.email) {
          // Set the user data in Firestore with the user's email as the document ID
          const usersCollectionRef = collection(db, "users");
          const userRef = doc(usersCollectionRef, user.email);
          const userData = {
            email: user.email,
            phoneNumber: user.phoneNumber,
            name: user.displayName,
            photoUrl: user.photoURL
          };

          await setDoc(userRef, userData, { merge: true });
        }
      }
    };

    handleResponse();
  }, [response]);



  const checkLocaluser = async () => {
    try {
      setLoading(true);
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      setUserInfo(userData);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    checkLocaluser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserInfo(user);
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        AsyncStorage.getItem('@user', (err, result) => {
          console.log(result);
          var userdata = JSON.stringify(result);
          console.log(userdata);
        });
      } else {
        console.log("Unauthorized");
        setUserInfo('');
      }
    });

    return () => unsub();

  }, [])

  if (loading)
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <ActivityIndicator size={'large'} />
      </View>
    )

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Navigation /> */}
      {userInfo ?
        <Navigation />
        :
        <Login promptAsync={promptAsync} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
