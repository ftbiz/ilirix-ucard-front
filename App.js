import React from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';
import {Component} from 'react';
import Map from './components/map';
import Bar from './components/bar';
import QrGenerator from './components/qrGenerator';
import {Card, Icon} from 'react-native-material-ui';
import CatCards from './components/cat_cards';
import QrScanner from './components/QrScanner';
import Setting from './components/settings';

export default class App extends Component {
    styles = StyleSheet.create({
        container: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            position: 'absolute',
            backgroundColor: "white",
        },
    });

    state = {
        active: "home"
    }

    activate = (page) => {
        this.setState({
            active: page
        })
    }
    render() {
        if (this.state.active == 'home') {
            return (
                <View style={this.styles.container}>
                    <Map />
                    <Bar active={this.state.active}  activate={this.activate}/>
                </View>
            );
        }
        else if (this.state.active == 'search') {
            return (
                <View style={this.styles.container}>
                    <CatCards/>
                    <Bar active={this.state.active} activate={this.activate}/>
                </View>

            );
        }
        else if (this.state.active == 'qr') {
            return (
                <View style={this.styles.container}>
                    <QrScanner />
                    <Bar active={this.state.active} activate={this.activate}/>
                </View>
            );
        } else if (this.state.active == 'settings') {
            return (
                <View style={this.styles.container}>
                    <Setting />
                    <Bar active={this.state.active} activate={this.activate}/>
                </View>
            );
        } else {
            return (
                <View style={this.styles.container}>
                    <QrGenerator value="my_very_bigasdasd_id0sdfasdfasdf" />
                    <Bar active={this.state.active}  activate={this.activate}/>
                </View>

            );
        }

    }
}
