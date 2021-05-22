import React from 'react';
import {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { BottomNavigation } from 'react-native-material-ui';


export default class Bar extends Component {
    styles = StyleSheet.create({
        qr: {
            borderRadius:64,
            borderColor: 'black',
            borderWidth: 3,
            width: 100,
            backgroundColor: 'black',
        }
    })
    render() {
        return (
            <BottomNavigation active={this.props.active} hidden={false}>
                <BottomNavigation.Action
                    key="home"
                    icon="home"
                    onPress={() => this.props.activate('home')}
                />
                <BottomNavigation.Action
                    key="search"
                    icon="search"
                    onPress={() => this.props.activate('search')}
                />
                <BottomNavigation.Action
                    style={this.styles.qr}
                    key="qr"
                    icon="qr-code"
                    onPress={() => this.props.activate('qr')}
                />
                <BottomNavigation.Action
                    key="person"
                    icon="person"
                    onPress={() => this.props.activate('person')}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    onPress={() => this.props.activate('settings')}
                />
            </BottomNavigation>
        )
    }
}
