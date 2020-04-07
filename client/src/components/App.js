import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import '../App.css';
import Header from './Header';
import PostList from './PostList/PostList';
import PostShow from './PostShow/PostShow';
import PostDelete from './PostDelete/PostDelete';
import history from '../history';
//import PostCreate from './streams/PostCreate';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Router history={history}>
            <div>
              <Header />
              <Switch>
                <Route path="/" exact component={PostList} />
                <Route path="/posts/delete/:id" exact component={PostDelete} />
                <Route path="/posts/:id" exact component={PostShow} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;

