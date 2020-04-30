import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Typography, Box } from '@material-ui/core';
import imgs from '../../asset/icons/index';
import {} from '@material-ui/icons';
const useStyles = makeStyles({
  imgBox: {
    width: 50,
    height: 50,
    margin: 5,
  },
});
console.log('imgs', imgs);

const ResumeMarco = () => {
  const classes = useStyles();
  const icons = Object.values(imgs);
  return (
    <div>
      <Box m={1}>
        <Typography>Technical Skills</Typography>
        {icons.map((i) => (
          <img className={classes.imgBox} src={i} />
        ))}
      </Box>
    </div>
  );
};

ResumeMarco.propTypes = {};

export default ResumeMarco;
