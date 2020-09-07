import { StatusBar } from 'expo-status-bar';
import {useFonts, Lato_400Regular} from '@expo-google-fonts/lato';
import React, {useState} from 'react';
import {AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TouchableHighlight, ScrollView, Modal, TextInput } from 'react-native';


import image from './src/assets/bg.jpg';
import { AppLoading } from 'expo';

export default function App() {
  
  console.disableYellowBox=true;

  const [tarefa, setTarefa] = useState([
    {
      id: 1,
      tarefa: 'Minha tarefa 1'
    },
    {
      id: 2,
      tarefa: 'Minha tarefa 2'  
    },
    {
      id: 3,
      tarefa: 'Minha tarefa 3'  
    }
  ])

  const [modal, setModal] = useState(false);
  const [tarefaAtual, setTarefaAtual] = useState('');

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading/>; 
  }

  function deletarTarefa(id){
    alert('Tarefa com id '+ id+' foi deletada com sucesso');

    let newTarefa = tarefa.filter(function(val){
      return val.id != id;
    });

    setTarefa(newTarefa);
  }

  function addTarefa(){
    setModal(!modal);
    
    let id=0;
    if(tarefa.length > 0){
      id = tarefa[tarefa.length-1].id +1;
    }
    
    let newTarefa = {
      id:id,
      tarefa: tarefaAtual
    };

    setTarefa([...tarefa, newTarefa]);

  }


  return (
    
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput 
              autoFocus={true}
              onChangeText={text => setTarefaAtual(text)}
            ></TextInput>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => addTarefa()}
            >
              <Text style={styles.textStyle}>Adicionar Tarefa</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

    
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>Lista de Tarefas - Diego Dev</Text>
          </View>
        </ImageBackground>
    
        <ScrollView>    
        {
          tarefa.map(function(val){
            return(
              <View style={styles.tarefaSingle}>
                <View>
                  <Text>{val.tarefa}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={()=> deletarTarefa(val.id)}
                  >
                    <AntDesign name='minuscircleo' size={24} color='#000' />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        
        }

        <TouchableOpacity 
          style={styles.btnAddTarefa}
          onPress={()=>{
            setModal(true)
          }}
        >
          <Text 
          style={{
            textAlign:'center',
            color:'#fff'
          }}>
            Adicionar Tarefa!
          </Text>
        </TouchableOpacity>
         
      </ScrollView>


      <StatusBar hidden/>
    </View>
  );
}


/* Estilização do App*/

const styles = StyleSheet.create({
  container: {
    flex:1
  },

  image:{
    width: '100%',
    height: 80,
    resizeMode: 'cover',
 
  },

  textHeader:{
    textAlign:'center',
    color: '#fff',
    fontSize:20,
    marginTop: 20,
    fontFamily: 'Lato_400Regular'
  },

  coverView:{
    width:'100%',
    height:80,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },

  tarefaSingle:{
    marginTop:30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    flexDirection: 'row',
    paddingBottom:10,
    justifyContent: 'space-between',
    padding: 10

  },
  
  btnAddTarefa:{
    width:200,
    padding:8,
    backgroundColor:'gray',
    marginTop:20,
    borderRadius: 15,
    alignSelf: 'center'
  }
  ,

  /* Formatacao Modal */ 
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex:5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
