import { Navigation } from 'react-native-navigation'
import { defaultOptions } from 'routes/config/defaultOptions'
import { registerAppRoutes, registerCounterContextRoutes } from 'routes/registerScreens'
import { rootStore } from 'store/root.store'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions)
  rootStore.hydrate().then(() => {
    registerAppRoutes()
    registerCounterContextRoutes()

    // Decide whether user is logged in here and choose the next route.
    rootStore.login()
  })
})
