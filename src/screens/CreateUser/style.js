import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            padding: 30,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1c1c23",
            
        },
        
        label_1: {
            fontSize: 24,
            fontWeight: "bold",
            color: "#edebe8",
            marginTop: 50,
        },

        label_2: {
            fontSize: 15,
            color: "#edebe8",
            marginBottom: 60,
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

        formInput: {
            fontSize: 18,
            backgroundColor: "#DDD",
            padding: 10,
            marginBottom: 20,
            width: "100%",
            height: 56,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderBottomWidth: 3,
            borderBottomColor: "#edebe8",
            color: "#edebe8",
            borderRadius: 5,
        },

        direction: {
            flexDirection: "row",
            alignItems: "center",
        },

        icon: {
            fontSize: 30,
            right: 10,
            bottom: 35,
            position: "absolute",
            color: 'rgba(255, 255, 255, 0.2)',
        },

        formButton: {

            backgroundColor: "#db9f04",
            padding: 10,
            borderRadius: 30,
            marginTop: 100,
            width: "100%",
            height: 56,
        },

        textButton: {
            fontSize: 24,
            textAlign: "center",
            color: "#edebe8",
            fontWeight: "bold",
        }
    }
);

export default styles