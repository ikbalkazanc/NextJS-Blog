import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PostService from '../../source/services/PostService'
import React, { useEffect } from 'react';
import FooterView from '../views/FooterView'
import NavigationBarView from '../views/NavigationBarView'
import SliderView from '../views/SliderView'
import PostListView from '../views/PostListView'
import PostRollView from '../views/PostRollView'
import PostInputView from '../views/PostInputView'
import ChartView from '../views/ChartView'

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