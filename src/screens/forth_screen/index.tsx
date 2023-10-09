import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import ColorButtonComponent from '../../components/color_button_component';



const ColorBox = () => {
    const [redValue, setRedValue] = useState(0);
    const [greenValue, setGreenValue] = useState(0);
    const [blueValue, setBlueValue] = useState(0);
    function handleCases(redValue:number, greenValue:number, blueValue:number) {
        if (redValue < 0) {
            setRedValue(0);
        }
        if (redValue > 255) {
            setRedValue(255)
        } if (greenValue < 0) {
            setGreenValue(0);
        }
        if (greenValue > 255) {
            setGreenValue(255)
        }
        if (blueValue < 0) {
            setBlueValue(0);
        }
        if (blueValue > 255) {
            setBlueValue(255)
        }
    }

    handleCases(redValue, greenValue, blueValue);

    useEffect(() => {
        console.warn('Red value is updated by: ', redValue);
    }, [redValue]);
    useEffect(() => {
        console.warn('Green value is updated by: ', greenValue);
    }, [greenValue]);
    useEffect(() => {
        console.warn('Blue value is updated by: ', blueValue);
    }, [blueValue]);

    const handleRedColorClick = (value:number) => {
        setRedValue(prevVal => {
            return prevVal + value
        })
    }

    const handleBlueColorClick = (value:number) => {
        setBlueValue(prevVal => {
            return prevVal + value
        })
    }

    const handleGreenColorClick = (value:number) => {
        setGreenValue(prevVal => {
            return prevVal + value
        })
    }


    let colorValue = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    
    return (
        <View style={styles.mainContainer}>
            <View style={styles.showColorCombo}>
                <View style={[styles.showColorComboView,{backgroundColor: colorValue }]}></View>
                <Text style={styles.showColorComboText}>RGB({redValue}, {greenValue}, {blueValue})</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <ColorButtonComponent colorName='Red' handleRedColorClick={handleRedColorClick}></ColorButtonComponent>
                <ColorButtonComponent colorName='Green' handleGreenColorClick={handleGreenColorClick}></ColorButtonComponent>
                <ColorButtonComponent colorName='Blue' handleBlueColorClick={handleBlueColorClick}></ColorButtonComponent>

            </View>
        </View>
    )
}




export default ColorBox;