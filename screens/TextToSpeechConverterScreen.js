import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ExpoFont} from 'react-native';
import * as Speech from 'expo-speech';
import { Header, Icon } from 'react-native-elements';

export default class TextToSpeechConverterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      thingToSay: ''
    }
  }

  speak = () => {
    if(this.state.thingToSay === '') {
      alert("Please enter a word.");
    } else {
      Speech.speak(this.state.thingToSay);
    }
  }

  render() {
    return (
      <View style = {styles.textContainer}>
        <Header
          backgroundColor = "#07B89E"
          centerComponent = {{
            text: 'Text to Speech Converter',
            style: {color: 'black', fontSize: 15, fontWeight: 700}
          }}
        />

        <Image
          style = {styles.imageIcon}
          source = {{
            uri: 'https://img.utdstc.com/icons/voice-to-text-text-to-speech-android.png:225'
          }}
        />

        <TextInput
          style = {styles.inputBox}
          placeholder = {"Enter the Letter or Word"}
          onChangeText = {(text) => {
            this.setState({
              thingToSay: text
            });
          }}
          value = {this.state.thingToSay}
        />

        <View>
          <TouchableOpacity style = {styles.button} onPress = {this.speak}>
            <Text style = {styles.text2}>Click Here to Hear the Text</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none'
  },
  textContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  text2: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#07B89E',
    marginTop: 80,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95
  }
});