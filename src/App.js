import { Route, Routes } from 'react-router-dom';
import Hjem from "./pages/hjem"
import Exist from "./pages/exist"
import Search from './pages/search';
import Course from './pages/course';

function App() {
  return (
    <div className='index'>
    <Routes>
      <Route path='/' element={<Hjem/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/course/:id' element={<Course/>} />

      <Route path='*' element={<Exist/>} />
    </Routes>
    </div>
  );
}

export default App;
