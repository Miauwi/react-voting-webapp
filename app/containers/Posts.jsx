import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostsView from 'components/Posts/PostsView';
import * as PostActions from 'actions/posts';

PostsView.need = [
  PostActions.fetchPosts
];

function mapStateToProps(state) {
  return {
    posts: state.postsByPort.posts,
    authenticated: state.user.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch);
}

const Posts = connect(mapStateToProps,mapDispatchToProps)(PostsView);
export default Posts;
























/*
const mapStateToProps = (state) => {
  return {
      postsByPort: state.posts.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postVote: (data) => {
      dispatch(postVoteRequest(data));
    }
  }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsView)


export default Posts
*/