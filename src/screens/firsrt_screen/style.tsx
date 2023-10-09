import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#dbe9f6",
         height: '100%', 
         width: '100%',
          padding: 30
    },
    imgContainger:{
        alignItems: 'center', 
        height: '55%'
    },
    img:{
        height: "80%",
         width: "95%", 
         borderBottomRightRadius: 200,
          borderBottomLeftRadius: 200 
    },
    titleText : {
        color: '#0b1f51',
         fontSize: 30, 
         fontWeight: 'bold',
          paddingTop: 40
    },
    subTitle:{
        color: '#0b1f51', 
        paddingTop: 40
    },
    buttonContainer:{
        marginTop: 60,
         justifyContent: 'center' 
    },
    buttonText:{
        color: '#0b1f51', 
        fontSize: 20, 
        fontWeight: 'bold', 
        position: 'absolute', 
        left: 20
    },
    buttonCircle:{
        backgroundColor: 'white', 
        height: 55,
         width: 55,
          borderRadius: 30 
    }
})