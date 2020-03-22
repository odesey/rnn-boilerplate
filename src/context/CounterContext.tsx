import React, { Component, createContext } from 'react'

const _context = {
  count: 0,
}

type ContextWrapper = {
  count: number
  increment: () => void
  decrement: () => void
}

type CounterContextProviderState = {
  context: ContextWrapper
}

const contextWrapper = (component: Component<any, CounterContextProviderState>) => ({
  ..._context,
  increment: () => {
    _context.count += 1
    component.setState({ context: contextWrapper(component) })
  },
  decrement: () => {
    _context.count -= 1
    component.setState({ context: contextWrapper(component) })
  },
})

export const CounterContext = createContext<ContextWrapper>({
  count: 0,
  increment: () => {},
  decrement: () => {},
})

export class CounterContextProvider extends Component<{}, CounterContextProviderState> {
  state = {
    context: contextWrapper(this),
  }

  render() {
    return (
      <CounterContext.Provider value={this.state.context}>
        {this.props.children}
      </CounterContext.Provider>
    )
  }
}
