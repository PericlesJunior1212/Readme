import { Image, StyleSheet, Platform, Text, FlatList, View } from 'react-native';
import { Usuarios } from '@/constants/Usuarios';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Clientes</Text>
      
      <FlatList
      data={Usuarios()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Text>Id: {item.id}</Text>
          <Text>Nome: {item.nome}</Text>
          <Text>Nome do Grupo: {item.nome}</Text>


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
