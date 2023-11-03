import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}