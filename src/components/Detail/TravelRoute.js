import React from 'react';

const TravelRoute = ({ routes }) => {
  return (
    <div>
      {routes.map(({ id, imageId, toFrom, description, transport }) => (
        <div>
          <h5>{id} 일차</h5>
          {/* <img src={imageId} alt="" srcset=""/> */}
          <h5>{toFrom}</h5>
          <h5>{transport}</h5>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default TravelRoute;
