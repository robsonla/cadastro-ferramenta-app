import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        account: {
            backgroundColor: "#db9f04",
            flex: 1,
            padding: 30,
            alignItems: "center",
            justifyContent: "center",
        },

        btnSair: {
            backgroundColor: 'red',
            width: "100%",
            height: 56,
            borderRadius: 5,
            position: 'absolute',
            justifyContent: 'center',
            alignContent: 'center',
        },
    
        btnTextSair: {
            fontSize: 24,
            textAlign: 'center',
            color: '#edebe8'
        }
    }
);

export default styles