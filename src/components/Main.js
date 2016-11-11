require('styles/vendor/bootstrap.css');
require("font-awesome-webpack");
require('styles/App.scss');

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import AppHeader from './AppHeader'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <AppHeader />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

AppHeader.displayName = 'AppHeader';

// Uncomment properties you need
// AppHeaderComponent.propTypes = {};
// AppHeaderComponent.defaultProps = {};

export default AppComponent;
