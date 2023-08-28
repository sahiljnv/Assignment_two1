import React, { useState, useEffect } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';


function handleCases(setRedValue, setGreenValue, setBlueValue, redValue, greenValue, blueValue) {
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


const Color_Box = () => {
    const [redValue, setRedValue] = useState(0);
    const [greenValue, setGreenValue] = useState(0);
    const [blueValue, setBlueValue] = useState(0);

    handleCases(setRedValue, setGreenValue, setBlueValue, redValue, greenValue, blueValue);

    useEffect(() => {
        console.warn('Red value is updated by: ', redValue);
    }, [redValue]);
    useEffect(() => {
        console.warn('Green value is updated by: ', greenValue);
    }, [greenValue]);
    useEffect(() => {
        console.warn('Blue value is updated by: ', blueValue);
    }, [blueValue]);

    const handleRedColorClick = (value) => {
        setRedValue(prevVal => {
            return prevVal + value
        })
    }

    const handleBlueColorClick = (value) => {
        setBlueValue(prevVal => {
            return prevVal + value
        })
    }

    const handleGreenColorClick = (value) => {
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
                <Color_Button_Component colorName='Red' handleRedColorClick={handleRedColorClick}></Color_Button_Component>
                <Color_Button_Component colorName='Green' handleGreenColorClick={handleGreenColorClick}></Color_Button_Component>
                <Color_Button_Component colorName='Blue' handleBlueColorClick={handleBlueColorClick}></Color_Button_Component>

            </View>
        </View>
    )
}

const Color_Button_Component = (props) => {
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

const styles = StyleSheet.create({
    mainContainer : { 
        padding: 30,
        backgroundColor:'black',
        flex:1 
    },
    showColorCombo : { 
        alignItems: 'center' 
    },
    showColorComboView : { 
        height: 200, 
        width: 200,
        borderWidth:2,
        borderColor:"white"
    },
    showColorComboText : { 
        paddingTop: 20, 
        fontSize: 30 
    },
    buttonsContainer : { 
        paddingTop: 40, 
        flexDirection: 'row', 
        gap: 60, 
        justifyContent: 'center' 
    },
    mainbodyOfButtonComponent : { 
        alignItems: 'center' 
    },
    textOfButtonComponent : { 
        fontSize: 30, 
        paddingBottom: 20 
    },
    viewOfButtonComponent : { 
        gap: 40, 
        width: 50 
    }

})

export default Color_Box;