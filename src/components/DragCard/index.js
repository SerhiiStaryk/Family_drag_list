import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import './style.css';
import Radium from 'radium';


class DrugCard extends Component {
    state = {
        box: true
    }

    style = {
        ':hover': {
            border: '1px solid green',
            cursor: 'pointer'
        }
    }
    render() {
        return (
            <Card className="drag-card" style={this.style}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Аквамаріс
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        2020-01-01
                     </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Count: 1 флакон
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Dose: 15мг
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Type: спрей
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        appointment: промивання носа
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Whom: Максим
                    </Typography>
                    <FormControlLabel
                        className='drag-card-checbox'
                        control={
                            <Checkbox
                                checked={this.state.box}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                            />
                        }
                        disabled
                        label="Box:"
                        labelPlacement="start"
                    />
                </CardContent>
                <CardActions className="align-button__right">
                    <IconButton size="small" color="secondary">
                        <ArrowUpwardIcon fontSize="inherit" />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

export default Radium(DrugCard);