import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#dbe9f6",
         height: '100%', 
        paddingHorizontal: 20,
        paddingTop:20
    },
    navContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    navIconContainer:{
        height: 40, 
        width: 40, 
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: '#cedceb',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        height: 40, 
        width: 40, 
        borderRadius: 20, 
        borderColor: 'white', 
        borderWidth: 2 
    },
    monthContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingTop: 20 
    },
    month:{
         flexDirection: 'row', 
         justifyContent: 'space-between', 
         alignItems: 'center' 
    },
    currentMonthText:{
        color: '#0b1f51', 
        fontSize: 30, 
        fontWeight: 'bold' 
    },
    prevMonthText:{
        color: '#0b1f51' ,
        paddingLeft:10
    },
    nextMonthText:{
        color: '#0b1f51',
        paddingRight:10
    },
    daysContainer:{
        flexDirection: 'row', 
        paddingTop: 20
    },
    ongoingContainer:{
        paddingTop: 20, 
        paddingBottom: 20 
    },
    ongoingText:{
        fontSize: 40, 
        fontWeight: 'bold', 
        color: '#0b1f51'
    },
    textColor:{
        color: '#0b1f51'
    },
    mainBoxContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-evenly' 
    },
    innerBoxContainer:{
        justifyContent:'space-around'
    },
    moreStyleInMainBox:{
        paddingTop: 20, paddingBottom: 20
    },
    radioContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 20 
    },
    radioText:{
        color: '#0b1f51', 
        paddingRight: 10
    },
    cricle:{
        backgroundColor: 'red', 
        height: 20, 
        width: 20, 
        borderRadius: 10, 
        borderColor: 'white', 
        borderWidth: 5, 
        marginRight: 10
    },
    horizontalLine:{
        backgroundColor: 'red', 
        height: 2, 
        width: "80%" 
    }

})
