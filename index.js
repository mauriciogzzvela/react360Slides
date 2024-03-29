import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    VrButton
} from 'react-360';
import Home from './components/Home';
export default class Hello360 extends React.Component {

    render() {
        return (
            <Home/>
        );
    }
};



const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingBox: {
        padding: 20,
        backgroundColor: '#000000',
        borderColor: '#639dda',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
