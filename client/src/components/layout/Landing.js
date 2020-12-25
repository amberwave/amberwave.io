import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AmberWaveMark from '../common/amber-wave-mark.svg';
import AmberWaveText from '../common/amber-wave-text-white.svg';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                {/* <h1 className="display-3 mb-4">Amber Wave</h1> */}
                <div className="d-inline-flex align-items-center">
                  <img
                    src={AmberWaveMark}
                    alt="Amber Wave Mark"
                    style={{ height: 97, display: 'block' }}
                  />
                  <img
                    src={AmberWaveText}
                    alt="Amber Wave Text"
                    style={{
                      height: 64,
                      width: 'auto',
                      display: 'block',
                      backgroundColor: 'black',
                      marginLeft: '16px',
                      fill: 'black',
                    }}
                  />
                </div>
                <p className="lead">
                  A data collecting network built for people
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light mr-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
