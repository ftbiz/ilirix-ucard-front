import React from 'react';
import {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default class PopupMessage extends Component {
    styles = StyleSheet.create({
        container: {
            backgroundColor: "white",
            paddingLeft: 100,
            left:0,
            right: 0,
            margin: 32,
            bottom: 0,
            position: 'absolute',
            borderRadius: 16,
            flex: 1,
            flexDirection: 'row',
            height: 80,
        },
        header: {
            fontWeight: 'bold',
            padding: 8
        },
        message: {
            paddingBottom: 8,
            paddingLeft: 8,
            paddingRight: 8,
        },
        logo_back: {
            position: 'absolute',
            width: 100,
            height: 100,
            marginLeft: 10,
            marginTop: -10,
            borderColor: "white",
            borderWidth: 16,
            borderRadius: 64,
        },
        logo: {
            position: 'absolute',
            width: 80,
            height: 80,
            marginLeft: 20,
            marginTop: 0,
            borderColor: this.props.color,
            borderWidth: 8,
            borderRadius: 64,
        }
    });
    state = {
        icon: require('../assets/img/logo.png'),
    }
    render() {
        return (
            <View style={this.styles.container}>
                <View style={this.styles.logo_back}></View>
                <Image style={this.styles.logo} source={require('../assets/img/logo.png')}/>
                <View style={this.styles.message}>
                    <Text style={this.styles.header}>{this.props.header}</Text>
                    <Text style={this.styles.message}>{this.props.message}</Text>
                </View>
            </View>
        );
    }
}
