import { StyleSheet, Text, View } from 'react-native';
import ClassComponent from './class-component';
import FunctionComponent from './function-component';

export default function App() {
  return (
    <View style={styles.container}>
      <ClassComponent  texto="Class Component"/>
      <View style={styles.paddingContainer}/>
      <FunctionComponent  texto="Function Component"/>
    </View>
  );
};

const styles= StyleSheet.create({

  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:'lightblue',
    fontWeight:'bold',

  },

  paddingContainer:{
    margin:10,
  }



  

})




