import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Coming_soon from './components/Coming_soon'
import Assets_page from './components/Assets_page'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Coming_soon/>}></Route>
          <Route path='/balari-asset-page' element={<Assets_page/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
