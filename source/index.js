import React, { Component } from 'react';
import {
    StyleSheet,
    //View,
    // Image,
    Animated,
    // Easing,
    //Text,
} from 'react-native';
// import PropTypes from 'prop-types';

// Utils
import calculateDegreeFromLabels from './utils/calculate-degree-from-labels';
import calculateLabelFromValue from './utils/calculate-label-from-value';
import limitValue from './utils/limit-value';
// import validateSize from './utils/validate-size';

// Style
// import style, { width as deviceWidth } from './style';

class Speedometer extends Component {
    constructor(props) {
        super(props);
        this.speedometerValue = new Animated.Value(props.defaultValue)
    }

    render() {
        const {
            value,
            size,
            minValue,
            maxValue,
            easeDuration,
            allowedDecimals,
            labels,
            needleImage,
            wrapperStyle,
            outerCircleStyle,
            halfCircleStyle,
            imageWrapperStyle,
            imageStyle,
            innerCircleStyle,
            labelWrapperStyle,
            labelStyle,
            labelNoteStyle,
        } = this.props;
        
        const degree = 180;
        
        const perLevelDegree = calculateDegreeFromLabels(degree, labels);

        const label = calculateLabelFromValue(
            limitValue(value,
                minValue,
                maxValue,
                allowedDecimals), labels, minValue, maxValue,
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

export default Speedometer;