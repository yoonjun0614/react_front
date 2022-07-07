import React from 'react';
import Login from './components/login/Login';
import Main from './components/main/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />}></Route>
                    <Route exact path="/main" element={<Main />}></Route>
                </Routes>
			</BrowserRouter>
        </div>
    );
}

export default App;
