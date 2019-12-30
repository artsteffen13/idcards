import React from 'react';
import '../Styles/form.css'
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

const CssTextField = withStyles({

    root: {
        '& label.Mui-focused': {
            color: '#000000',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FF590D',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#FFCF0D',
            },
            '&:hover fieldset': {
                borderColor: '#FF590D',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FF9A00',
            },
        },
    },
})(TextField);

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #FFCF0D',
        fontSize: 16,
        padding: '15px 26px 15px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#FFCF0D',
            boxShadow: '0 0 0 0.2rem #ffcf0d',
        },
    },
}))(InputBase);

const Form = (props) => {

    const handleChange = event => {
       const {name, value} = event.target;
        props.fetchItems(name, value);
    };


    const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                display: 'inline-flex',
                flexWrap: 'wrap',
                margin: theme.spacing(1),
                width: 200
            },
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    return (
        <div className="form">
        <form className={classes.root} noValidate autoComplete="off">
            <CssTextField
                className={classes.margin}
                label="Name"
                variant="outlined"
                name="name"
                value={props.values.name}
                onChange={handleChange}
            />
            <CssTextField
                className={classes.margin}
                label="Position"
                variant="outlined"
                multiline
                name="position"
                value={props.values.position}
                onChange={handleChange}
            />
            <CssTextField
                className={classes.margin}
                label="Picture URL"
                variant="outlined"
                name="pic"
                value={props.values.pic}
                onChange={handleChange}
            />
        </form>
            <FormControl className={classes.formControl}>
                <InputLabel id="colorSelect">Color</InputLabel>
                <Select
                    labelId="colorSelect"
                    value={props.values.color}
                    name="color"
                    onChange={handleChange}
                    input={<BootstrapInput/>}
                >
                    <MenuItem value={'red'}>Red</MenuItem>
                    <MenuItem value={'blue'}>Blue</MenuItem>
                    <MenuItem value={'yellow'}>Yellow</MenuItem>
                    <MenuItem value={'green'}>Green</MenuItem>
                    <MenuItem value={'orange'}>Orange</MenuItem>
                    <MenuItem value={'purple'}>Purple</MenuItem>
                </Select>
            </FormControl>
            <hr />
        </div>
    );
};

export default Form