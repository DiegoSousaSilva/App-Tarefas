import { StatusBar } from 'expo-status-bar';
import {useFonts, Lato_400Regular} from '@expo-google-fonts/lato';
import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

import image from './src/assets/bg.jpg';
import { AppLoading } from 'expo';

export default function App() {

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading/>; 
  }


  return (
    <View style={styles.container}>
    
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>Lista de Tarefas - Diego Dev</Text>
          </View>
        </ImageBackground>
    
        <ScrollView>    

      <View style={styles.tarefaSingle}>
        <View>
          <Text>Minha tarefa do dia xxx o mes xxx</Text>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name='minuscircleo' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tarefaSingle}>
        <View>
          <Text>Minha tarefa do dia xxx o mes xxx</Text>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name='minuscircleo' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.tarefaSingle}>
        <View>
          <Text>Minha tarefa do dia xxx o mes xxx</Text>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name='minuscircleo' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tarefaSingle}>
        <View>
          <Text>Minha tarefa do dia xxx o mes xxx</Text>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name='minuscircleo' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tarefaSingle}>
        <View>
          <Text>Minha tarefa do dia xxx o mes xxx</Text>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name='minuscircleo' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tarefaSingle}>
        <View>
          <Text>Minha tarefa do dia xxx o mes xxx</Text>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name='minuscircleo' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tarefaSingle}>
        <View>
          <Text>Minha tarefa do dia xxx o mes xxx</Text>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name='minuscircleo' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tarefaSingle}>
        <View>
          <Text>Minha tarefa do dia xxx o mes xxx</Text>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name='minuscircleo' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      </ScrollView>

      


      <StatusBar hidden/>
    </View>
  );
}

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

  }
});
