import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../../actions";
import PostDelete from '../PostDelete/PostDelete'
import PostShow from '../PostShow/PostShow'
import {Link} from 'react-router-dom';

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
    
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: Object.values(state.posts) };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);