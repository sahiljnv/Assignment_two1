import { View, Text } from 'react-native'
import React from 'react'
type BoxProps = {
    day : string,
    note : string
}
const Box2 = (props : BoxProps) => {
    return (
        <View style={{ backgroundColor: '#5451d6', height: 100, width: 160, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>{props.day}</Text>
            <Text >{props.note}</Text>
        </View>
    )
}

export default Box2