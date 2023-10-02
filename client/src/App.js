import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<News category="all"/>}/>
        <Route path='/science' element={<News category="science"/>}/>
        <Route path='/politics' element={<News category="politics"/>}/>
        <Route path='/entertainment' element={<News category="entertainment"/>}/>
        <Route path='/education' element={<News category="education"/>}/>
      </Routes>
    </>
  );
}

export default App;
