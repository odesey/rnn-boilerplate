import React, { useLayoutEffect } from 'react'
import { Options, Navigation } from 'react-native-navigation'
import { observer } from 'mobx-react-lite'

import { RootType } from 'routes/types'
import { useNavigationStore } from 'store/navigation.store'

type WrappedComponentType = React.FC & { options?: Options }

export const wrapRoutes = (WrappedComponent: WrappedComponentType) => {
  const HOC: RootType = observer((props) => {
    const navigationStore = useNavigationStore()

    /**
     * If ID1 appears, set the current to previous and set ID1 to current.
     * ID2 appears, set ID1 to previous and set ID2 to current.
     */
    useLayoutEffect(() => {
      const appearEvent = Navigation.events().registerComponentDidAppearListener(
        ({ componentId, componentType }) => {
          if (componentType !== 'Component') return
          if (componentId !== props.componentId) return

          navigationStore
            .setPreviousComponentId(navigationStore.currentComponentId)
            .setCurrentComponentId(componentId)
            .setUpdating(false)
        }
      )

      const disappearEvent = Navigation.events().registerComponentDidDisappearListener(
        ({ componentId, componentType }) => {
          if (componentType !== 'Component') return
          if (componentId !== props.componentId) return

          if (navigationStore.commandType === 'DISMISS_OVERLAY') {
            navigationStore
              .setCurrentComponentId(navigationStore.previousComponentId)
              .setPreviousComponentId(null)
              .setUpdating(false)
          }
        }
      )

      const modalDismissEvent = Navigation.events().registerModalDismissedListener(
        ({ componentId }) => {
          if (componentId !== props.componentId) return

          navigationStore
            .setCurrentComponentId(navigationStore.previousComponentId)
            .setPreviousComponentId(null)
            .setUpdating(false)
        }
      )

      return () => {
        appearEvent.remove()
        disappearEvent.remove()
        modalDismissEvent.remove()
      }
    }, [navigationStore, props.componentId])

    return <WrappedComponent {...props} />
  })

  HOC.options = WrappedComponent.options
  return HOC
}
