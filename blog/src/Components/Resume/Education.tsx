import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { ExpandMore, FiberManualRecord } from '@material-ui/icons';

import { Educations } from '../type';

type Props = {
  educations: Educations[];
};

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const Education = ({ educations }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {educations.map((edu) => (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <div className={classes.title}>
              <Typography>{edu.school.name} </Typography>
              <Typography>
                {(edu.school.startAt ? edu.school.startAt + ' ~ ' : '') +
                  (edu.school.endAt ? edu.school.endAt : '')}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails>
            <Typography>{edu.school.description}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

Education.propTypes = {};

export default Education;
