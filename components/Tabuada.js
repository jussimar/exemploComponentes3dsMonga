import React from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Tabuada(props){
  let texto = [];
  for(let x = 0; x <= 10; x++){
      texto.push(
        <Text style={styles.texto}>
            {props.num} x {x} = {x * props.num}
        </Text>
      );
     
  }
  return(
      <>
        <View>
            {texto}
        </View>
      </>
  );  
}

const styles = StyleSheet.create({
    texto:{
        fontSize:30
    }
});