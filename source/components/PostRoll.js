import Card from '@material-ui/core/Card';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PostService from '../../source/services/PostService'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const  deletePost = async (id) => {
  await PostService.Delete(id);
}

const oneCard = (post, uniqueKey) => {
  return (

    <ListItem key={uniqueKey} style={{ padding: 0, marginBottom: '2rem' }}>
      <Card style={{ backgroundColor: "#F7F7F7" }} className={useStyles.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"

            height="200"
            image="https://storage.googleapis.com/stateless-whwwp-screenbeetle-c/2019/10/96ca8698-alicia-letterbox.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.description.substring(0.200) + "..."}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              {post.date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
    </Button>
          <Button onClick={() => {deletePost(post.id)}} size="small" color="secondary">
            Delete
        </Button>
        </CardActions>
      </Card>
    </ListItem>

  )
}
const ifEmpty = () => {
  return (
    <Typography gutterBottom variant="h2" component="h2">
      Paylaşımlar yükleniyor...
    </Typography>
  )
}


export default class PostRoll extends React.Component {
  render() {
    if (this.props.posts.length === 0) {
      return (
        ifEmpty()
      )
    }
    else {
      return (
        <List style={{ padding: 0 }} >
          {
            this.props.posts.map((element, key) => {
              return (
                oneCard(element, key)
              )
            })
          }
        </List>
      )
    }
  }
}
