import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Directory from './Components/Directory';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/directory' element={<Directory/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
