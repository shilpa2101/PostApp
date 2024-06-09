import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import Navbar from './components/Navbar';
import DeletePost from './components/DeletePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPost from './components/SearchPost';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddPost/>}/>
    <Route path='/search' element={<SearchPost/>}/>
    <Route path='/delete' element={<DeletePost/>}/>
    <Route path='/view' element={<ViewPost/>}/>
    
   </Routes>
    </BrowserRouter>
  );
}

export default App;
