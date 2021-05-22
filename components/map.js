import React from 'react';
import {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';


export default class Map extends Component {
    styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    render() {
        return (
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={this.styles.container}
                    region={{
                        latitude: 44.7012,
                        longitude:  37.7835,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.009,
                    }} />
        );
    }
}
