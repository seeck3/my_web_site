import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ResumeLink from './ResumeLink';
import ResumeMarco from './ResumeMarco';

const Resume = () => {
  return (
    <Fragment>
      <ResumeLink />
      <ResumeMarco />
    </Fragment>
  );
};

Resume.propTypes = {};

export default Resume;
