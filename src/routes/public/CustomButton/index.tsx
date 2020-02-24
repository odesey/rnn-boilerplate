import React from 'react'
import { StyleSheet, ViewStyle, TouchableOpacity, Text, View, Alert } from 'react-native'
import { RootType } from 'routes/types'

export type CustomButtonProps = {
  buttonText?: string
}

const CustomButton: RootType<CustomButtonProps> = ({ buttonText = 'button', componentId }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert(componentId)}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

interface Style {
  wrapper: ViewStyle
  button: ViewStyle
}

const styles = StyleSheet.create<Style>({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fc5e03',
    backgroundColor: 'white',
  },
})

export { CustomButton }
