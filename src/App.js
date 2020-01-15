import React from 'react';
import { Route } from 'react-router-dom';
import AdPage from './page/AdPage';
import DetailPage from './page/DetailPage';

const App = () => {
  return (
    <div>
      <Route path="/" component={AdPage} exact />
      <Route path="/detail/" component={DetailPage} />
    </div>
  );
};

export default App;
