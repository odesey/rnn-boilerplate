import React from 'react'
import { StyleSheet, ViewStyle, View, Text, Button, TextStyle } from 'react-native'
import { observer } from 'mobx-react-lite'
import { useNavigationStore } from 'store/navigation.store'

import { Screens } from './routes'
import { RootType } from './types'

export type Overlay2Props = {}

export const Overlay2: RootType<Overlay2Props> = observer(({ componentId }) => {
  const navigationStore = useNavigationStore()

  return (
    <View style={styles.wrapper}>
      <Button
        title="Push to Screen 1"
        onPress={() => navigationStore.push(componentId, { name: Screens.Screen1 })}
      />
      <Button
        title="Push to Screen 2"
        onPress={() => navigationStore.push(componentId, { name: Screens.Screen2 })}
      />

      <Button
        title="Show Modal 1"
        onPress={() => navigationStore.showStackModal({ name: Screens.Modal1 })}
      />
      <Button
        title="Show Modal 2"
        onPress={() => navigationStore.showStackModal({ name: Screens.Modal2 })}
      />

      <Button
        title="Show Overlay 1"
        onPress={() => navigationStore.showOverlay({ name: Screens.Overlay1 })}
      />
      <Button
        title="Show Overlay 2"
        onPress={() => navigationStore.showOverlay({ name: Screens.Overlay2 })}
      />

      <Button title="Dismiss modal" onPress={() => navigationStore.dismissModal(componentId)} />
      <Button title="Dismiss overlay" onPress={() => navigationStore.dismissOverlay(componentId)} />

      <View style={styles.container}>
        <Text style={styles.text}>Overlay 2</Text>
        <Text style={styles.text}>{`Current: ${componentId}`}</Text>
        <Text style={styles.text}>{`Registered: ${navigationStore.currentComponentId}`}</Text>
        <Text style={styles.text}>{`Updating: ${navigationStore.updating}`}</Text>
      </View>
    </View>
  )
})

Overlay2.options = {
  topBar: {
    title: {
      text: 'Overlay 2',
    },
  },
}

interface Style {
  wrapper: ViewStyle
  text: TextStyle
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  container: {
    marginTop: 10,
  },
})
