import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer : { 
        padding: 30,
        backgroundColor:'black',
        flex:1 
    },
    showColorCombo : { 
        alignItems: 'center' 
    },
    showColorComboView : { 
        height: 200, 
        width: 200,
        borderWidth:2,
        borderColor:"white"
    },
    showColorComboText : { 
        paddingTop: 20, 
        fontSize: 30 
    },
    buttonsContainer : { 
        paddingTop: 40, 
        flexDirection: 'row', 
        gap: 60, 
        justifyContent: 'center' 
    },

})