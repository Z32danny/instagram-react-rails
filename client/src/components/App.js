import React from 'react';
import '../App.css';
import Header from './Header';
import PostList from './PostList/PostList';
import Post from './Post';
import rails from '../apis/rails';

class App extends React.Component {
  state = { users: [] }; 
  
  async componentDidMount() {
    const response = await rails.get('/users')
    console.log(response)

    this.setState({ users: response.data });
  }

  render() {

    const {users} = this.state

    const userList = users.length ? (
      users.map(user => {
        return (
          <div key={user.id}>
            {user.first_name}
          </div>
        )
      })
    ) : (
      <div>
        No users yet
      </div>
    )

    return (
      <div className="App">
        <Header />
          <section className="App-main">
            {userList}
            <PostList />
            <Post 
              nickname="Chris" 
              avatar="https://www.laravelnigeria.com/img/chris.jpg" 
              caption="Moving the community!" 
              image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            <Post 
              nickname="OG" 
              avatar="https://www.laravelnigeria.com/img/chris.jpg" 
              aption="Holding a mic" 
              image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />

            {/* more posts */}
          </section>
      </div>
    );
  }
}

export default App;

