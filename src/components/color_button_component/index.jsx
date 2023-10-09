import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from './style';

const ColorButtonComponent = (props) => {
    function addColorValue() {
        if (props.colorName === 'Red') {
            props.handleRedColorClick(10);
        } else if (props.colorName === 'Blue') {
            props.handleBlueColorClick(10);
        } else if (props.colorName == 'Green') {
            props.handleGreenColorClick(10);
        }
    }
    function subColorValue() {
        if (props.colorName === 'Red') {
            props.handleRedColorClick(-10);
        } else if (props.colorName === 'Blue') {
            props.handleBlueColorClick(-10);
        } else if (props.colorName == 'Green') {
            props.handleGreenColorClick(-10);
        }
    }
    return (
        <View style={styles.mainbodyOfButtonComponent}>
            <Text style={styles.textOfButtonComponent}>{props.colorName}</Text>
            <View style={styles.viewOfButtonComponent}>
                <Button title='+' onPress={addColorValue}></Button>
                <Button title='-' onPress={subColorValue}></Button>

            </View>
        </View>
    )
}


export default ColorButtonComponent