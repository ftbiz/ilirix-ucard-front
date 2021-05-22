import React from 'react';
import {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class QrGenerator extends Component {
    styles = StyleSheet.create({
        container: {
            backgroundColor: "white",
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        header: {
            fontSize: 20,
            marginBottom:20,
        }
    });

    render() {
        return (
            <View style={this.styles.container}>
                <Text style={this.styles.header}>Мой идентификатор</Text>
                <QRCode
                    value={this.props.value}
                    color="black"
                    backgroundColor='white'
                    size={300}
                    ecr={'h'}
                    logoSize={80}
                    logoMargin={3}
                    logoBorderRadius={16}
                    logoBackgroundColor='white'
                    logo={require('../assets/img/logo.png')}
                />
            </View>
        );
    }
}
