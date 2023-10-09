import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from './style';
const FirstScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imgContainger}>
                <Image source={require("../../Image/homeImg.jpg")} style={styles.img}></Image>

            </View>
            <Text style={styles.titleText}>Manage your{"\n"}daily tasks</Text>
            <Text style={styles.subTitle}>Team and Project management with{'\n'}solution providing app</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonCircle}></View>
                <Text style={styles.buttonText}>Get Started</Text>
            </View>
        </View>
    )

}



export default FirstScreen;