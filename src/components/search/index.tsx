import { View, TextInput, ViewProps, TextInputProps } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { theme } from '@/theme';

const colors =  theme.colors;

function Search({children, style}: ViewProps) {
  return (
    <View style={[style, styles.container]}>
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return <TextInput style={styles.input} placeholderTextColor={colors.gray_300} {...rest}/>
}

Search.Field = Field;

export { Search };