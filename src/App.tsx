import { Layout } from 'components/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../src/pages/LoginPage'
import { RegisterPage } from '../src/pages/RegisterPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
