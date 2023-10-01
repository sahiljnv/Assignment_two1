import React from 'react';
import { View, Text, Image } from 'react-native';

const First_Screen = () => {
    return (
        <View style={{ backgroundColor: "#dbe9f6", height: '100%', width: '100%', padding: 30 }}>
            <View style={{ alignItems: 'center', height: '55%' }}>
                <Image source={require("../../Image/homeImg.jpg")} style={{ height: "80%", width: "95%", borderBottomRightRadius: 200, borderBottomLeftRadius: 200 }}></Image>

            </View>
            <Text style={{ color: '#0b1f51', fontSize: 30, fontWeight: 'bold', paddingTop: 40 }}>Manage your{"\n"}daily tasks</Text>
            <Text style={{ color: '#0b1f51', paddingTop: 40 }}>Team and Project management with{'\n'}solution providing app</Text>
            <View style={{ marginTop: 60, justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'white', height: 55, width: 55, borderRadius: 30 }}></View>
                <Text style={{ color: '#0b1f51', fontSize: 20, fontWeight: 'bold', position: 'absolute', left: 20 }}>Get Started</Text>
            </View>
        </View>
    )

}

export default First_Screen;