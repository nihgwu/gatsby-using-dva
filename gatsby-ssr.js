import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import createMemoryHistory from 'history/createMemoryHistory'

import dva from './src/utils/dva'
import appModal from './src/models/app'

const app = dva({
  onError(e) {
    console.log('onError', e)
  },
})

app.model(appModal)
app.setHistory(createMemoryHistory())

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => app.start(bodyComponent)
  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
