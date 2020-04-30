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

// Typedefs
import { WorkExperiences } from '../type';

type Props = {
  experiences: WorkExperiences[];
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

const WorkExperience = ({ experiences }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {experiences.map((work) => (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <div className={classes.title}>
              <Typography>{work.company.name} </Typography>
              <Typography>
                {work.company.startAt + ' ~ ' + work.company.endAt}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails>
            <List>
              {work.company.experience.map((exp) => (
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecord />
                  </ListItemIcon>
                  <ListItemText>{exp}</ListItemText>
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

WorkExperience.propTypes = {};

export default WorkExperience;
