import * as React from 'react';
import { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import Pin from './Pin';

const TOKEN = process.env.MAPBOX_ACCESS_TOKEN; // Set your mapbox token here

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
        bearing: 0,
        pitch: 0,
      },
    };
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        width="100vw"
        height="80vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={TOKEN}
      >
        <Pin />
      </ReactMapGL>
    );
  }
}

export default SimpleMap;
