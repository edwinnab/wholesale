/* jshint esversion: 6 */

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '90%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));