import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import db from '../localdb';
import PhonicSoundButton from '../components/PhonicSoundButton';

export default class PhonicsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: []
    }
  }

  render() {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Header
            centerComponent = {{
              backgroundColor: 'blue',
              text: 'Phonics',
              style: {color: '#fff', fontSize: 20, fontWeight: "bold"}
            }}
          />

          <TextInput
            style = {styles.inputBox}
            placeholder = "Enter Any Word Here"
            onChangeText = {(text) => {
              this.setState({
                text: text
              });
            }}
            value = {this.state.text}
          />

          <TouchableOpacity
            style = {styles.button}
            onPress = {() => {
              const word = this.state.text.toLowerCase().trim();
              if (db[word]) {
                this.setState({
                  chunks: db[word].chunks,
                  phonicSounds: db[word].phones
                });
              } else {
                alert("The word does not exist in our database.");
              }
            }}
          >
            <Text style = {styles.buttonText}>Click Here to See and Hear the Phonic Breakdown of the Word</Text>
          </TouchableOpacity>

          <View>
            {this.state.chunks.map((item, index) => {
              return (
                <PhonicSoundButton
                  wordChunk = {this.state.chunks[index]}
                  soundChunk = {this.state.phonicSounds[index]}
                  buttonIndex = {index}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none'
  },
  button: {
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'blue',
    marginTop: 80,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: -12
  }
});