import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fundo}>
        <Text style={styles.h1}>Cadastre seus dados</Text>

        <Text aria-label="Label for Username" nativeID="labelUsername" style={ styles.text}>Nome da empresa:</Text>
        <TextInput aria-label="input" aria-labelledby="labelUsername" style={styles.input}></TextInput>

        <Text aria-label="Label for Username" nativeID="labelUsername" style={ styles.text}>Ramo:</Text>
        <TextInput aria-label="input" aria-labelledby="labelUsername" style={styles.input}></TextInput>

        <Text aria-label="Label for Username" nativeID="labelUsername" style={ styles.text}>Unidade federativa:</Text>
        <TextInput aria-label="input" aria-labelledby="labelUsername" style={styles.input}></TextInput>

        <Text aria-label="Label for Username" nativeID="labelUsername" style={ styles.text}>E-mail:</Text>
        <TextInput aria-label="input" aria-labelledby="labelUsername" style={styles.input}></TextInput>

        <View style={styles.flex}>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textB}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textB}>Cancelar</Text>
          </TouchableOpacity>
        </View>


        <StatusBar style="auto" />
      </View>
      <Text style={styles.myname}>Desenvolvido por Matheus Barbosa Nunes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fundo:{
    backgroundColor:'#E8E8E8',
    width:'80%',
    height:'50%',
    borderRadius:20,
    padding:'5%',
    elevation: 7,
    shadowColor: '#000',
    
  },

  h1:{
    color:'#000',
    textAlign:'center',
    fontSize:20,
    marginBottom:10,
    fontSize:25,
  },

  input:{
    backgroundColor:'#fff',
    borderRadius:8,
  },

  text:{
    marginTop: 20,
    fontSize:17,
  },

  button:{
    backgroundColor:'#0041DE',
    width:90,
    height:30,
    borderRadius:9,
    justifyContent:'center',
    alignItems:'center',
    margin:13,
    elevation: 7,
  },

  flex:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:20,
    justifyContent:'center',
  },

  textB:{
    color:'#fff',
    fontSize:17,
  },

  myname:{
    marginTop:80,
  }
});
