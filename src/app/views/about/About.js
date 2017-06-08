// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  Card,
  CardActions,
  CardTitle,
  CardText
}                         from 'material-ui/Card';
import FlatButton         from 'material-ui/FlatButton';
import AnimatedView       from '../../components/animatedViews/AnimatedViews';

class About extends PureComponent {
  static propTypes = {
    // react-router 4:
    match:        PropTypes.object.isRequired,
    location:     PropTypes.object.isRequired,
    history:      PropTypes.object.isRequired,
    // views store:
    currentView:  PropTypes.string.isRequired,
    enterAbout:   PropTypes.func.isRequired,
    leaveAbout:   PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterAbout } = this.props;
    enterAbout();
  }

  componentWillUnmount() {
    const { leaveAbout } = this.props;
    leaveAbout(); 
  }

  render() {
    return(
      <AnimatedView>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="box">
              <Card>
                <CardTitle
                  title="About"
                  subtitle="View"
                />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton
                    label="go Home"
                    onTouchTap={this.routeToHome}
                  />
                  <FlatButton
                    label="go previous"
                    onTouchTap={this.goPreviousRoute}
                  />
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedView>
    );
  }

  routeToHome = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push({pathname: '/'});
  }

  goPreviousRoute = () => {
    const { history } = this.props;
    history.goBack();
  }
}

export default About;
