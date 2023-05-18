import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
          <Route path='/read/:id' element={<Read />}></Route>
        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
