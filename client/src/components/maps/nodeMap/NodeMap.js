/* global window */
import React, { Component } from 'react';
import { render } from 'react-dom';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';

import NodePin from './NodePin';
import NodeInfo from './NodeInfo';

import NODES from './nodes.json';

const TOKEN = process.env.MAPBOX_ACCESS_TOKEN; // Set your mapbox token here

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};

class NodeMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
      },
      popupInfo: null,
    };
  }

  updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  renderNodeMarker = (node, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={node.longitude}
        latitude={node.latitude}
      >
        <NodePin size={20} onClick={() => this.setState({ popupInfo: node })} />
      </Marker>
    );
  };

  renderPopup() {
    const { popupInfo } = this.state;
    console.log(popupInfo);
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <NodeInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        width="100vw"
        height="80vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this.updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
        {NODES.map(this.renderNodeMarker)}

        {this.renderPopup()}

        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this.updateViewport} />
        </div>

        {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}
      </MapGL>
    );
  }
}

export default NodeMap;
