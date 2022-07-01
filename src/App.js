import React from 'react';
import Login from './components/login/Login';
import Counter from './components/count/Counter'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />}></Route>
                    <Route exact path="/Counter" element={<Counter />}></Route>
                </Routes>
			</BrowserRouter>
        </div>
    );
}

export default App;
