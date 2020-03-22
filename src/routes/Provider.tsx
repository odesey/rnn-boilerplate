import React from 'react'
import { Options } from 'react-native-navigation'
import { RootType } from 'routes/types'
import { CounterContextProvider } from 'context/CounterContext'

/**
 * ### Wrapped component type
 *
 * Prop type for al screens wrapped with the TopLevelProvider
 */
type WrappedComponentType = React.FC & { options?: Options }

/**
 * ### App routes wrap
 *
 * This is the HOC for all app routes.
 * You can use this HOC to wrap with any provider (Redux, Apollo, etc).
 * You can also add things like global event listener or anything global really.
 */
export const wrapRoutes = (WrappedComponent: WrappedComponentType) => {
  const HOC: RootType = (props) => {
    return <WrappedComponent {...props} />
  }

  HOC.options = WrappedComponent.options
  return HOC
}

/**
 * ### React Context Counter routes wrap
 *
 * This is the HOC for all Counter React Context routes.
 * Any routes wrapped with this will have an access to the Counter Context.
 */
export const wrapCounterContext = (WrappedComponent: WrappedComponentType) => {
  const HOC: RootType = (props) => {
    return (
      <CounterContextProvider>
        <WrappedComponent {...props} />
      </CounterContextProvider>
    )
  }

  HOC.options = WrappedComponent.options
  return HOC
}
