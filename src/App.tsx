import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import { useAppSelector } from './hook';

function App() {

  return (
    <div className="App">
    <Routes>
        <Route
          path='/'
          element={<>
            <Header/>
            <Menu/>
          </>}
        />
        <Route
          path='/signup'
          element={<SignUp/>}
        />
      </Routes>
    </div>
  );
}

export default App;
