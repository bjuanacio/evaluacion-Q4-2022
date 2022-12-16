import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.scss'
import App from './app'

const root = createRoot((document as any).getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
