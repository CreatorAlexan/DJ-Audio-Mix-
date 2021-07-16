import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Buttons extends React.Component {
  displayAlert = () => {
    alert('Play sound!!');
  };
  render() {
    return (
      <View style={{ backgroundColor: 'black' }}>
        <TouchableOpacity
          onPress={this.displayAlert}
          style={{
            marginLeft: 60,
            marginTop: 50,
            width: 200,
            height: 50,
            backgroundColor: 'red',
          }}>
          {' '}
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {' '}
            Sound 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.displayAlert}
          style={{
            marginLeft: 60,
            marginTop: 50,
            width: 200,
            height: 50,
            backgroundColor: 'orange',
          }}>
          {' '}
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {' '}
            Sound 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.displayAlert}
          style={{
            marginLeft: 60,
            marginTop: 50,
            width: 200,
            height: 50,
            backgroundColor: 'green',
          }}>
          {' '}
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {' '}
            Sound 3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.displayAlert}
          style={{
            marginLeft: 60,
            marginTop: 50,
            width: 200,
            height: 50,
            backgroundColor: 'blue',
          }}>
          {' '}
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {' '}
            Sound 4
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <View>
        <Buttons />
      </View>
    );
  }
}
