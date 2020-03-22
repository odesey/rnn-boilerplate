import React, { useContext } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text } from 'core/ui'
import { RootType } from 'routes/types'
import { CounterContext } from 'context/CounterContext'

import styles from './styles'

export type CounterReactContextProps = {}

export const CounterReactContext: RootType<CounterReactContextProps> = () => {
  const { count, increment, decrement } = useContext(CounterContext)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text size={34} style={styles.count}>{`Clicked ${count} times!`}</Text>
      <Button title="Increment" buttonColor="#3c8447" onPress={increment} />
      <Button title="Decrement" buttonColor="#f26964" onPress={decrement} />
    </ScrollView>
  )
}

CounterReactContext.options = {
  topBar: {
    title: {
      text: 'Counter React Context',
    },
    largeTitle: {
      visible: true,
    },
  },
}
