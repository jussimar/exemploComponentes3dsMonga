import React from "react";
import { StyleSheet, Text} from "react-native";

export default function Componente(props){
  return(
      <>
        <Text style={styles.texto}> 
            Nome: {props.nome} Idade: {props.idade}
        </Text>   
      </>
  );  
}

const styles = StyleSheet.create({
    texto:{
        fontSize:30
    }
});