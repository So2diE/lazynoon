import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {Grid, ListItem, Typography} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
    root: {
        border: `1px solid ${theme.palette.input.border}`,
backgroundColor:'white',
    },
    label:{
        fontWeight:'bold',
        textTransform:'upperCase',
    },
    title: {
        fontWeight: 'lighter',
    },
    btnText: {},
    icon: {
        marginRight: '5px',
        marginLeft: '5px',

    }

});

class WhiteDropDown extends React.Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,

        });
    };
    handleClickListItem = event => {
        this.setState({anchorEl: event.currentTarget});
    };
    handleMenuItemClick = (index, cb) => {
        this.setState({selectedIndex: index, anchorEl: null});
        cb()
    };
    handleClose = () => {
        this.setState({anchorEl: null});
    };

    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            selectedIndex: 0,
        }
    }

    render() {
        const {
            classes, icon, value,
            icon2, label,
            labelExtra, options,
            selectedValue
        } = this.props;
        const {anchorEl} = this.state;


        return (
            <Fragment>
                <ListItem button
                          className={classes.root}
                          onClick={this.handleClickListItem}
                >
                    <Grid container alignItems={'center'} justify={'center'}>
                        {icon && <span className={classes.icon + ' ' + icon}/>}
                        <Typography variant={'body2'} className={classes.label}>
                            {label}{labelExtra}
                        </Typography>
                        <Typography variant={'body2'}>
                            {selectedValue ? selectedValue : options[this.state.selectedIndex].label}
                        </Typography>
                        {icon2 && <span className={classes.icon + ' ' + icon2}/>}
                    </Grid>
                </ListItem>

                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {options.map((n, i) => (
                        <MenuItem
                            key={i}
                            selected={i === this.state.selectedIndex}
                            onClick={() => this.handleMenuItemClick(i, n.onClick)}
                        >
                            <Typography variant={'body2'}>
                                {n.label}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Fragment>
        )
    }
}

WhiteDropDown.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhiteDropDown);