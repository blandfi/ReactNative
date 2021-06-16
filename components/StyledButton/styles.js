
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    button: {
        height: 40,
        padding: 10,
        borderRadius: 20, //la moitier de height
        justifyContent: 'center',
        alignItems: 'center',        
    },
    text: {
        fontSize: 12,
        fontWeight: "500",
        textTransform: 'uppercase',
    },
    
});

export default styles;

