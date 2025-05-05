import { Usuarios } from '@/constants/Usuarios';
import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';



export default function HomeScreen() {
  return (
    <View style={{}}>
      <Link href= "/servicos" asChild>
      <Pressable>
        <Text>Serviços</Text>
      </Pressable>
      </Link>
      
      <Link href= "/agendamentos" asChild>
            <Pressable>
              <Text>Agendamentos</Text>
      </Pressable>
      </Link>
      
      <Text style={styles.titleContainer}>Perfil de Clientes</Text>
      
      <FlatList
      data={Usuarios()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={{}}>
          <Text>Id: {item.id}</Text>
          <Text>Nome: {item.nome}</Text>
          <Text>Nome do Grupo: {item.nome_grupo}</Text>



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

