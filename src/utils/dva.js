import React from 'react'
import { Provider } from 'react-redux'
import * as core from 'dva-core'
import { isFunction } from 'dva-core/lib/utils'

export default function(opts = {}) {
  const app = core.create(opts)
  const oldAppStart = app.start
  app.start = function(container) {
    oldAppStart.call(app)

    return <Provider store={app._store}>{container}</Provider>
  }

  return app
}
