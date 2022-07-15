import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import { Behavioural } from './pages/Behavioural'
import { Observer } from './pages/Creational/Observer'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="behavioural" element={<Behavioural />} />
      <Route path="observer" element={<Observer />} />
      <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
      />
    </Routes>
  </BrowserRouter>

)

