import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#5451d6', 
        height: 150, 
        width: "80%", 
        padding: 20, 
        borderRadius: 20, 
        marginLeft: 15
    },
    heading:{
        color: 'white', 
        fontSize: 20, 
        fontWeight: 'bold'
    },
    imgContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingTop: 20
    },
    img:{
        height: 40
        , width: 40, 
        borderRadius: 20, 
        borderColor: 'white', 
        borderWidth: 2
    },
    imgPosition:{
        position: 'absolute', 
        left: 30,
        bottom:0 
    }
})