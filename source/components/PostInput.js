import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PostService from '../services/PostService'
import { OutlinedInput } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default class PostInput extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            context:"",
            temp:false
        };
    }
    
    sumbit = () =>{
        let post = {
            title : this.state.title,
            description : this.state.context
        }
        
        PostService.Add(post);
        this.setState({temp:false})
    }
    render() {
        return (
            <Card className={useStyles.root} style={{ backgroundColor: "#F7F7F7" }} variant="outlined">
                <CardContent >
                    <Typography variant="h5" className={useStyles.title} color="textSecondary" gutterBottom>
                        Yeni blog yaz!
                     </Typography>
                    <div>
                        <div>
                            <TextField
                                style={{ backgroundColor: "white" }}
                                label="Başlık"
                                type="text"
                                onChange={(event)=>{ this.setState({title:event.target.value}) }}
                                fullWidth
                                variant="filled"
                                />
                        </div>
                        <br></br>
                        <div>
                            <TextField
                                style={{ backgroundColor: "white" }}
                                label="İçerik"
                                multiline
                                rows={4}
                                fullWidth
                                placeholder="yaz... yaz... yaz..."
                                onChange={(event)=>{ this.setState({context:event.target.value}) }}
                                variant="filled"
                                 />
                        </div>
                    </div>
                    <CardActions >
                    <Button variant="outlined" onClick={()=>{this.sumbit()}} size="small">Gönder</Button>
                </CardActions>
                </CardContent>
                
            </Card>
        )
    }
}