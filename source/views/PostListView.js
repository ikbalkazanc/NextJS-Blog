import React, { Component } from 'react';
import PostList from '../Components/PostList'

export default class PostListView extends Component {
    render() {
        return ( 
           <PostList posts={this.props.posts}/>
        );
    }
}