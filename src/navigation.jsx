import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import First_Screen from '../src/first_screen';
import Second_Screen from '../src/secont_screen';
import Third_Screen from '../src/third_screen';
import Color_Box from '../src/colorBox';

import Home from 'react-native-vector-icons/dist/Feather';

const Tab = createBottomTabNavigator();
export default function navigation() {
    const setTabColor = (screen)=>{
        let tabColor;
        if(screen === "First"){
            tabColor = '#0b1f51'
        }else if (screen === 'Second'){
            tabColor = '#4530b3'
        }else if (screen === 'Third'){
            tabColor = '#5451d6'
        }
        return tabColor;
    }
    return (
        <View style={{height:'100%'}}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={({route,navigation})=>({
                    tabBarIcon:({color,focused,size})=>{
                        let iconName;
                        if(route.name === "First"){
                            iconName = 'home'
                        }else if (route.name === 'Second'){
                            iconName = 'file-text'
                        }else if (route.name === 'Third'){
                            iconName = 'bell'
                        }else if (route.name === 'colorBox'){
                            iconName = 'grid'
                        }
                        return <Home name={iconName} size={size} color={color} />
                    },
                    headerShown:false,
                    tabBarActiveTintColor: setTabColor(route.name),
                    
                })}>
                    <Tab.Screen  name="First" component={First_Screen} />
                    <Tab.Screen name="Second" component={Second_Screen} />
                    <Tab.Screen name="Third" component={Third_Screen} />
                    <Tab.Screen name="colorBox" component={Color_Box} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({})