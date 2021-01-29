import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default class PostList extends React.Component {
    render() {
        return (
            <Card >
                <Alert severity="info">Son Paylaşılanalar</Alert>
                <List className={useStyles.root} >
                    {
                        this.props.posts.map((element, key) => {
                            return (
                                <ListItem key={key}>
                                    <ListItemText

                                        primary={element.title}
                                        secondary={element.description.substring(0, 50) + "..."}
                                    />
                                </ListItem>
                            )
                        })}
                </List>
            </Card>
        )
    }
}