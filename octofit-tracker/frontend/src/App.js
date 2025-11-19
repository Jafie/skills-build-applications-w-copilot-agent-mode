import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OctoFitLogo from './components/OctoFitLogo';
import Users from './components/Users';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <OctoFitLogo />
              <span>OctoFit Tracker</span>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  👥 Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/activities">
                  ⚡ Activities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">
                  👨‍👩‍👧‍👦 Teams
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">
                  💪 Workouts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">
                  🏆 Leaderboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-container">
              <div className="container mt-5">
                <h1>Welcome to OctoFit Tracker</h1>
                <p className="lead">Your Personal Fitness Companion</p>
                <p className="text-muted">
                  Track your workouts, join teams, compete on the leaderboard, and achieve your fitness goals!
                </p>

                <div className="feature-cards">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">👥 Users</h5>
                      <p className="card-text">
                        View all registered users and their profiles.
                      </p>
                      <Link to="/users" className="btn btn-primary">
                        View Users
                      </Link>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">⚡ Activities</h5>
                      <p className="card-text">
                        Log and track your daily activities and exercise routines.
                      </p>
                      <Link to="/activities" className="btn btn-primary">
                        View Activities
                      </Link>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">👨‍👩‍👧‍👦 Teams</h5>
                      <p className="card-text">
                        Join teams and collaborate with other fitness enthusiasts.
                      </p>
                      <Link to="/teams" className="btn btn-primary">
                        View Teams
                      </Link>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">💪 Workouts</h5>
                      <p className="card-text">
                        Discover personalized workout suggestions tailored for you.
                      </p>
                      <Link to="/workouts" className="btn btn-primary">
                        View Workouts
                      </Link>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">🏆 Leaderboard</h5>
                      <p className="card-text">
                        See how you rank against other users in the competition.
                      </p>
                      <Link to="/leaderboard" className="btn btn-primary">
                        View Leaderboard
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
