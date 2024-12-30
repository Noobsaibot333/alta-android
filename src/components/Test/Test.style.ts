import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        backgroundColor:'grey',
        display:'flex',
        flexDirection:'column',
        flex:1
    },

    item: {
        backgroundColor:'pink',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    item1: {
        backgroundColor:'green',
        flex:2
    },

    text: {
        fontSize:25,
        fontWeight:'700'
    }
})