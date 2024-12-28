import { View, Text } from 'react-native';
import { styles } from './styles';
import { Search } from '@/components/search';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/theme';

export default function Home() {
  const colors =  theme.colors;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Search style={styles.search}>
        <Feather name='search' size={16} color={colors.gray_300} />
        <Search.Field placeholder='Pesquisar pelo nome...' />
        <Feather name='x' size={16} color={colors.gray_300} />
      </Search>
      </View>
    </View>
  )
}