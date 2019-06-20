import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginBottom: '12px',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

const tileData = [
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
    {
        img: null,
        title: 'Image',
        author: 'author'
    },
];

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const ProductSingleLineGridList = props => {
    const { classes } = props;

    return (
        <Paper square={true}>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton>
                                        <StarBorderIcon className={classes.title} />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Paper>
    );
}

ProductSingleLineGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSingleLineGridList);