import React from 'react';
import {StyleSheet} from 'react-native';

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
