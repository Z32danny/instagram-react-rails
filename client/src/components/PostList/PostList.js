import React from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../../actions";

import "./PostList.css";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <div>
                        {post.description}
                    </div>
                    <p>
                        {post.user_id}
                    </p>
                </div>
            );
        });
    }
    
    render() {

        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;

        console.log(this.props.posts);

        return (
            <article className="Post" ref="Post">
                <div>{this.renderList()}</div>
                <header>
                    <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src={avatar} alt={nickname} />
                    </div>
                    <div className="Post-user-nickname">
                        <span>{nickname}</span>
                    </div>
                    </div>
                </header>
                <div className="Post-image">
                    <div className="Post-image-bg">
                        <img alt={caption} src={image} />
                    </div>
                </div>
                <div className="Post-caption">
                    <strong>{nickname}</strong>{caption}
                </div>
            </article>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: Object.values(state.posts) };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);