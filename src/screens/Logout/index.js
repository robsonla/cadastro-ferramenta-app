import { Text, TouchableOpacity, View } from 'react-native'
import firebase from '../../config/firebase'
import { getAuth, signOut } from "firebase/auth";
import styles from './style';

export default function Logout({navigation}) {
    const signOutFirebase = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View style={styles.account}>
            <TouchableOpacity
                style={styles.btnSair}
                onPress={signOutFirebase}
            >
                <Text style={styles.btnTextSair}>Sair do app!</Text>
            </TouchableOpacity>
        </View>
    );
}