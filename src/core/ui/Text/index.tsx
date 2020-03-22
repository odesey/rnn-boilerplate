import React from 'react'
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native'

export type TextProps = {
  size?: number
  color?: string
} & RNTextProps

export const Text: React.FC<TextProps> = ({ size, color, style, ...props }) => {
  const customStyle: TextStyle = {
    fontSize: size ?? 20,
    color: color ?? 'black',
  }

  return <RNText style={[customStyle, style]} {...props} />
}
