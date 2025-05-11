import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard.jsx';
import Accounts from './pages/Accounts.jsx';
import Budget from './pages/Budget.jsx';
import Transactions from './pages/Transactions.jsx';
import Analytics from './pages/Analytics.jsx';
import Navbar from './components/ui/general/Navbar/Navbar.jsx';

import './index.css';

function App() {
    return (
        <>
            <Navbar />
            <div className="routes px-4 py-2">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
        </>
    );
}

export default App;

