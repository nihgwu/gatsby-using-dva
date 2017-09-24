import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

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

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => app.start(bodyComponent)
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}








