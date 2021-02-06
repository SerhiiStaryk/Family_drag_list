import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.svg';
import './style.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Container className="container">
                    <Grid container spacing={3}>
                        <Grid className="black-border" item xs={4}>
                            <a href="!#">
                                <img src={logo} alt="header-logo"></img>
                            </a>
                        </Grid>
                        <Grid className="black-border" item xs={4}></Grid>
                        <Grid className="black-border" item xs={4}>
                            <div className="button-wrapper">
                                <Button variant="contained" className="btn">Add</Button>
                                <Button variant="contained" color="primary" className="btn">LogOut</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </header>
        )
    }
}

export default Header