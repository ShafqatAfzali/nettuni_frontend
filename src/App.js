import { Route, Routes } from 'react-router-dom';
import Hjem from "./pages/hjem"
import Exist from "./pages/exist"
import Search from './pages/search';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Hjem/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='*' element={<Exist/>} />
    </Routes>
    </>
  );
}

export default App;
