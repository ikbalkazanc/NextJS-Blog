import Container from '@material-ui/core/Container';
import Nav from '../../Source/Components/NavBar'
import SlideShow from '../../Source/Components/Slider'
import Grid from '@material-ui/core/Grid';
import PostService from '../../Source/Services/PostService'
import React, { useEffect } from 'react';
import PostList from '../../Source/Components/PostList'
import PostRoll from '../../Source/Components/PostRoll'
import Footer from '../../Source/Components/Footer'

import FooterView from '../Views/FooterView'
import NavigationBarView from '../Views/NavigationBarView'
import SliderView from '../Views/SliderView'
import PostListView from '../Views/PostListView'
import PostRollView from '../Views/PostRollView'
import PostInputView from '../Views/PostInputView'
import ChartView from '../Views/ChartView'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        };
    }
    componentDidMount() {
        this.getBlogPost();
    }

    getBlogPost = async () => {
        var fetchedPosts = await PostService.GetAll();
        this.setState({
            blogPosts: fetchedPosts
        });
    }
    render() {
        return (
            <div style={{backgroundColor:"#e8eaf6"}}>
                <NavigationBarView />
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <SliderView ></SliderView>
                        </Grid>
                        <Grid item container spacing={3} >
                            <Grid item xs={4} md={4} >
                                <PostListView posts={this.state.blogPosts} ></PostListView>
                                <br></br>
                                <ChartView></ChartView>
                            </Grid>
                            <Grid item xs={8} md={8}>
                                <PostInputView></PostInputView>
                                <br></br>
                                <PostRollView posts={this.state.blogPosts}></PostRollView>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <FooterView />
            </div>
        )
    }
}