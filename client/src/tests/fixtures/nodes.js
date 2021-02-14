import moment from 'moment';

export default [
  {
    _id: 1,
    user: 1,
    key: 'key_number_1',
    name: 'superpatriotismsProoemion',
    model: 'EPA',
    location: {
      longitude: 127.12,
      latitude: 90,
      radius: 10,
    },
    status: 'suspended',
    history: {
      dateCreated: moment(0),
      dateDestroyed: undefined,
      lastConnection: moment(0).add(6, 'days'),
      upTime: moment(0).add(6, 'days') - moment(0),
      downTime: moment(0).add(3, 'days') - moment(0),
    },
    connection: {
      exchange: 'superpatriotismsProoemion',
      queue: 'ambient-light',
    },
  },
  {
    _id: 2,
    user: 2,
    key: 'key_number_2',
    name: 'pickelhaubePericynthions',
    model: 'EPA',
    location: {
      longitude: 127.12,
      latitude: 90,
      radius: 10,
    },
    status: 'running',
    history: {
      dateCreated: moment(0),
      dateDestroyed: undefined,
      lastConnection: moment(0).add(20, 'days'),
      upTime: moment(0).add(25, 'days') - moment(0),
      downTime: 0,
    },
    connection: {
      exchange: 'pickelhaubePericynthions',
      queue: 'water_spout',
    },
  },
];
