import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Coming_soon from './components/Coming_soon'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Coming_soon/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
