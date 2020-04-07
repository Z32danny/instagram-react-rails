import React from 'react';
import {connect} from 'react-redux'
import {fetchPost} from '../../actions'
import PostDelete from '../PostDelete/PostDelete'
import {Link} from 'react-router-dom';

class PostShow extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    
    render() {
        if (!this.props.post) {
            return <div>Loading...</div>
        }

        console.log(this.props.post)

        const { description, id, user } = this.props.post;
        
        return (
            <div>
                <Link to={`/posts/delete/${id}`} >
                    Delete Post
                </Link>

                <div key={id}>
                    <article className="Post" ref="Post">
                        <header>
                            <div className="Post-user">
                                <div className="Post-user-avatar">
                                    <img src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" alt={user.first_name} />
                                </div>
                                <div className="Post-user-nickname">
                                    <span>{user.first_name}</span>
                                </div>
                            </div>
                        </header>
                        <div className="Post-image">
                            <div className="Post-image-bg">
                                <img alt={description} src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
                            </div>
                        </div>
                        <div className="Post-caption">
                            <strong>{user.first_name} </strong>{description}
                        </div>
                    </article>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchPost})(PostShow);