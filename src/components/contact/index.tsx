import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Avatar from '@/components/avatar'

export default function Contact() {
  return (
    <View>
      <TouchableOpacity>
        <Avatar name='Bognar' image={require("@/assets/bognar.jpeg")} />
        <Text style={styles.name}>Contact</Text>
      </TouchableOpacity>
    </View>
  )
}