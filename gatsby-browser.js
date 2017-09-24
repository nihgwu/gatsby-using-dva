import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import dva from './src/utils/dva'
import appModal from './src/models/app'

const app = dva({
  onError(e) {
    console.log('onError', e)
  },
})

app.model(appModal)

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) =>
    app.start(<Router history={history}>{children}</Router>)

  return ConnectedRouterWrapper
}
