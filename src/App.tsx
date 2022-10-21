import React from 'react';
import './App.scss';
import Menu from './layout/Menu/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { PageData } from './pages/PageData';

function App() {
    return (
        <>
            <Router>
                <Menu/>
                <Routes>
                    {PageData.map((x, i) =>
                        <Route key={i} path={x.path} element={x.pageElement} />
                    )}
                </Routes>
            </Router>
        </>
    );
}

export default App;
