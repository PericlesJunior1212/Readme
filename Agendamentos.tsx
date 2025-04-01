import { Image, StyleSheet, Platform, Text, FlatList, View, Pressable } from 'react-native';
import { Agendamentos } from '@/constants/agendamentos';
import { Link } from 'expo-router';



export default function HomeScreen() {
  return (
    <View style={{}}>
      
      
      <Text style={styles.titleContainer}>Perfil de Clientes</Text>
      
      <FlatList
      data={Agendamentos()}
      keyExtractor={(item) => item.id_agendamentos.toString()}
      renderItem={({item}) => (
        <View style={{}}>
          <Text>Id: {item.id_agendamentos}</Text>
          <Text>Data: {item.data}</Text>
          <Text>Hora: {item.hora}</Text>
          <Text>Nome do Cliente: {item.nome_cliente}</Text>
          <Text>Nome do Profissional: {item.nome_profissional}</Text>


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


