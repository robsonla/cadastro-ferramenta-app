import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useId, useState } from 'react';
import styles from './style';
import firebase from '../../config/firebase';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
const db = getFirestore(firebase)
import { MaterialIcons } from '@expo/vector-icons'

export default function Cadastro({ navigation }) {

    const [ferramenta, setFerramenta] = useState([])
    
    const deleteFerramenta = (id) => {
        deleteDoc(doc(db, "ferramentas", id))
    }

    useEffect(() => {
        const q = query(collection(db, "ferramentas"), orderBy("data_registro","desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const ferramentas = [];
            querySnapshot.forEach((doc) => {
                ferramentas.push({...doc.data(), id: doc.id});
            });
            setFerramenta(ferramentas)
        });
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={ferramenta}
                renderItem={({item}) =>
                    <View style={styles.ferramenta}>
                        <View>
                            <Text style={styles.descricao}>{item.descricao}</Text>
                            <Text style={styles.information}>Código: {item.cod}</Text>
                            <Text style={styles.information}>Medida: {item.medida}</Text>
                            <Text style={styles.information}>Tipo: {item.tipo}</Text>
                        </View>
                        
                        <View>
                            <TouchableOpacity 
                                onPress={()=> deleteFerramenta(item.id)}
                            >
                                <MaterialIcons style={styles.btnExcluir} name= "delete" size={30} color="#c40000"/>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                onPress={() => navigation.navigate("Edit", {
                                        id: item.id,
                                        desc: item.descricao,
                                        cod: item.cod,
                                        med: item.medida,
                                        tip: item.tipo,
                                    } 
                                )}    
                            >
                                <MaterialIcons name= "edit" size={30} color="blue"/>
                            </TouchableOpacity>
                        </View>
                    </View>  
                }
            />

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateFerramenta')}
            >
                <Text style={styles.btnTextCreate}>+</Text>
            </TouchableOpacity>
        </View>
    );
}