import React from 'react'
import ReactDOM from 'react-dom/client'

import { enalbleMSW } from './api/mocks/index.ts'
import { App } from './app.tsx'

enalbleMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
