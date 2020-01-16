import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

const TravleRouteBlock = styled.div`
  margin: 1rem;
  width: '100%';
`;

const StyledDay = styled.span`
  font-weight: bold;
`;

const TravelRoute = ({ routes }) => {
  return (
    <TravleRouteBlock>
      {routes.map(({ id, imageId, toFrom, description, transport }) => (
        <ExpansionPanel key={id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              ({transport}) <StyledDay>{id}일차</StyledDay> {toFrom}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography varient="body1">{description}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </TravleRouteBlock>
  );
};

export default TravelRoute;
