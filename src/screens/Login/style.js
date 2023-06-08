import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {

        boxLogo: {
            marginTop: 20,
            marginBottom: 10, 
            alignItems: 'center',
        },
    
        logo: {
            width: 150,
            height: 150,
            borderRadius: 100,
        },

        login: {
            backgroundColor: "#db9f04",
            flex: 1,
            padding: 30,
            alignItems: "center",
            justifyContent: "center",
        },

        alert: {
            fontSize: 18,
            textAlign: "center",
            color: "#edebe8",
            marginBottom: 20,
            borderBottomWidth: 1.7,
            borderBottomColor: "#edebe8",
            backgroundColor: "red",
            padding: 5,
            borderRadius: 5,
        },

        label_1: {
            fontSize: 24,
            fontWeight: "bold",
            color: "#edebe8",
        },
        
        label_2: {
            fontSize: 15,
            color: "#edebe8",
            marginTop: 50,
            marginBottom: 50,
        },

        direction: {
            flexDirection: "row",
            alignItems: "center",
        },

        icon: {
            fontSize: 30,
            right: 5,
            bottom: 35,
            position: "absolute",
            color: 'rgba(255, 255, 255, 0.2)',
        },

        formInput: {
            fontSize: 18,
            padding: 10,
            marginBottom: 20,
            width: "100%",
            height: 56,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderBottomWidth: 3,
            color: "#edebe8",
            borderBottomColor: "#edebe8",
            borderRadius: 5,
        },

        formButton: {
            backgroundColor: "#1c1c23",
            padding: 10,
            borderRadius: 30,
            marginBottom: 20,
            width: "100%",
            height: 56,
            marginTop:50,
        },

        textButton: {
            color: "#edebe8",
            fontSize: 24,
            textAlign: "center",
        },

        btnCreate: {
            marginTop: 100,
        },

        btnCreateText: {
            color: "#1c1c23",
            fontSize: 16,
            fontWeight: "bold",
            borderBottomWidth: 1,
            borderBottomColor: "#1c1c23",
        }
    }
);

export default styles