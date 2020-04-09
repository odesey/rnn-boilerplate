import { Navigation } from 'react-native-navigation'
import { defaultOptions } from 'routes/config/defaultOptions'
import { registerScreens } from 'routes/screens'
import { navigationStore } from 'store/navigation.store'
import { Screens } from 'routes/routes'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions)
  registerScreens()
  navigationStore.setRoot({
    name: Screens.Screen1,
  })
})
