import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Arrow from 'react-native-vector-icons/dist/MaterialIcons';

const Third_Screen = () => {
    return (
        <View style={{ backgroundColor: "#dbe9f6", height: '100%', padding: 20, paddingBottom: -20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ height: 40, width: 40, borderRadius: 5, borderWidth: 1, borderColor: '#cedceb',alignItems:'center',justifyContent:'center' }}>
                    <Arrow name='arrow-back' size={20} color='#0b1f51'></Arrow>

                </View>
                <Image source={require('../../Image/passportPhoto1.jpg')} style={{ height: 40, width: 40, borderRadius: 20, borderColor: 'white', borderWidth: 2 }}></Image>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Arrow name='arrow-back' size={20} color='#0b1f51'></Arrow>
                    <Text style={{ color: '#0b1f51' ,paddingLeft:10}}>Mar</Text>
                </View>
                <Text style={{ color: '#0b1f51', fontSize: 30, fontWeight: 'bold' }}>April</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Text style={{ color: '#0b1f51',paddingRight:10 }}>May</Text>
                    <Arrow name='arrow-forward' size={20} color='#0b1f51'></Arrow>
                </View>
            </View>
            <ScrollView>

            <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                    <DayComponent day="12" week="Wed" selected={1}></DayComponent>
                    <DayComponent day="13" week="Thu" selected={0}></DayComponent>
                    <DayComponent day="14" week="Fri" selected={0}></DayComponent>
                    <DayComponent day="15" week="Sat" selected={0}></DayComponent>
                    <DayComponent day="16" week="Sun" selected={0}></DayComponent>
                    <DayComponent day="17" week="Mon" selected={0}></DayComponent>
                    <DayComponent day="18" week="Tue" selected={0}></DayComponent>

                </View>
            </ScrollView>
                
                <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#0b1f51' }}>Ongoing</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{justifyContent:'space-around'}}>
                        <Text style={{ color: '#0b1f51'}}>9 AM</Text>
                        <Text style={{ color: '#0b1f51'}}>10 AM</Text>
                    </View>
                    <FeatureComponent feature="Mobile app design" names="Mike and Rohani" timing='9.00 AM - 10.00 AM'></FeatureComponent>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                    <Text style={{ color: '#0b1f51', paddingRight: 10 }}>10 AM</Text>
                    <View style={{ backgroundColor: 'red', height: 20, width: 20, borderRadius: 10, borderColor: 'white', borderWidth: 5, marginRight: 10 }}></View>
                    <View style={{ backgroundColor: 'red', height: 2, width: "80%" }}></View>
                </View>

                <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 20, justifyContent: 'space-evenly' }}>
                    <View style={{justifyContent:'space-around'}}>
                        <Text style={{ color: '#0b1f51'}}>11 AM</Text>
                        <Text style={{ color: '#0b1f51'}}>12 AM</Text>
                    </View>
                    <FeatureComponent feature="Software Testing" names="Mike and Rohani" timing='11.00 AM - 12.00 AM'></FeatureComponent>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 20, justifyContent: 'space-evenly' }}>
                    <View style={{justifyContent:'space-around'}}>
                        <Text style={{ color: '#0b1f51'}}>1 PM</Text>
                        <Text style={{ color: '#0b1f51'}}>2 PM</Text>
                    </View>
                    <FeatureComponent feature="Web Development" names="Mike and Rohani" timing='1.00 PM - 2.00 PM'></FeatureComponent>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 20, justifyContent: 'space-evenly' }}>
                    <View style={{justifyContent:'space-around'}}>
                        <Text style={{ color: '#0b1f51'}}>9 AM</Text>
                        <Text style={{ color: '#0b1f51'}}>10 AM</Text>
                    </View>
                    <FeatureComponent feature="Mobile app design" names="Mike and Rohani" timing='9.00 AM - 10.00 AM'></FeatureComponent>
                </View>

            </ScrollView>
        </View>
    )
}

const DayComponent = (props) => {
    let selected = props.selected;

    return (
        <View style={{ backgroundColor: selected ? '#412da8' : 'white', height: 100, width: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center',margin:10 }}>
            <Text style={{ color: selected ? 'white' : '#412da8', fontSize: 30, fontWeight: 'bold' }}>{props.day}</Text>
            <Text style={{ color: selected ? 'white' : '#412da8' }}>{props.week}</Text>
        </View>
    )
}

const FeatureComponent = (props) => {
    return (
        <View style={{ backgroundColor: '#5451d6', height: 150, width: "80%", padding: 20, borderRadius: 20, marginLeft: 15 }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{props.feature}</Text>
            <Text>{props.names}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20 }}>
                <View >
                    <Image source={require('../../Image/passportPhoto1.jpg')} style={{ height: 40, width: 40, borderRadius: 20, borderColor: 'white', borderWidth: 2 }}></Image>
                    <Image source={require('../../Image/passportPhoto2.jpg')} style={{ height: 40, width: 40, borderRadius: 20, borderColor: 'white', borderWidth: 2, position: 'absolute', left: 30 }}></Image>
                </View>
                <Text>{props.timing}</Text>
            </View>
        </View>
    )
}
export default Third_Screen;