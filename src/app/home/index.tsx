import { View, TouchableOpacity, Alert, SectionList, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';


import { styles } from './styles';
import { theme } from '@/theme';

import { Search } from '@/components/search';
import Contact from '@/components/contact';

export default function Home() {
  const colors =  theme.colors;
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");


  async function fetchContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync();

      if(status === Contacts.PermissionStatus.GRANTED) {
        const { data } = await Contacts.getContactsAsync();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Contatos", "Não foi possível carregar os contatos.");
    }
  }
  
  useEffect(() => {
    fetchContacts()
  })

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

      

      <SectionList
        sections={contacts} 
        keyExtractor={(item) => item.id}
        renderItem={() => {
          return (
            <Contact contact={{
              name: "Bognar",
              image: require("@/assets/bognar.jpeg")
            }}/>
          );
        }}
        renderSectionHeader={({section}) => <Text style={styles.section} >{section.title}</Text>}
        contentContainerStyle={styles.contentList}
      />
    </View>
  )
}