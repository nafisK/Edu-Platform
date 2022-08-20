import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cal from './Pages/Cal'
import VideoCall from './Pages/VideoCall'
import PageNotFound from './Pages/PageNotFound'
import Login from './Pages/Login'
import Messages from './Pages/Messages'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/profile' element={<Home />} />
          <Route path='/calendar' element={<Cal />} />
          <Route path='/videocall' element={<VideoCall />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
