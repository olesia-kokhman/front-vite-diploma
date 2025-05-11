import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-section">
                <NavLink to="/dashboard">
                    <img/>
                    BudgetBloom
                </NavLink>
            </div>

            <div className="nav-links">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/accounts">Accounts</NavLink>
                <NavLink to="/budget">Budget</NavLink>
                <NavLink to="/transactions">Transactions</NavLink>
                <NavLink to="/analytics">Analytics</NavLink>
            </div>

            <div className="user-section">
                <div className="user-info">
                    <img/>
                    <NavLink to="/profile">Username</NavLink>
                </div>
                <div className="dropdown-menu">
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/settings">Settings</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;