import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VideoCard from './components/VideoCard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/:videoId' element={<VideoCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App