import React from 'react';
import { Dimensions, ImageBackground, StatusBar, TouchableHighlight, Image, ScrollView, Text, StyleSheet } from 'react-native';
import lock from '../assets/hamburger.png'
import background from '../assets/background.png'
import { View } from 'native-base';
import up from '../assets/up.png'

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      headerStyle: { backgroundColor: '#374189' },
      headerTitleStyle: { color: 'white', marginLeft: Dimensions.get('window').width / 2 - 80 },
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

  constructor(props) {
    super(props);
    this.state = {
      data: [{ "symbol": "$", "value1": "21,953.00", "text": "Sales Trend", "value2": "$70,000", "company": "Skechers", "percent": "5%" },
      { "symbol": "$", "value1": "45,543.13", "text": "Sales Trend", "value2": "$30,0430", "company": "Nike", "percent": "21%" },
      { "symbol": "$", "value1": "11,326.76", "text": "Sales Trend", "value2": "$76,306", "company": "Adidas", "percent": "61%" },
      { "symbol": "$", "value1": "70,186.02", "text": "Sales Trend", "value2": "$90,194", "company": "Reebok", "percent": "76%" },
      { "symbol": "$", "value1": "99,726.50", "text": "Sales Trend", "value2": "$63,660", "company": "Woodland", "percent": "20%" },
      { "symbol": "$", "value1": "21,953.00", "text": "Sales Trend", "value2": "$70,000", "company": "Skechers", "percent": "75%" },
      { "symbol": "$", "value1": "45,543.13", "text": "Sales Trend", "value2": "$30,0430", "company": "Nike", "percent": "53%" },
      { "symbol": "$", "value1": "11,326.76", "text": "Sales Trend", "value2": "$76,306", "company": "Adidas", "percent": "2%" },
      { "symbol": "$", "value1": "70,186.02", "text": "Sales Trend", "value2": "$90,194", "company": "Reebok", "percent": "57%" },
      { "symbol": "$", "value1": "99,726.50", "text": "Sales Trend", "value2": "$63,660", "company": "Woodland", "percent": "91%" }]
    }
  }

  render() {
    return (
      <ImageBackground source={background} style={styles.back}>
        <StatusBar backgroundColor="#374189" barStyle="light-content" />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} vertical={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={true}>
          <View style={styles.dash}><Text style={styles.dashText}>Dashboard</Text></View>
          <View style={{ minHeight: Dimensions.get('window').height - 1.7 * (Dimensions.get('window').height * 35 / 100) + (this.state.data.length * Dimensions.get('window').height * 13 / 100) }}>
            <View style={styles.scrollContainer}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                {this.state.data.map((data, key) => (<View key={key} style={styles.tile}>
                  <View style={styles.symValCont}>
                    <Text style={styles.symbol}>{data.symbol} </Text><Text style={styles.value1}>{data.value1}</Text>
                  </View>
                  <Text style={styles.text}>
                    {data.text}
                  </Text>
                  <View style={styles.budTotCont}>
                    <View style={styles.budCont}>
                      <Text style={styles.value2}>Budget : {data.value2}</Text>
                    </View>
                    <View style={styles.totCont}>
                      <Text style={styles.value3}>Total : {data.value2}</Text>
                    </View>
                  </View>
                  <Text style={styles.company}>{data.company}</Text>
                </View>))}
              </ScrollView>
            </View>
            <View style={styles.scrollContainerBot}>
              {this.state.data.map((data, key) => (
                <View style={styles.bottomCard}>
                  <Image style={{ width: 20, height: 20, marginTop: Dimensions.get('window').height * 4 / 100, marginLeft: 20 }} source={up} />
                  <Text style={styles.percent}>
                   {data.percent} drop in Sales Trend
                    </Text>
                </View>))}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
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
  },
  scview: {
    flex: 1
  },
  back: {
    width: '100%',
    height: '100%'
  },
  scrollContainer: {
    height: Dimensions.get('window').height * 35 / 100,
    marginLeft: 5
  },
  scrollContainerBot: {
    height: Dimensions.get('window').height * 35 / 100,
    marginLeft: 5
  },
  tile: {
    backgroundColor: 'rgba(239, 241, 244, 0.9)',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    height: Dimensions.get('window').height * 30 / 100,
    margin: 10,
    width: Dimensions.get('window').width * 90 / 100,
  },
  symValCont: {
    paddingTop: Dimensions.get('window').height * 3 / 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  symbol: {
    fontSize: 18,
    color: 'black'
  },
  value1: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: Dimensions.get('window').height * 3 / 100
  },
  value2: {
    fontSize: 18,
    color: 'green',
    marginLeft: 10
  },
  value3: {
    fontSize: 18,
    color: 'red',
    marginLeft: 30
  },
  dashText:{
    fontSize: 25,
    color: '#eff1f4'
  },
  dash:{
    margin: 20
  },
  budTotCont: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height * 5 / 100,
    width: Dimensions.get('window').width * 90 / 100,
  },
  budCont: {
    width: Dimensions.get('window').width * 44 / 100,
  },
  totCont: {
    width: Dimensions.get('window').width * 44 / 100,
  },
  company: {
    textAlign: 'center',
    fontSize: 18,
    color: 'dodgerblue',
    marginTop: Dimensions.get('window').height * 2 / 100
  },
  bottomCard: {
    height: Dimensions.get('window').height * 10 / 100,
    backgroundColor: 'rgba(239, 241, 244, 0.9)',
    marginLeft: 25,
    flexDirection: 'row',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    marginTop: Dimensions.get('window').height * 3 / 100,
    width: Dimensions.get('window').width * 100 / 100,
  },
  percent: {
    fontSize: 20,
    color: '#374189',
    marginTop: Dimensions.get('window').height * 3 / 100,
    marginLeft: 20
  },
})