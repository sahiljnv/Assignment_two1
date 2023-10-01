import React from 'react';
import { View, Text, Image } from 'react-native';
import Calendar from 'react-native-vector-icons/AntDesign';
import Home from 'react-native-vector-icons/Feather';
import File from 'react-native-vector-icons/AntDesign';
import People from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/FontAwesome6';
import Box1 from '../../components/box1_component';
import Box2 from '../../components/box2_component';


const Secont_Screen = () => {
    return (
        <View style={{ backgroundColor: '#4530b3', height: '100%',width:'100%', padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
               <View style={{flexDirection:'row',gap:5}}>
                <View style={{width:5,height:20,backgroundColor:"white",borderRadius:5,marginTop:15}}></View>
                <View style={{width:5,height:20,backgroundColor:"white",borderRadius:5,marginTop:7}}></View>
                <View style={{width:5,height:20,backgroundColor:"white",borderRadius:5}}></View>
               </View>
                <Image source={require('../../Image/passportPhoto1.jpg')} style={{ height: 40, width: 40, borderRadius: 20, borderColor: 'white', borderWidth: 2 }}></Image>
            </View>
            <View style={{ paddingTop: 40 ,paddingBottom:30}}>
                <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Hi Sahil</Text>
                <Text>6 Tasks are panding</Text>
            </View>
            <View style={{ backgroundColor: '#5451d6', height: 150, borderRadius: 30, padding: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Mobile app design</Text>
                <Text>Mike and Rohani</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20 }}>
                    <View >
                        <Image source={require('../../Image/passportPhoto1.jpg')} style={{ height: 40, width: 40, borderRadius: 20, borderColor: 'white', borderWidth: 2 }}></Image>
                        <Image source={require('../../Image/passportPhoto2.jpg')} style={{ height: 40, width: 40, borderRadius: 20, borderColor: 'white', borderWidth: 2, position: 'absolute', left: 30 }}></Image>
                    </View>
                    <Text >Now </Text>

                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 ,paddingBottom:20}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Monthly Reviews</Text>
                <View style={{ backgroundColor: '#39d6ff', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Calendar name='calendar' color='white' size={20}></Calendar>
                </View>
            </View>
            <View style={{ flexDirection:'row',columnGap:20 }}>
                <View style={{flexDirection:'column', rowGap:20}}>
                   
                        <Box1 day='22' note='Done'></Box1>

                   
                    <Box2 day='7' note='In progerss' />
                </View>
                <View style={{flexDirection:'column',rowGap:20}}>
                    
                        <Box2 day='12' note='Waiting for review' />
                    <Box1 day='10' note='Ongoing'></Box1>

                </View>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around', paddingTop:40}}>
                <Home name="home" size={25} color='white'></Home>
                <File name="filetext1" size={25} color='#29b6f0'></File>
                <People name="people" size={25} color='white'></People>
                <Bell name="bell" size={25} color='white'></Bell>
            </View>
        </View>
    )
}




export default Secont_Screen;