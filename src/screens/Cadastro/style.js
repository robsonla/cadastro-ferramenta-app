import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#db9f04",
    },

    home: {
        backgroundColor: "#db9f04",
        alignItems: 'center',
    },

    ferramenta: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#edebe8"
    },

    information: {
        fontSize: 16,
        color: "#edebe8",
        marginBottom: 5,
    },

    descricao: {
        borderColor: "#edebe8",
        fontSize: 20,
        fontWeight: 'bold',
        color: "#1c1c23",
        marginBottom: 10,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#edebe8",
    },

    btnExcluir: {
        alignItems: 'center',
        marginBottom: 20,
    },

    btn: {
        backgroundColor: "#1c1c23",
        borderRadius: 5,
    },

    btnCreate: {
        backgroundColor: 'green',
        width: 56,
        height: 56,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },

    btnTextCreate: {
        fontSize: 24,
        textAlign: 'center',
        color: '#edebe8',
        fontWeight: 'bold',
    }
});

export default styles