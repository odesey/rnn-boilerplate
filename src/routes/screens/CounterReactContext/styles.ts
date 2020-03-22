import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Style {
  container: ViewStyle
  count: TextStyle
}

export default StyleSheet.create<Style>({
  container: {
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  count: {
    textAlign: 'center',
    margin: 10,
  },
})
