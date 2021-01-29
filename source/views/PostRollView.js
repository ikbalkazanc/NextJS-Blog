import React, { Component } from 'react';
import PostRoll from '../Components/PostRoll'

export default class PostRollView extends Component {
    render() {
        return ( 
           <PostRoll posts={this.props.posts}/>
        );
    }
}