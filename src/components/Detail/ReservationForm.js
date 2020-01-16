import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ReservationFormBlock = styled.div`
  padding: 1rem;
`;

const ReservationForm = () => {
  return (
    <ReservationFormBlock>
      <form>
        <h3>예약폼</h3>
        <Button color="primary" variant="contained">
          예약버튼
        </Button>
      </form>
    </ReservationFormBlock>
  );
};

export default ReservationForm;
