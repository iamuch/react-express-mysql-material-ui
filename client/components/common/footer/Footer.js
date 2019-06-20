import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    legal: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #eee',
        padding: '15px',
        overflow: 'hidden',
        textAlign: 'center'
    }
});
class Footer extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.legal}>
                <div className="copyright">
                    © 2018 - 2019 <a href="javascript:void(0);">Sprobe</a>.
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer)