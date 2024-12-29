import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Search } from '@/components/search';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/theme';
import { useState } from 'react';
import Contact from '@/components/contact';

export default function Home() {
  const colors =  theme.colors;
  const [name, setName] = useState("")
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Search style={styles.search}>
        <Feather name='search' size={16} color={colors.gray_300} />
        <Search.Field placeholder='Pesquisar pelo nome...' onChangeText={setName} value={name} />
        <TouchableOpacity onPress={() => setName("")}>
          <Feather name='x' size={16} color={colors.gray_300} />
        </TouchableOpacity>
      </Search>
      </View>
      <Contact contact={{
        name: "Bognar",
        image: require("@/assets/bognar.jpeg")
      }}/>
    </View>
  )
}