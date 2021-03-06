import React from 'react';
import {Button, Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        textTransform: 'capitalize',
        fontSize: '12px',
        padding: '13px',
        width:'100%',
        borderRadius: 0,
        background: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`,
        color: 'white',
        '&:hover': {
            color: theme.palette.primary.main,
            background: 'white',

        }
    },
});

class CustomButton extends React.Component {
    state = {
        anchor: 'left',
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };

    constructor(props) {
        super(props)
        this.state = {
            placeHolder: '',
        }
    }

    render() {

        const {classes, link, onClick, value, icon2, icon, border} = this.props

        return <Button
            className={classes.root}
            variant={'outlined'}
            onClick={onClick}

        >
            <Typography color={'inherit'} className={icon}/>

            <Typography variant={'body1'} color={'inherit'}>{value}</Typography>

            <Typography color={'inherit'} className={icon2}/>
        </Button>


    }
}


CustomButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomButton);