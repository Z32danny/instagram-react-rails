import React from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from '../../actions';

class PostDelete extends React.Component {
    
    componentDidMount() {
        console.log(this.ownProps)
        const {id} = this.props.match.params;
        this.props.fetchPost(id)
    }
    
    render() {
        const id = this.props.match.params.id;
        
        return (
            // <React.Fragment>
            <>
                <button onClick={ () => this.props.deletePost(id) } className="ui button negative">
                    Delete
                </button>
            </>
            // </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { post: state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostDelete);