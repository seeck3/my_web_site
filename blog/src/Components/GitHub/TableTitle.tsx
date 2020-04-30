import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  Paper,
  IconButton,
  lighten,
  Toolbar,
  Typography,
  Tooltip,
} from '@material-ui/core';
import {
  LastPage,
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Delete,
  FilterList,
} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },

    title: {
      flex: '1 1 100%',
    },
  })
);
const TableTitle = () => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      <Typography
        className={classes.title}
        variant='h5'
        id='tableTitle'
        component='div'
      >
        My GitHub
      </Typography>
    </Toolbar>
  );
};

TableTitle.propTypes = {};

export default TableTitle;
