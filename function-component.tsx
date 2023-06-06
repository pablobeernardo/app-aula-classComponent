import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function FunctionComponent(){

    const [contador, setContador] = useState(0);

    function increment(){
        setContador(contador + 1);
    }

    function reset(){
        setContador(0);
    }

    return(
        <View>
            <Text>{contador}</Text>
            <Button onPress={() => {increment()}} title='Clique'/>
            <Button onPress={() =>{reset()}} title="Reset"/>

        </View>
    );
}