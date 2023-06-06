import React from "react";
import { View, Text, Button } from "react-native";

interface Props{

}

interface State{
    contador: number;
}



export default class ClassComponent extends React.Component<Props, State> {

    private increment(){
        const calculo = this.state.contador + 1;
        this.setState({contador: calculo});
    }

    private reset(){
        const calculo = 0;
        this.setState({contador: calculo});

        
    }


    constructor(props: Props){
        super(props);
        this.state = {contador: 0};
    }

    render() {
        return (
            <View>
            <Text>{this.state.contador}</Text>
            <Button onPress={() => {this.increment()}} title='Clique'/>
            <Button onPress={() =>{this.reset()}} title="Reset"/>

        </View>
        );
    }
}