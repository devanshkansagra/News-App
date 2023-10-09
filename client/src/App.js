import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom'
import Profile from './components/Profile';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<News category="all"/>}/>
        <Route path='/science' element={<News category="science"/>}/>
        <Route path='/sports' element={<News category="sports"/>}/>
        <Route path='/politics' element={<News category="politics"/>}/>
        <Route path='/entertainment' element={<News category="entertainment"/>}/>
        <Route path='/education' element={<News category="education"/>}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </>
  );
}

export default App;
