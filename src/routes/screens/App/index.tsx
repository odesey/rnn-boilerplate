import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text } from 'core/ui'
import { RootType } from 'routes/types'
import { NavigationHelpers } from 'routes/functions'
import { CounterContextRoutes, Routes } from 'routes/routes'

import styles from './styles'

interface AppProps {
  componentId: string
}

const App: RootType<AppProps> = ({ componentId }) => {
  const navigateToReactContextScreen = () =>
    NavigationHelpers.pushTo(componentId, { name: CounterContextRoutes.ReactContext })

  const navigateToMobXCounterIncrement = () =>
    NavigationHelpers.pushTo(componentId, { name: Routes.CounterMobXIncrement })

  const navigateToMobXCounterDecrement = () =>
    NavigationHelpers.pushTo(componentId, { name: Routes.CounterMobXDecrement })

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text size={11} color="#ab9a93">
          REACT COUNTER CONTEXT
        </Text>
        <Button onPress={navigateToReactContextScreen} title="Go to Counter React Context Screen" />
      </View>

      <View style={styles.section}>
        <Text size={11} color="#ab9a93">
          MOBX COUNTER
        </Text>
        <Button
          onPress={navigateToMobXCounterIncrement}
          title="Go to Increment MobX Counter"
          buttonColor="#f26964"
        />
        <Button
          onPress={navigateToMobXCounterDecrement}
          title="Go to Decrement MobX Counter"
          buttonColor="#9ad3be"
        />
      </View>
    </ScrollView>
  )
}

App.options = {
  topBar: {
    noBorder: false,
    title: { text: 'App' },
    largeTitle: { visible: true, color: 'coral' },
  },
}

export { App }
