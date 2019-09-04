import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class LaunchScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Speeeedometer!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LaunchScreen;