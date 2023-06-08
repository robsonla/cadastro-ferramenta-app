import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#db9f04",
    },

    alert: {
        fontSize: 18,
        textAlign: "center",
        color: "#edebe8",
        marginTop: 20,
        marginBottom: 20,
        borderBottomWidth: 1.7,
        borderBottomColor: "#edebe8",
        backgroundColor: "red",
        padding: 5,
        borderRadius: 5,
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

    formBtn: {
        backgroundColor: "#1c1c23",
        padding: 10,
        borderRadius: 30,
        marginBottom: 20,
        width: "100%",
        height: 56,
        marginTop: 30,
    },

    textBtn: {
        color: "#edebe8",
        fontSize: 24,
        textAlign: "center"
    },
});

export default styles