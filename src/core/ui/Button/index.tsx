import React from 'react'
import { StyleSheet, ViewStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Text } from '../Text'

export type ButtonProps = {
  title: string
  buttonColor?: string
  textColor?: string
} & TouchableOpacityProps

export const Button: React.FC<ButtonProps> = ({
  title,
  buttonColor,
  textColor,
  style,
  ...props
}) => {
  const customButtonStyle = {
    backgroundColor: buttonColor ?? 'coral',
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, customButtonStyle, style]}
      {...props}
    >
      <Text size={17} color={textColor ?? 'white'}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

interface Style {
  button: ViewStyle
}

const styles = StyleSheet.create<Style>({
  button: {
    minWidth: 200,
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
})
