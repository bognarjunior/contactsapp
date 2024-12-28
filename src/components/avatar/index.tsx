import { Image, ImageProps, View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const variants = {
  size: {
    medium: {
      width: 54,
      height: 54,
      borderRadius: 18,
    },
    large: {
      width: 100,
      height: 100,
      borderRadius: 32,
    }
  },
  text: {
    medium: {
      fontSize: 24,
    },
    large: {
      fontSize: 32,
    }
  }
}

type Props= {
  image?: ImageProps | null,
  name: string,
  variant?: "medium" | "large"
}

export default function Avatar({ image, name, variant = "medium" }: Props) {
  return (
    <View>
      {
        image ? (
          <Image source={image} style={variants.size[variant]}/>
        ) : (
          <View style={styles.letter}>
            <Text style={[styles.text, variants.text[variant]]}>{name[0].toUpperCase()}</Text>
          </View>
        )
      }
    </View>
    
  )
}