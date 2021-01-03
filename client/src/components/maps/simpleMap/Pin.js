import React, { Component } from 'react';
import { Marker } from 'react-map-gl';
import CityPin from './CityPin';

const SIZE = 20;

class Pin extends Component {
  render() {
    return (
      <Marker
        latitude={37.78}
        longitude={-122.41}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <CityPin />
      </Marker>
    );
  }
}

export default Pin;

{
  /* <svg
          height={SIZE}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="map-marker-alt"
          className="svg-inline--fa fa-map-marker-alt fa-w-12"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          style={{
            cursor: 'pointer',
            fill: '#d00',
            stroke: 'none',
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
          }}
        >
          <path
            fill="#d00"
            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
          ></path>
        </svg> */
}
