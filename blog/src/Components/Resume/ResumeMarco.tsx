import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  Typography,
  Divider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import imgs from '../../asset/icons/index';
import resume from './resumeData';
import WorkExperience from './WorkExperience';
import Education from './Education';
import GitHub from '../GitHub/GitHub';
import TableBodyContainer from '../GitHub/TableBodyContainer';
const useStyles = makeStyles({
  boxContainer: {},
  imgBox: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: '50%',
  },
  heading: {
    fontSize: 18,
  },
});
console.log('imgs', imgs);

const ResumeMarco = () => {
  const classes = useStyles();
  const icons = Object.values(imgs);
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Summary</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>{resume.summary}</ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Technical Skills</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          {icons.map((i) => (
            <img className={classes.imgBox} src={i} />
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Personal Project</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          <TableBodyContainer />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Experience</Typography>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          <WorkExperience experiences={resume.work_experience} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>Education</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Education educations={resume.education} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

ResumeMarco.propTypes = {};

export default ResumeMarco;
