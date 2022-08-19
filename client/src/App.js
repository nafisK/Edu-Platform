import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cal from './Pages/Cal'
import VideoCall from './Pages/VideoCall'
import PageNotFound from './Pages/PageNotFound'
import Login from './Pages/Login'
import SideNav from "./Components/SideNav";

function App() {
  return (
    <div className='App'>
      <SideNav />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/profile' element={<Home />} />
          <Route path='/calendar' element={<Cal />} />
          <Route path='/videocall' element={<VideoCall />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
