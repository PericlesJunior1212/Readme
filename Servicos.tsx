import { Image, StyleSheet, Platform, Text, FlatList, View } from 'react-native';
import { Servicos } from '@/constants/Servicos';
import { Link } from 'expo-router';



export default function HomeScreen() {
  return (
    <View style={{}}>
       
    
    <Text style={{}}>Perfil de Clientes</Text>
      
      <FlatList
      data={Servicos()}
      keyExtractor={(item) => item.id_servicos.toString()}
      renderItem={({item}) => (
        <View style={{}}>
          <Text>Id: {item.id_servicos} </Text>
          <Text>Nome: {item.nome_servicos} </Text>
          

        </View>

      )}
      />

    </View>
   
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});