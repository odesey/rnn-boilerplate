import React from 'react'
import { Button, Alert } from 'react-native'
import { observer } from 'mobx-react-lite'

import { useNavigationStore } from 'store/navigation.store'
import { Screens } from './routes'

export type ComponentProps = {}

export const Component: React.FC<ComponentProps> = observer(() => {
  const navigationStore = useNavigationStore()

  return (
    <Button
      title="Take me to th next screen"
      onPress={() => {
        if (!navigationStore.currentComponentId) {
          return Alert.alert('Oops', 'No current component id')
        }

        return navigationStore
          .push(navigationStore.currentComponentId, { name: Screens.Modal1 })
          .catch((e) => Alert.alert('Oops', `Failed navigating: ${JSON.stringify(e)}`))
      }}
    />
  )
})
