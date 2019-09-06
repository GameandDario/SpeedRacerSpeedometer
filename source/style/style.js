import { StyleSheet, Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');

export default StyleSheet.create({
    maincontainer: {
        flex: 1,
    },

    container: {
        flex: 1,
    },
    textInput: {
        borderBottomWidth: 0.3,
        borderBottomColor: 'black',
        height: 25,
        fontSize: 16,
        marginVertical: 50,
        marginHorizontal: 20,
    },
    wrapper: {
        flex: 1,
        marginVertical: 5,
        alignSelf: 'center',
    },
    // Circular Container
    circleWrapper: {
        overflow: 'hidden',
    },
    outerCircle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: '#ffffff',
        backgroundColor: '#e6e6e6',
    },
    halfCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    imageWrapper: {
        position: 'absolute',
        left: 0,
        zIndex: 10,
    },
    image: {
        resizeMode: 'stretch',
        height: width - 20,
        width: width - 20,
    },
    innerCircle: {
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: width * 0.6,
        height: (width / 2) * 0.6,
        borderTopLeftRadius: width / 2 - 10,
        borderTopRightRadius: width / 2 - 10,
    },
    labelWrapper: {
        marginVertical: 5,
        alignItems: 'center',
    },
    label: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    labelNote: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});