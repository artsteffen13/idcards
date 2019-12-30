import React from 'react';
import '../Styles/card.css'
import Button from '@material-ui/core/Button';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';


const Card = (props) => {

    const ColorButton = withStyles(theme => ({
        root: {
            color: 'black',
            marginBottom: '20px',
            backgroundColor: '#FFCF0D',
            '&:hover': {
                backgroundColor: '#FF590D',
            },
        },
    }))(Button);

    const useStyles = makeStyles(theme => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    return (
        <div className='flex'>
            <div>
                <div className="card">
                    <div className="card-top" style={{background: props.color}}>
                        <PermContactCalendarIcon className="logo" style={{fontSize: 70, color: 'white'}}/>
                        <p>{props.name}</p>
                        <div className="float-bottom">
                            <img src={props.pic} alt="selfie"/>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <h3>{props.position}</h3>
                    </div>
                </div>
                <ColorButton
                    variant="contained"
                    color="primary"
                    className={classes.margin}>
                    Create
                </ColorButton>
            </div>
        </div>

    )
};

export default Card