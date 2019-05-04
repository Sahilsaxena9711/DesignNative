import React from 'react';
import { Text, StatusBar, View, Image, ImageBackground, TouchableHighlight, TextInput, StyleSheet, Dimensions } from 'react-native';
import backLogin from '../assets/backlogin.jpg';
import lock from '../assets/lock.png';
export default class Login extends React.Component {
    // static navigationOptions = {
    //     header: null,
    // }
    _onPressButton = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#374189" barStyle="light-content" />
                <ImageBackground source={backLogin} style={styles.imgBackground} >
                    <View style={styles.form}>
                        <View style={styles.lockContainer}>
                            <Image style={styles.lockImage} source={lock}/>
                        </View>
                        <TextInput selectionColor='white' style={styles.username} placeholderTextColor="white" placeholder="Username" />
                        <TextInput selectionColor='white' secureTextEntry={true} style={styles.password} placeholderTextColor="white" placeholder="Password" />
                        <TouchableHighlight underlayColor='#a042b7' style={{ marginVertical: '' }} style={styles.button} onPress={this._onPressButton}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    form: {
        width: (Dimensions.get('window').width * 80) / 100,
        marginLeft: (Dimensions.get('window').width * 10) / 100,
        height: (Dimensions.get('window').height * 60) / 100,
        // backgroundColor: 'black'
        marginTop: (Dimensions.get('window').height * 10) / 100
    },
    imgBackground: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    username: {
        marginTop: (Dimensions.get('window').height * 5) / 100,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 17
    },
    password: {
        marginTop: (Dimensions.get('window').height * 10) / 100,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        fontSize: 17
    },
    button: {
        backgroundColor: 'mediumorchid',
        borderRadius: 7,
        marginTop: (Dimensions.get('window').height * 10) / 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        margin: 10,
        fontSize: 17
    },
    lockImage: {
        height: 40,
        width: 40,
    },
    lockContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
