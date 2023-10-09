import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import DayComponent from '../../components/day_component';
import FeatureComponent from '../../components/feature_component';
import { styles } from './style';
const Third_Screen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.navContainer}>
                <View style={styles.navIconContainer}>
                    <Arrow name='arrow-back' size={20} color='#0b1f51'></Arrow>

                </View>
                <Image source={require('../../Image/passportPhoto1.jpg')} style={styles.img}></Image>

            </View>
            <View style={styles.monthContainer}>
                <View style={styles.month}>
                    <Arrow name='arrow-back' size={20} color='#0b1f51'></Arrow>
                    <Text style={styles.prevMonthText}>Mar</Text>
                </View>
                <Text style={styles.currentMonthText}>April</Text>
                <View style={styles.month}>

                    <Text style={styles.nextMonthText}>May</Text>
                    <Arrow name='arrow-forward' size={20} color='#0b1f51'></Arrow>
                </View>
            </View>
            <ScrollView>

            <ScrollView horizontal={true}>
            <View style={styles.daysContainer}>
                    <DayComponent day="12" week="Wed" selected={1}></DayComponent>
                    <DayComponent day="13" week="Thu" selected={0}></DayComponent>
                    <DayComponent day="14" week="Fri" selected={0}></DayComponent>
                    <DayComponent day="15" week="Sat" selected={0}></DayComponent>
                    <DayComponent day="16" week="Sun" selected={0}></DayComponent>
                    <DayComponent day="17" week="Mon" selected={0}></DayComponent>
                    <DayComponent day="18" week="Tue" selected={0}></DayComponent>

                </View>
            </ScrollView>
                
                <View style={styles.ongoingContainer}>
                    <Text style={styles.ongoingText}>Ongoing</Text>
                </View>

                <View style={styles.mainBoxContainer}>
                    <View style={styles.innerBoxContainer}>
                        <Text style={styles.textColor}>9 AM</Text>
                        <Text style={styles.textColor}>10 AM</Text>
                    </View>
                    <FeatureComponent feature="Mobile app design" names="Mike and Rohani" timing='9.00 AM - 10.00 AM'></FeatureComponent>
                </View>
                <View style={styles.radioContainer}>
                    <Text style={styles.radioText}>10 AM</Text>
                    <View style={styles.cricle}></View>
                    <View style={styles.horizontalLine}></View>
                </View>

                <View style={[styles.mainBoxContainer,styles.moreStyleInMainBox]}>
                    <View style={styles.innerBoxContainer}>
                        <Text style={styles.textColor}>11 AM</Text>
                        <Text style={styles.textColor}>12 AM</Text>
                    </View>
                    <FeatureComponent feature="Software Testing" names="Mike and Rohani" timing='11.00 AM - 12.00 AM'></FeatureComponent>
                </View>
                <View style={[styles.mainBoxContainer,styles.moreStyleInMainBox]}>
                    <View style={styles.innerBoxContainer}>
                        <Text style={styles.textColor}>1 PM</Text>
                        <Text style={styles.textColor}>2 PM</Text>
                    </View>
                    <FeatureComponent feature="Web Development" names="Mike and Rohani" timing='1.00 PM - 2.00 PM'></FeatureComponent>
                </View>
                <View style={[styles.mainBoxContainer,styles.moreStyleInMainBox]}>
                    <View style={styles.innerBoxContainer}>
                        <Text style={styles.textColor}>9 AM</Text>
                        <Text style={styles.textColor
                        }>10 AM</Text>
                    </View>
                    <FeatureComponent feature="Mobile app design" names="Mike and Rohani" timing='9.00 AM - 10.00 AM'></FeatureComponent>
                </View>

            </ScrollView>
        </View>
    )
}



export default Third_Screen;