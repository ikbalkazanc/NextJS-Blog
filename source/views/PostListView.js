import React, { Component } from 'react';
import PostList from '../components/PostList'

export default class PostListView extends Component {
    render() {
        return ( 
           <PostList posts={this.props.posts}/>
        );
    }
}