import React from 'react'
import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'

export class CounterStore {
  @persist @observable count = 0

  @action.bound
  increment() {
    this.count += 1
  }

  @action.bound
  decrement() {
    this.count -= 1
  }

  @action
  reset() {
    this.count = 0
  }
}

export const counterStore = new CounterStore()
export const CounterStoreContext = React.createContext(counterStore)
