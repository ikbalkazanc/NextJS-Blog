import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core';

export default class NavBar extends React.Component {

  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container>
              <Button color="inherit">Menu</Button>
              <Button color="inherit">Profil</Button>
              <Button color="inherit">Postlar</Button>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    )
  }
}