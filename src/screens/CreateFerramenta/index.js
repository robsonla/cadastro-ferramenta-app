import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
const db = getFirestore(firebase)

export default function CreateFerramenta({navigation}){
    const [cod, setCod] = useState("")
    const [descricao, setDescricao] = useState("")
    const [medida, setMedida] = useState("")
    const [tipo, setTipo] = useState("")
    const [errorCreateFerramenta, setErrorCreateFerramenta] = useState(null)

    const validade = () => {
        if(cod == "" || descricao == "" || medida == "" || tipo == ""){
            setErrorCreateFerramenta("Preencha todos os campos!")
        }else{
            setErrorCreateFerramenta(null)
            createFerramenta()
        }
    }

    const createFerramenta = () => {
        const newFerramenta = addDoc(collection(db, 'ferramentas'), {
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

            <TextInput
                style={styles.formInput}
                placeholder='Código'
                placeholderTextColor={"rgba(255,255,255,0.4)"}
                value={cod}
                onChangeText={setCod}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Ferramenta'
                placeholderTextColor={"rgba(255,255,255,0.4)"}
                value={descricao}
                onChangeText={setDescricao}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Medida'
                placeholderTextColor={"rgba(255,255,255,0.4)"}
                value={medida}
                onChangeText={setMedida}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Tipo'
                placeholderTextColor={"rgba(255,255,255,0.4)"}
                value={tipo}
                onChangeText={setTipo}
            />

            <TouchableOpacity
                style={styles.formBtn}
                onPress={validade}
            >
                <Text style={styles.textBtn}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}