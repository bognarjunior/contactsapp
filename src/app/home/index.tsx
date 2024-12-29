import { View, TouchableOpacity, Alert, SectionList, Text } from 'react-native';
import { useEffect, useId, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';


import { styles } from './styles';
import { theme } from '@/theme';

import { Search } from '@/components/search';
import Contact, { ContactProps } from '@/components/contact';

type SectionListDataProps = {
  title: string,
  data: ContactProps[]
}

export default function Home() {
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState<SectionListDataProps[]>([]);
  
  const colors =  theme.colors;

  async function fetchContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync();

      if(status === Contacts.PermissionStatus.GRANTED) {

        const { data } = await Contacts.getContactsAsync({
          name,
          sort: 'firstName'
        });

        const list = data.map(( contact ) => ({
          id: contact.id ?? useId(),
          name: contact.name,
          image: contact.image
        })).reduce<SectionListDataProps[]>((acc: any, item) => {
          const firstLetter = item.name.charAt(0).toUpperCase();
          const existingEntry = acc.find((entry: SectionListDataProps) => entry.title === firstLetter);

          if(existingEntry) {
            existingEntry.data.push(item)
          } else {
            acc.push({ title: firstLetter, data: [item] })
          }

          return acc;
        }, []);

        setContacts(list);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Contatos", "Não foi possível carregar os contatos.");
    }
  }
  
  useEffect(() => {
    fetchContacts()
  }, [name])

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
        renderItem={({item}) => {
          return (
            <Contact contact={item}/>
          );
        }}
        renderSectionHeader={({section}) => <Text style={styles.section} >{section.title}</Text>}
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}