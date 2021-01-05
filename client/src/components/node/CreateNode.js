import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createNode } from '../../actions/nodeActions';

class CreateNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
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

    const nodeData = {
      key: this.state.key,
      name: this.state.name,
      type: this.state.type,
      coordinates: this.state.coordinates,
      status: this.state.status,
      topic: this.state.topic,
    };

    this.props.createNode(nodeData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // Select options for status
    const typeSelect = [
      { label: 'Select Node Type', value: 0 },
      { label: 'Lite', value: 'lite' },
      { label: 'MidSpeed', value: 'midspeed' },
      { label: 'Heavy', value: 'heavy' },
      { label: 'EPA', value: 'epa' },
    ];

    // Select options for status
    const statusSelect = [
      { label: 'Select Node Status', value: 0 },
      { label: 'Running', value: 'running' },
      { label: 'Suspended', value: 'suspended' },
      { label: 'Restarting', value: 'restarting' },
      { label: 'OFF', value: 'EPA' },
    ];

    return (
      <div className="create-node">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center mt-5">Create a Node</h1>
              <p className="lead text-center">
                Fill out the form to setup your node
              </p>
              <form onSubmit={this.onSubmit}>
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
                <TextFieldGroup
                  label="Node Key"
                  labelFor="=key"
                  name="key"
                  value={this.state.key}
                  onChange={this.onChange}
                  error={errors.key}
                  info="A unique key to connect to your device"
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
                {/* TODO Add form component for latitude,longitude data */}
                <TextFieldGroup
                  label="Coordinates"
                  labelFor="coordinates"
                  placeholder="93.12,-124.23"
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
                <SelectListGroup
                  label="Node Status"
                  labelFor="nodeStatus"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={statusSelect}
                  error={errors.status}
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

AddNode.propTypes = {
  node: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  node: state.node,
  errors: state.errors,
});

export default connect(mapStateToProps, { createNode })(withRouter(CreateNode));
