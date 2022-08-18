import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Calender from './Pages/Calender'
import VideoCall from './Pages/VideoCall'
import PageNotFound from './Pages/PageNotFound'
import Login from './Pages/Login'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/profile' element={<Home />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/videocall' element={<VideoCall />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
