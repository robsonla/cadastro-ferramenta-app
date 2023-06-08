import React, { useState } from 'react'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';  
import { FontAwesome } from '@expo/vector-icons'; 

export default function CreateUser({navigation}) {
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    const validate = () => {
        if (nome == "" || telefone == "" || email == "" || password == "") {
            setErrorCreateUser("Preencha todos os campos!");
        } else {
            setErrorCreateUser(null)
            createUser();
        }
    }

    const createUser = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // Após criar o usuário, envia para tela interna
                navigation.navigate('Tabs');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Exibe mensagem de erro em caso de erro
                setErrorCreateUser(errorMessage);
            });
    }

    return (
        <View style={styles.login}>

            <Text style={styles.label_1}>Criar sua conta!</Text>
            <Text style={styles.label_2}>Para acessar o app.</Text>
            
            {errorCreateUser != null &&
                <Text style={styles.alert}>{errorCreateUser}</Text>
            }
            
            <View style={styles.direction}>
                <TextInput
                    style={styles.formInput}
                    placeholder='Nome'
                    placeholderTextColor={"rgba(255,255,255,0.3)"}
                    value={nome}
                    onChangeText={setNome}
                />
                <FontAwesome style={styles.icon} name="user"/>
            </View>
            
            <View style={styles.direction}>
                <TextInput
                    style={styles.formInput}
                    placeholder='Telefone'
                    placeholderTextColor={"rgba(255,255,255,0.3)"}
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <Entypo style={styles.icon} name="phone"/>
            </View>
            

            <View style={styles.direction}>
                <TextInput name="mail" size={24} color="black"
                    style={styles.formInput}
                    placeholder='E-mail'
                    placeholderTextColor={"rgba(255,255,255,0.3)"}
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
                    placeholderTextColor={"rgba(255,255,255,0.3)"}
                    value={password}
                    onChangeText={setPassword}
                />
                <AntDesign style={styles.icon} name="lock"/>
            </View>
            

            <TouchableOpacity
                style={styles.formButton}
                onPress={validate}
            >
                <Text style={styles.textButton}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    );
}