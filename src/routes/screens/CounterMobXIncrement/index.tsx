import React from 'react'
import { StyleSheet, ViewStyle, ScrollView } from 'react-native'
import { observer } from 'mobx-react-lite'
import { CounterStoreContext } from 'store/counter.store'
import { Button, Text } from 'core/ui'

export type CounterMobXIncrementProps = {}

export const CounterMobXIncrement: React.FC<CounterMobXIncrementProps> = observer(() => {
  const { count, increment } = React.useContext(CounterStoreContext)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text size={34}>{`Clicked: ${count} times!`}</Text>
      <Button title="Increment" onPress={increment} />
    </ScrollView>
  )
})

interface Style {
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
})
