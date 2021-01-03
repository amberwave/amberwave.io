import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createNetwork } from '../../actions/networkActions';

class CreateNetwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      name: '',
      type: '',
      coordinates: '',
      status: '',
      topic: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.errors !== prevProps.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      name: this.state.name,
      type: this.state.type,
      coordinates: this.state.coordinates,
      status: this.state.status,
      topic: this.state.topic,
    };

    this.props.createNetwork(networkData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // Select options for status
    const typeSelect = [
      { label: '*Select Node Type', value: 0 },
      { label: 'Lite', value: 'lite' },
      { label: 'MidSpeed', value: 'midspeed' },
      { label: 'Heavy', value: 'heavy' },
      { label: 'EPA', value: 'epa' },
    ];

    // Select options for status
    const statusSelect = [
      { label: '*Select Node Status', value: 0 },
      { label: 'Running', value: 'running' },
      { label: 'Suspended', value: 'suspended' },
      { label: 'Restarting', value: 'restarting' },
      { label: 'OFF', value: 'EPA' },
    ];

    return (
      <div className="create-network">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Network</h1>
              <p className="lead text-center">
                Let's get your network started by adding your first node
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  label="Network Handle"
                  labelFor="networkHandle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique URL handle for your network"
                />
                <SelectListGroup
                  label="Node Type"
                  labelFor="nodeType"
                  name="type"
                  value={this.state.type}
                  onChange={this.onChange}
                  options={typeSelect}
                  error={errors.type}
                  info="Select the type of node you'd like to setup"
                />
                <TextFieldGroup
                  label="Node Name"
                  labelFor="nodeName"
                  placeholder="Blue Burger"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="Give your node a nickname"
                />
                // TODO Add form component for latitude,longitude data
                <TextFieldGroup
                  label="Coordinates"
                  labelFor="coordinates"
                  placeholder="-124.23,93.12"
                  name="coordinates"
                  value={this.state.coordinates}
                  onChange={this.onChange}
                  error={errors.coordinates}
                />
                <TextFieldGroup
                  label="Topic"
                  labelFor="topic"
                  placeholder="/foo/bar"
                  name="topic"
                  value={this.state.topic}
                  onChange={this.onChange}
                  error={errors.topic}
                />
                <TextFieldGroup
                  label="Status"
                  labelFor="status"
                  name="status"
                  options={statusSelect}
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors.longitude}
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateNetwork.propTypes = {
  network: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  network: state.network,
  errors: state.errors,
});

export default connect(mapStateToProps, { createNetwork })(
  withRouter(CreateNetwork)
);
