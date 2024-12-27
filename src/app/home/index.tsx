import { View, Text } from 'react-native';
import { styles } from './styles';
import { Search } from '@/components/search';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Search>
        <Search.Field placeholder='Pesquisar pelo nome' />
      </Search>
      </View>
    </View>
  )
}