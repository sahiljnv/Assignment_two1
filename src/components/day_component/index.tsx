import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
type dayProps = {
    day: string,
    week:string,
    selected:number
}
const DayComponent = (props : dayProps) => {
    let selected = props.selected;

    return (
        <View style={[styles.mainContainer,{ backgroundColor: selected ? '#412da8' : 'white' }]}>
            <Text style={[styles.dayText,{ color: selected ? 'white' : '#412da8'}]}>{props.day}</Text>
            <Text style={{ color: selected ? 'white' : '#412da8' }}>{props.week}</Text>
        </View>
    )
}
export default DayComponent

