import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import PropertyDetail from './pages/PropertyDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App