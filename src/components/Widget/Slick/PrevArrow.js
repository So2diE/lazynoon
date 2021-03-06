import React from "react";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const style = theme => ({
    root: {
        '&:hover': {
            '&:before': {
                background: 'rgba(255, 255, 255, 0.8)',
                color: '#484848'
            }
        },
        '&:before': {
            borderRadius: '4px',
            padding: '5px',
            fontSize: '40px',
            position: 'absolute',
            top: '50%',
            cursor: 'pointer',
            color: '#484848',
            background: 'rgba(255, 255, 255, 0.64)',
            zIndex: 2,
        }

    }
})

class PrevArrow extends React.Component {
    render() {

        const {classes, className, style, onClick} = this.props;
        return (
            <span

                className={classes.root + ' ' + 'icon-circle-left'}
                style={{...style}}
                onClick={onClick}

            />


        )

    }
}

PrevArrow.propsType= {

}
export default withStyles(style)(PrevArrow)