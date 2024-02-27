import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'


function App() {

  return (
    <Router>
     <Routes>
     <Route path='/' element={<Users />}/>
     <Route path='/places/new' element={<NewPlace />}/>
     </Routes>
    </Router>
  )
}

export default App
