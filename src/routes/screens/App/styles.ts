import { StyleSheet, ViewStyle } from 'react-native'

interface Style {
  container: ViewStyle
  section: ViewStyle
}

export default StyleSheet.create<Style>({
  container: {
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F5FCFF',
  },
  section: {
    marginBottom: 20,
  },
})
