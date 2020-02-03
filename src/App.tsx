import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import './App.css';
import axios from 'axios';
const githubid = '6ba2ea9421a8da962ae1';
const githubsecret = '724d0dc5e34df05cb03238518ee8dd80816d7401';
const App = () => {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(false);
  const [alert, setalert] = useState<any>(null);
  const [repos, setrepos] = useState([]);
  const searchUsers = async (text: string) => {
    setloading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=
      ${githubid}&client_secret=${githubsecret}`
    );
    setusers(res.data.items);
    setloading(false);
  };

  const getUser = async (username: string) => {
    setloading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=
      ${githubid}&client_secret=${githubsecret}`
    );

    setuser(res.data);
    setloading(false);
  };
  const getUserRepos = async (username: string) => {
    setloading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
      ${githubid}&client_secret=${githubsecret}`
    );

    setrepos(res.data);
    setloading(false);
  };
  const clearUsers = () => {
    setusers([]);
    setloading(false);
  };
  const showAlert = (msg: string, type: string) => {
    setalert({ msg, type });
    setTimeout(() => setalert(null), 5000);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            ></Route>
            <Route exact path='/about' component={About}></Route>
            <Route
              exact
              path='/user/:login'
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  user={user}
                  loading={loading}
                ></User>
              )}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
