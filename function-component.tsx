import React, { useState } from "react";
import { View, Text, Button } from "react-native";



export default function FunctionComponent(props: any){

    const [contador, setContador] = useState(0);

    function increment(){
        setContador(contador + 1);
    }

    function reset(){
        setContador(0);
    }


    return(
        <View>
            <Text style={{fontWeight:'bold'}}>{props.texto}</Text>
            <Text style={{textAlign:'center'}}>{contador}</Text>
            <View style={{margin:5}}>
                <Button onPress={() => {increment()}} title='Clique'/>
            </View>
            <View style={{margin:5}}>
                <Button onPress={() =>{reset()}} title="Reset"/>
            </View>

        </View>
    );
}