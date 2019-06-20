import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

// Import custom components
import Header from '../header/Header';
import MiniDrawer from '../drawer/MiniDrawer';
import Footer from '../footer/Footer';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        position: 'relative',
        flexGrow: 1,
        height: '100%',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
    container: {
        padding: '24px'
    }
});

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <Header/>
                    <main className={classes.content}>
                        <div className={classes.container}>
                            {this.props.children}
                        </div>
                        <Footer/>
                    </main>
                </div>
            </div>
        );
    }

}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.element
};

export default withStyles(styles)(MainLayout);