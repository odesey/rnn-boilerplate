import { createContext } from 'react'
import { AsyncStorage, Alert } from 'react-native'
import { create } from 'mobx-persist'
import { NavigationHelpers } from 'routes/functions'
import { Routes } from 'routes/routes'

import { CounterStore } from './counter.store'

export class RootStore {
  counterStore: CounterStore

  constructor() {
    this.counterStore = new CounterStore()
  }

  login = () => {
    // Do app set up stuff here and navigate to logged in screen.
    NavigationHelpers.setRoot({ name: Routes.App })
  }

  logout = () => {
    // Do app clean up stuff here and navigate to logged out screen.
    NavigationHelpers.setRoot({ name: Routes.App })
  }

  /**
   * Hydrate all persistent stores.
   */
  async hydrate() {
    const hydrate = create({ storage: AsyncStorage })
    try {
      await hydrate('ExampleStore: ', this.counterStore)
      return {
        exampleStore: this.counterStore,
      }
    } catch (e) {
      this.logout()
      Alert.alert('Something went wrong')
      return {
        exampleStore: this.counterStore,
      }
    }
  }
}

export const rootStore = new RootStore()
export const RootStoreContext = createContext(rootStore)
