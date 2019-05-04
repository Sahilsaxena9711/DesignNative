import React from 'react';
import { Dimensions, StatusBar, TouchableHighlight, Image, View, Text, StyleSheet } from 'react-native';
import lock from '../assets/hamburger.png'

export default class Notifications extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Notification',
      headerStyle: { backgroundColor: '#374189' },
      headerTitleStyle: { color: 'white', marginLeft: Dimensions.get('window').width / 2 - 90 },
      headerLeft: (
        <TouchableHighlight style={{ margin: 5 }} onPress={() => navigation.openDrawer()}>
          <Image
            source={lock}
            style={{ width: 35, height: 35 }}
          />
        </TouchableHighlight>
      )
    }
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#374189" barStyle="light-content" />
        <Text>
          Notification
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  },
  ham: {
    margin: 5
  }
})