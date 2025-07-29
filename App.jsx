
import Create from './Pages/Create'
import Home from './Pages/Home'
import Read from './Pages/Read'
import Update from './Pages/Update'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='App'>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
