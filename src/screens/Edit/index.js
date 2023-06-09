import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, props } from 'react-native'
import React from 'react';
import styles from './style'
import firebase from '../../config/firebase'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
const db = getFirestore(firebase)
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

export default function Edit({navigation, route}){

    const [cod, setCod] = useState(route.params.cod)
    const [descricao, setDescricao] = useState(route.params.desc)
    const [medida, setMedida] = useState(route.params.med)
    const [tipo, setTipo] = useState(route.params.tip)
    const [errorCreateFerramenta, setErrorCreateFerramenta] = useState(null)
    
    const validade = () => {
        if(cod == "" || descricao == "" || medida == "" || tipo == ""){
            setErrorCreateFerramenta("Preencha todos os campos!")
        }else{
            setErrorCreateFerramenta(null)
            editFerramenta()
        }
    }

    const editFerramenta = () => {
        
        const ferramentas = doc(db, "ferramentas", route.params.id);

        updateDoc(ferramentas, {
            cod: cod,
            descricao: descricao,
            medida: medida,
            tipo: tipo,
            data_registro: serverTimestamp()
        });

        navigation.navigate('Tabs')
    }

    return(
        <View style={styles.container}>
            {errorCreateFerramenta != null &&
                <Text style={styles.alert}>{errorCreateFerramenta}</Text>
            }

            <View style={styles.direction}>
                <TextInput
                    style={styles.formInput}
                    placeholder='Código'
                    placeholderTextColor={"rgba(255,255,255,0.4)"}
                    value={cod}
                    onChangeText={setCod}
                />
                <MaterialIcons style={styles.icon} name="app-registration"/>
            </View>
            
            <View style={styles.direction}>
                <TextInput
                    style={styles.formInput}
                    placeholder='Ferramenta'
                    placeholderTextColor={"rgba(255,255,255,0.4)"}
                    value={descricao}
                    onChangeText={setDescricao}
                />
                <Entypo style={styles.icon} name="tools"/>
            </View>
            
            <View style={styles.direction}>
                <TextInput
                    style={styles.formInput}
                    placeholder='Medida'
                    placeholderTextColor={"rgba(255,255,255,0.4)"}
                    value={medida}
                    onChangeText={setMedida}
                />
                <Entypo style={styles.icon} name="gauge"/>
            </View>
            
            <View style={styles.direction}>
                <TextInput
                    style={styles.formInput}
                    placeholder='Tipo'
                    placeholderTextColor={"rgba(255,255,255,0.4)"}
                    value={tipo}
                    onChangeText={setTipo}
                />
                <MaterialIcons style={styles.icon} name="category"/>
            </View>

            <TouchableOpacity
                style={styles.formBtn}
                onPress={validade} 
            >
                <Text style={styles.textBtn}>Atualizar</Text>
            </TouchableOpacity>

        </View>
    );
}