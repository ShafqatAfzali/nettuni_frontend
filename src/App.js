import { Route, Routes } from 'react-router-dom';
import Hjem from "./pages/hjem"
import Exist from "./pages/exist"
import Course from './pages/course'
import Teachers from "./pages/teachers"
import Students from "./pages/students"
import About from "./pages/about"

function App() {
  return (
    <div className='index'>
    <Routes>
      <Route path='/' element={<Hjem/>} />
      <Route path='/course/:id' element={<Course/>} />
      <Route path='/teachers' element={<Teachers/>} />
      <Route path='/students' element={<Students/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<Exist/>} />
    </Routes>
    </div>
  );
}

export default App;
