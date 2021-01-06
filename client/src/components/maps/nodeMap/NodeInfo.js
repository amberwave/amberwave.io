import React, { PureComponent } from 'react';

export default class NodeInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const { name, type, status, topic } = info;

    switch (status) {
      case 'running':
        displayStatus = (
          <div class="alert alert-primary" role="alert">
            Node {name} is {status}.
          </div>
        );
      case 'suspended':
        displayStatus = (
          <div class="alert alert-secondary" role="alert">
            Node {name} is {status}.
          </div>
        );
      case 'restarting':
        displayStatus = (
          <div class="alert alert-warning" role="alert">
            Node {name} is {status}.
          </div>
        );
      case 'shutdown':
        displayStatus = (
          <div class="alert alert-danger" role="alert">
            Node {name} is {status}.
          </div>
        );
    }
    return (
      <div className="card">
        <div className="card-header">{type}</div>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Node communicating at topic: {topic}</p>
          {displayStatus}
        </div>
      </div>
    );
  }
}
