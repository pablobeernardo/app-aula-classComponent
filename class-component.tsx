import React from "react";
import { View, Text, Button } from "react-native";

interface Props{
    texto: string
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
                <Text style={{fontWeight:'bold'}}>{this.props.texto}</Text>   
                <Text style={{textAlign:'center'}}>{this.state.contador}</Text>
                <View style={{margin:5}}>
                    <Button onPress={() => {this.increment()}} title='Clique'/>
                </View>
                <View style={{margin:5}}> 
                    <Button onPress={() =>{this.reset()}} title="Reset"/>
                </View>  
            </View>
        );
    }
}