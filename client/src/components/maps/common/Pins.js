import * as React from 'react';
import { PureComponent } from 'react';
import { Marker } from 'react-map-gl';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export default class Pins extends PureComponent {
  render() {
    const { data } = this.props;

    return data.map(
      (city, index) => (
        console.log(city.latitude),
        (
          <Marker
            key={`marker-${index}`}
            longitude={city.longitude}
            latitude={city.latitude}
          >
            <svg
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
            </svg>
            <div style={{ color: 'Black' }}>You are here</div>
          </Marker>
        )
      )
    );
  }
}
