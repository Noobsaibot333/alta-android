import { Button, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        backgroundColor: 'gray',
    },

    bgImage: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 30,
        color: 'white',           
        fontWeight: '700',        
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 10,      
        paddingHorizontal: 20,    
        borderRadius: 8,          
        textAlign: 'center',   
       
    },

    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: '700'
    }

    
})

export default styles;