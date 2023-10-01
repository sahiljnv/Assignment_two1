
import { View, Text } from 'react-native'

import React from 'react'
type BoxProps = {
    day : string,
    note : string
}
const Box1 = (props : BoxProps) => {
    return (
        <View style={{ backgroundColor: '#5451d6', height: 180, width: 160, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>{props.day}</Text>
            <Text >{props.note}</Text>
        </View>
    )
}

export default Box1


