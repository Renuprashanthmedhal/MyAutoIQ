import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmailList from './components/EmailList/EmailList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <header className="bg-light py-3 mb-3">
            <div className="container">
              <div className="d-flex justify-content-between">
                <div>
                  <span className="me-4">Nurturing</span>
                  <span className="me-4">Workflows</span>
                  <span className="me-4">Templates</span>
                  <span className="me-4">Dealer Data</span>
                  <span className="me-4">Dealer Settings</span>
                  <span>Dashboard</span>
                </div>
                <div>
                  <img src="/logo.png" alt="myauto logo" height="30" />
                </div>
              </div>
            </div>
          </header>
          <main className="container d-flex justify-content-center align-items-center flex-column">
            <EmailList />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;