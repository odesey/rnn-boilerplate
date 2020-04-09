import { createContext, useContext } from 'react'
import { Layout, Options, Navigation } from 'react-native-navigation'
import { observable, action } from 'mobx'

type NavigationProps<P> = {
  name: string
  passProps?: P
  options?: Options
}

export class NavigationStore {
  @observable updating = false
  @observable currentComponentId: null | string = null
  @observable previousComponentId: null | string = null
  @observable commandType:
    | 'SET_ROOT'
    | 'SET_NEW_STACK_ROOT'
    | 'PUSH'
    | 'POP'
    | 'POP_TO'
    | 'SHOW_STACK_MODAL'
    | 'DISMISS_MODAL'
    | 'SHOW_OVERLAY'
    | 'DISMISS_OVERLAY'
    | null = null

  @action
  setUpdating(updating: boolean) {
    this.updating = updating
    return this
  }

  @action
  setCurrentComponentId(id: string | null) {
    this.currentComponentId = id
    return this
  }

  @action
  setPreviousComponentId(id: string | null) {
    this.previousComponentId = id
    return this
  }

  /**
   * ### SetRoot
   * Set the new Root stacked component layout.
   */
  @action
  setRoot<R>(props: NavigationProps<R>) {
    this.updating = true
    this.commandType = 'SET_ROOT'
    return Navigation.setRoot({ root: this.setLayoutStackChildren(props) })
  }

  /**
   * ### SetNewStackRoot
   * Set the new StackRoot component layout.
   * This is slightly different to `setRoot` function. This will animate like `push` function.
   */
  @action
  setNewStackRoot<R>(toId: string, props: NavigationProps<R>) {
    this.updating = true
    this.commandType = 'SET_NEW_STACK_ROOT'
    return Navigation.setStackRoot(toId, this.setLayoutChildren(props))
  }

  /**
   * ### PushTo
   * Push a new screen to the current stack.
   */
  @action
  push<R>(currentId: string, props: NavigationProps<R>) {
    this.updating = true
    this.commandType = 'PUSH'
    return Navigation.push(currentId, this.setLayoutChildren(props))
  }

  /**
   * ### Pop
   * Pop the current screen from the stack.
   */
  @action
  pop(currentId: string, options?: Options) {
    this.updating = true
    this.commandType = 'POP'
    return Navigation.pop(currentId, options)
  }

  /**
   * ### PopTo
   * Pop to the wanted screen from the current stack.
   */
  @action
  popTo(toId: string, options?: Options) {
    this.updating = true
    this.commandType = 'POP_TO'
    return Navigation.popTo(toId, options)
  }

  /**
   * ### ShowOverlay
   * Open a single component overlay layout.
   */
  @action
  showOverlay<P>(props: NavigationProps<P>) {
    this.updating = true
    this.commandType = 'SHOW_OVERLAY'
    return Navigation.showOverlay(this.setLayoutChildren(props))
  }

  /**
   * ### DismissOverlay
   * Dismiss a overlay layout.
   */
  @action
  dismissOverlay(currentId: string) {
    this.updating = true
    this.commandType = 'DISMISS_OVERLAY'
    return Navigation.dismissOverlay(currentId)
  }

  /**
   * ### ShowStackModal
   * Open a stacked component modal layout.
   */
  @action
  showStackModal<P>(props: NavigationProps<P>) {
    this.updating = true
    this.commandType = 'SHOW_STACK_MODAL'
    return Navigation.showModal(this.setLayoutStackChildren(props))
  }

  /**
   * ### DismissModal
   * Dismiss the current modal.
   */
  @action
  dismissModal(currentId: string, options?: Options) {
    this.updating = true
    this.commandType = 'DISMISS_MODAL'
    return Navigation.dismissModal(currentId, options)
  }

  /**
   * Set single component layout
   */
  private setLayoutChildren<P>(props: NavigationProps<P>): Layout<P> {
    return {
      component: { ...props },
    }
  }

  /**
   * Set stacked component layout
   */
  private setLayoutStackChildren<P>(props: NavigationProps<P>, options?: Options): Layout {
    return {
      stack: { children: [this.setLayoutChildren(props)], options },
    }
  }

  @action
  reset() {
    this.currentComponentId = null
    this.previousComponentId = null
    this.commandType = null
  }
}

export const navigationStore = new NavigationStore()
export const NavigationStoreContext = createContext(navigationStore)
export const useNavigationStore = () => useContext(NavigationStoreContext)
