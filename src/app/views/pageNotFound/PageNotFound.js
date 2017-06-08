// @flow weak

import React, {
  PureComponent
}                     from 'react';
// import PropTypes      from 'prop-types';
import AnimatedView   from '../../components/animatedViews/AnimatedViews';


class PageNotFound extends PureComponent {
  render() {
    return(
      <AnimatedView>
        <div className="row">
          <div className="col-md-12">
            <h2>
              <i
                className="fa fa-frown-o"
                ariaHidden="true"
              />
              &nbsp;
              Sorry... This page does not exist
            </h2>
          </div>
        </div>
      </AnimatedView>
    );
  }
}

export default PageNotFound;
