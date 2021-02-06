import React, { Component } from 'react';
import DragCard from '../DragCard';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import './style.css';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <section className="drags">
                    <DragCard />
                    <DragCard />
                    <DragCard />
                    <DragCard />
                    <DragCard />
                    <DragCard />
                    <DragCard />
                    <DragCard />
                </section>
                <div className="align-button">
                    <Button className="btn-more" endIcon={<ArrowDownwardIcon />}>More</Button>
                </div>
            </main>
        )
    }
}

export default Main;