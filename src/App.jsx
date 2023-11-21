
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Homepage from './Homepage';
import Forms from './InputField';
import FormHome from './FormHomepage';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/Home' element={<Homepage />} />
                <Route path='/FormHome' element={<FormHome />} />
                <Route path='/Forms' element={<Forms />} />
            </Routes>
        </Router>
    );
}

<p>Please Select an option from the navbar to traverse.</p>
 
export default App;