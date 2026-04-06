import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Coming_soon from './components/Coming_soon'
import Assets_page from './components/Assets_page'
import Testing from './pages/Testing'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Coming_soon/>}></Route>
          <Route path='/balariassetpage' element={<Assets_page/>}></Route>
          <Route path='/testing' element={<Testing/>}></Route>
          <Route path='/home' element={<Homepage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
