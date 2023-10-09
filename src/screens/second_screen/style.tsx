import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#4530b3',
        height: '100%',
        width: '100%',
        padding: 20
    },
    navBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navIconContainer: {
        flexDirection: 'row',
        gap: 5
    },
    baseIconStyle: {
        width: 5,
        height: 20,
        backgroundColor: "white",
        borderRadius: 5
    },
    iconFirstLine: {
        marginTop: 15
    },
    icomSecondLine: {
        marginTop: 7
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2
    },
    headingContainer: {
        paddingTop: 40,
        paddingBottom: 30
    },
    headingTitle: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    overViewContainer: {
        backgroundColor: '#5451d6',
        height: 150,
        borderRadius: 30,
        padding: 20
    },
    overViewHeading: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    overViewImgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20
    },
    imgPosition: {
        position: 'absolute',
        bottom: 0,
        left: 30
    },
    reviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20
    },
    reviewHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    reviewIconContainer: {
        backgroundColor: '#39d6ff',
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer :{
        flexDirection: 'row', 
        columnGap: 20 
    },
    boxColumn:{
        flexDirection: 'column', 
        rowGap: 20 
    }
})
