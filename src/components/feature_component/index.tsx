import { Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
type featureProps = {
    feature:string,
    names:string,
    timing:string
}
const FeatureComponent = (props: featureProps) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>{props.feature}</Text>
            <Text>{props.names}</Text>
            <View style={styles.imgContainer}>
              
                    <Image source={require('../../Image/passportPhoto1.jpg')} style={styles.img}></Image>
                    <Image source={require('../../Image/passportPhoto2.jpg')} style={[styles.img,styles.imgPosition]}></Image>
                
                <Text>{props.timing}</Text>
            </View>
        </View>
    )
}

export default FeatureComponent

