import React, { useState } from "react";
import { Button, Platform, Text, Vibration, View, SafeAreaView, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Audio } from 'expo-av';

const Separator = () => {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

const App = () => {

  const onTouchListener = () => {
  (async () => {
         const playTrack = await Audio.Sound.createAsync(
         require('./assets/bell.mp3'),
                        { shouldPlay: true }
                        );
                })();
                }

 const initButton = () =>
    Alert.alert(
      "Mode options",
      "Select mode",
      [
         { text: "Ring bell",
                 onPress: (onTouchListener)},
                 {
                  text: "Vibrate",
                  onPress: () =>  Vibration.vibrate()
                },
                 {
                  text: "Cancel",
                  onPress: () => console.log("Canceled"),
                  style: "cancel"
                },  
      ]
    );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>Mode phone - Bell and Vibration</Text>
            <TouchableOpacity  style={styles.appButtonContainer} onPress={initButton}>
             <Text style = {styles.appButtonText}>
               Select Notification
             </Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 44,
    padding: 8
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  paragraph: {
    margin: 24,
    textAlign: "center"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
   appButtonContainer: {
       elevation: 8,
       backgroundColor: "#009688",
       borderRadius: 10,
       paddingVertical: 10,
       paddingHorizontal: 12
     },
     appButtonText: {
       fontSize: 18,
       color: "#fff",
       fontWeight: "bold",
       alignSelf: "center",
       textTransform: "uppercase"
     }
});

export default App;