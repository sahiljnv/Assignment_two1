import React from 'react';
import { View, Text, Image } from 'react-native';
import Calendar from 'react-native-vector-icons/AntDesign';
import Box1 from '../../components/box1_component';
import Box2 from '../../components/box2_component';
import { styles } from './style';

const Secont_Screen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.navBarContainer}>
                <View style={styles.navIconContainer}>
                    <View style={[styles.baseIconStyle, styles.iconFirstLine]}></View>
                    <View style={[styles.baseIconStyle, styles.icomSecondLine]}></View>
                    <View style={styles.baseIconStyle}></View>
                </View>
                <Image source={require('../../Image/passportPhoto1.jpg')} style={styles.img}></Image>
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingTitle}>Hi Sahil</Text>
                <Text>6 Tasks are panding</Text>
            </View>
            <View style={styles.overViewContainer}>
                <Text style={styles.overViewHeading}>Mobile app design</Text>
                <Text>Mike and Rohani</Text>
                <View style={styles.overViewImgContainer}>

                    <Image source={require('../../Image/passportPhoto1.jpg')} style={styles.img}></Image>
                    <Image source={require('../../Image/passportPhoto2.jpg')} style={[styles.img, styles.imgPosition]}></Image>
                    <Text >Now </Text>
                </View>
            </View>
            <View style={styles.reviewContainer}>
                <Text style={styles.reviewHeading}>Monthly Reviews</Text>
                <View style={styles.reviewIconContainer}>
                    <Calendar name='calendar' color='white' size={20}></Calendar>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.boxColumn}>
                    <Box1 day='22' note='Done'></Box1>
                    <Box2 day='7' note='In progerss' />
                </View>
                <View style={styles.boxColumn}>
                    <Box2 day='12' note='Waiting for review' />
                    <Box1 day='10' note='Ongoing'></Box1>
                </View>
            </View>
        </View>
    )
}



export default Secont_Screen;