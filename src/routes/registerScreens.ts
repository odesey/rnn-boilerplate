import { Navigation } from 'react-native-navigation'

/**
 * APP ROUTES
 */
import { App } from 'routes/screens/App'
import { CounterMobXIncrement } from 'routes/screens/CounterMobXIncrement'
import { CounterMobXDecrement } from 'routes/screens/CounterMobXDecrement'

/**
 * COUNTER CONTEXT ROUTES
 */
import { CounterReactContext } from 'routes/screens/CounterReactContext'

import { Routes, CounterContextRoutes } from './routes'
import { wrapRoutes, wrapCounterContext } from './Provider'

/**
 * Register Public routes
 */
export function registerAppRoutes() {
  const appRoutes = new Map()
    .set(Routes.App, App)
    .set(Routes.CounterMobXIncrement, CounterMobXIncrement)
    .set(Routes.CounterMobXDecrement, CounterMobXDecrement)

  Array.from(appRoutes).forEach(([routeName, component]) => {
    Navigation.registerComponent(routeName, () => wrapRoutes(component))
  })
}

/**
 * Register Counter context routes
 */
export function registerCounterContextRoutes() {
  const counterContextRoutes = new Map().set(CounterContextRoutes.ReactContext, CounterReactContext)

  Array.from(counterContextRoutes).forEach(([routeName, component]) => {
    Navigation.registerComponent(
      routeName,
      () => wrapCounterContext(component),
      () => component
    )
  })
}
