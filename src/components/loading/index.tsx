import { ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { theme } from '@/theme';

export default function Loading() {
  const color = theme.colors;
  return (
    <ActivityIndicator style={styles.containiner} color={color.blue}/>
  )
}