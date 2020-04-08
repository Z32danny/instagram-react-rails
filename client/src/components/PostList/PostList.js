import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../../actions";
import PostDelete from '../PostDelete/PostDelete'
import PostShow from '../PostShow/PostShow'
import {Link} from 'react-router-dom';
import rails from '../../apis/rails';

import "./PostList.css";

class PostList extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <article className="Post" ref="Post">
                        <Link to={`/posts/${post.id}`}>
                            <header>
                                <div className="Post-user">
                                    <div className="Post-user-avatar">
                                        <img src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" alt={post.user.first_name} />
                                    </div>
                                    <div className="Post-user-nickname">
                                        <span>{post.user.first_name}</span>
                                    </div>
                                </div>
                            </header>
                            <div className="Post-image">
                                <div className="Post-image-bg">
                                    <img alt={post.description} src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
                                </div>
                            </div>
                            <div className="Post-caption">
                                <strong>{post.user.first_name} </strong>{post.description}
                            </div>
                        </Link>
                    </article>
                </div>
            );
        });
    }

    async login() {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const request = {"email": email, "password": password}
        console.log(request)

        const result = await rails.post('/user_token', {
            auth: request
        })

        console.log(result)
        localStorage.setItem("jwt", result.data.jwt)
    };

    logout() {
        localStorage.clear();    
    }
    
    render() {
        return (

            <div>
            <form>
                <label htmlFor="email">
                    Email: 
                </label>
                <br />
                <input
                    name="email"
                    id="email"
                    type="email"
                />
                <br /><br />
                <label htmlFor="password">
                    Password:
                </label>
                <br />
                <input
                    name="password"
                    id="password"
                    type="password"
                />
            </form>
            <br />
            <button onClick={this.login} >
                Login
            </button>
            <button onClick={this.logout} >
                Logout
            </button>

            <div>
                {this.renderList()}
            </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return { posts: Object.values(state.posts) };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);