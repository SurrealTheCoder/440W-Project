
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import CSV from './CSV';
import Homepage from './Homepage';
import CSVInput from './CSVinput';
import Forms from './FormCreator';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/Home' element={<Homepage />} />
                <Route path='/CSV' element={<CSV />} />
                <Route path='/Input' element={<CSVInput />} />
                <Route path='/Forms' element={<Forms />} />
            </Routes>
        </Router>
    );
}

<p>Please Select an option from the navbar to traverse the website.</p>
 
export default App;