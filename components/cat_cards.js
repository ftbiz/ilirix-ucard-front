import React from 'react';
import {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-material-ui';


export default class CatCards extends Component {
    styles = StyleSheet.create({
        container: {
            backgroundColor: "white",
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        card: {
            width: 100,
            height: 100,
            flex: 0.25,
            shadowColor: 'black',
            shadowOffset: {width: 10, height: 10}
        }
    });

    render() {
        return (
            <View style={this.styles.container}>
                        <Text>Тут буду карточки организаций</Text>
            </View>
        );
    }
}
