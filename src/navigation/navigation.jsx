import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import First_Screen from '../screens/firsrt_screen';
import Color_Box from '../screens/forth_screen';
import Home from 'react-native-vector-icons/Feather';
import { setTabColor } from '../utils/utils';
import Secont_Screen from '../screens/second_screen';
import Third_Screen from '../screens/third_screen';
const Tab = createBottomTabNavigator();
export default function navigation() {
    
    return (
        <View style={{height:'100%'}}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={({route})=>({
                    tabBarIcon:({color,size})=>{
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
                    <Tab.Screen  name="First" component={First_Screen} 
                    options={{
                        
                    }}
                    />
                    <Tab.Screen name="Second" component={Secont_Screen} />
                    <Tab.Screen name="Third" component={Third_Screen} />
                    <Tab.Screen name="colorBox" component={Color_Box} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({})