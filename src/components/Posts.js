import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

  render() {
    const postItems = this.state.posts.map(posts => (
      <div key={posts.id}>
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(Posts);
