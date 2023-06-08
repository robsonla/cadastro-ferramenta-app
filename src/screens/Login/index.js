import { TextInput, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from './style';
import firebase from '../../config/firebase'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErroLogin] = useState(null);

    const validate = () => {
        if (email == "" || password == "") {
            setErroLogin("Informe e-mail e senha!")
        } else {
            setErroLogin(null)
            loginFirebase();
        }
    }

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const uid = user.uid
                navigation.navigate('Tabs')
            }
        })
    }, [])

    const loginFirebase = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigation.navigate('Tabs')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErroLogin(errorMessage)
            });
    }

    return (
        <View style={styles.login}>

            <View style={styles.boxLogo}>
                <Image style={styles.logo} source={require('../../../assets/logo_2.jpeg')} />
            </View>

            <Text style={styles.label_1}>DEJ Ferramentaria</Text>
            <Text style={styles.label_2}>Faça o login para continuar.</Text>

            {errorLogin != null &&
                <Text style={styles.alert}>{errorLogin}</Text>
            }

            <View style={styles.direction}>
                <TextInput
                    style={styles.formInput}
                    placeholder='E-mail'
                    placeholderTextColor={"rgba(255,255,255,0.4)"}
                    value={email}
                    onChangeText={setEmail}
                />
                <Entypo style={styles.icon} name="mail"/>
            </View>

            <View style={styles.direction}> 
                <TextInput
                    style={styles.formInput}
                    secureTextEntry={true}
                    placeholder='Senha'
                    placeholderTextColor={"rgba(255,255,255,0.4)"}
                    value={password}
                    onChangeText={setPassword}
                />
                <AntDesign style={styles.icon} name="lock"/>
            </View>
            
            <TouchableOpacity
                style={styles.formButton}
                onPress={validate}
            >
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateUser')}>
                <Text style={styles.btnCreateText}>CRIAR CONTA</Text>
            </TouchableOpacity>
        </View>
    );
}