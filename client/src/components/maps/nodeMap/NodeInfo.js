import React, { PureComponent } from 'react';

export default class NodeInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const { name, type, status, topic } = info;
    return (
      <div className="card">
        <div className="card-header">{type}</div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <span className="fw-bold">Topic: </span>
            {topic}
            <br></br>
            <span className="fw-bold">Status: </span>
            {status}
          </p>
        </div>
      </div>
    );
  }
}
