import React, { useContext, useEffect } from 'react'
import { Text, View, Button, ScrollView, Alert } from 'react-native'
import { observer } from 'mobx-react-lite'
import { RootType } from 'routes/types'
import { NavigationHelpers } from 'routes/functions'
import { PrivateRoutes, PublicRoutes } from 'routes/routes'
import { RootStoreContext } from 'store/root.store'

import styles from './styles'
import { Navigation } from 'react-native-navigation'

interface ExampleProps {
  componentId: string
}

const Example: RootType<ExampleProps> = observer(function Example({ componentId }) {
  const { exampleStore } = useContext(RootStoreContext)

  const onPress = () => {
    NavigationHelpers.pushTo(componentId, {
      name: PrivateRoutes.Example2,
    })
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Example 1!</Text>
        <Text>{`Count: ${exampleStore.count}`}</Text>
        <Button title="Navigate to Next" onPress={onPress} />
        <Button title="Increment count" onPress={exampleStore.increment} />
        <Button title="Decrement count" onPress={exampleStore.decrement} />
      </View>
    </ScrollView>
  )
})

Example.options = {
  layout: {
    backgroundColor: 'white',
    componentBackgroundColor: 'white',
  },
  topBar: {
    noBorder: false,
    title: { text: 'Example 1' },
    largeTitle: { visible: false },

    leftButtons: [
      {
        id: 'RIGHT_BUTTON_1',
        component: {
          name: PublicRoutes.CustomButton,
          passProps: {
            buttonText: 'Left button',
          },
        },
      },
    ],

    rightButtons: [
      {
        id: 'RIGHT_BUTTON_2',
        component: {
          name: PublicRoutes.CustomButton,
          passProps: {
            buttonText: 'Right button',
          },
        },
      },
    ],
  },
}

export { Example }
