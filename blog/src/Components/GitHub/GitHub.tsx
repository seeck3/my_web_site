import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  makeStyles,
  Theme,
  withStyles,
  createStyles,
  TableCell,
} from '@material-ui/core';
import request from 'request';
import github from '../../config/default.json';
import { GitHubProps } from '../type';
// Components
import TableTitle from './TableTitle';
import TableBodyContainer from './TableBodyContainer';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const GitHub = () => {
  return (
    <React.Fragment>
      <TableTitle />
      <TableBodyContainer />
    </React.Fragment>
  );
};

GitHub.propTypes = {};

export default GitHub;
