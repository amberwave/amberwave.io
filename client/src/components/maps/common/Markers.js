import * as React from 'react';
import { PureComponent } from 'react';
import { Marker } from 'react-map-gl';
import Pins from './Pins';

// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent {
  render() {
    const { data } = this.props;
    return data.map((city) => (
      <Marker
        key={city.name}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <Pins />
      </Marker>
    ));
  }
}

export default Markers;
