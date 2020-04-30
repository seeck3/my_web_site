import React from 'react';
import PropTypes from 'prop-types';

import { Button, Menu, MenuItem, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});
const ResumeLink = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.container}>
      <Button
        variant='outlined'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Download Resume
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href='../../asset/resumes/Marco-Resume-09-IT.pdf' download>
            Download as PDF
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='../../asset/resumes/Marco-Resume-09-IT.docx' download>
            Download as DOC
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

ResumeLink.propTypes = {};

export default ResumeLink;
