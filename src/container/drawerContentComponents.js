import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StatusBar, StyleSheet, Image, Dimensions, ImageBackground, TouchableHighlight } from 'react-native'
import contact from '../assets/contact.png';
import back from '../assets/drawerback.png';

export default class DrawerContentComponents extends React.Component {

    navigateToScreen = (route) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })


    render() {
        return (
            <ImageBackground source={back} style={styles.backImg}>
                {/* <StatusBar backgroundColor="white" barStyle="light-content" /> */}
                <View style={styles.container}>
                    {/* <StatusBar  backgroundColor="#374189" barStyle="light-content" /> */}
                    <View style={styles.headerContainer}>
                        <Image source={contact} style={{ width: 100, height: 100 }} />
                    </View>
                    <Text style={styles.username}>Sahil Saxena</Text>
                    <View style={styles.screenContainer}>
                        <TouchableHighlight underlayColor='azure' style={styles.screenStyle} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.text}>Home</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='azure' style={styles.screenStyle} onPress={this.navigateToScreen('Notifications')}>
                            <Text style={styles.text}>Notification</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.textFooter}>Version 2.0 beta</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    headerContainer: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 280
        // backgroundColor: '#374189'
    },
    headerText: {
        color: '#fff8f8',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#374189'
    },
    textFooter: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white'
    },
    screenContainer: {
        paddingTop: 20
    },
    screenStyle: {
        // height: 40,
        paddingTop: 10,
        paddingBottom: 10,
        width: 280,
        backgroundColor: 'aliceblue',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    screenTextStyle: {
        fontSize: 20,
        marginLeft: 20
    },
    footerContainer: {
        height: 50,
        justifyContent: 'center',
        textAlign: 'center',
        width: 280,
        marginTop: Dimensions.get('window').height * 50 / 100
    },
    image: {
        width: 100,
        height: 100,
    },
    backImg: {
        width: '100%',
        height: '100%',
    },
    username: {
        textAlign: 'center',
        fontSize: 18
    }
});