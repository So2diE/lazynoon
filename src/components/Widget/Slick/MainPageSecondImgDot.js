import React from "react";
import {withStyles} from '@material-ui/core/styles';

const style = theme => ({
    root: {
        '&:hover': {
            '&:before': {
                background: 'rgba(255, 255, 255, 0.8)',
                color: '#484848',

            }
        },
        '&:before': {
            borderRadius: '4px',
            padding: '5px',
            fontSize: '40px',
            position: 'absolute',
            cursor: 'pointer',
            right: '0px',
            color: '#484848',
            bottom: '0',
            background: 'rgba(255, 255, 255, 0.64)'
        }

    }
})

class NextArrow extends React.Component {
    render() {

        const {classes, className, style, onClick} = this.props;
        return (
            <span
                className={classes.root + ' ' + 'icon-circle-right'}
                style={{...style,}}
                onClick={onClick}

            />


        )

    }
}

export default withStyles(style)(NextArrow)