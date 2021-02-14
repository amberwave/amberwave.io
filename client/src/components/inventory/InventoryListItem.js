import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const InventoryListItem = ({
  _id,
  name,
  model,
  location,
  history,
  connection,
  status,
}) => (
  <tr>
    <td>{name}</td>
    <td>{model}</td>
    <td>{_id}</td>
    <td>
      ({location.latitude}, {location.longitude}, {location.radius})
    </td>
    <td>{history.lastConnection}</td>
    <td>
      {connection.exchange}/{connection.queue}
    </td>
    <td>{status}</td>
  </tr>
);

export default InventoryListItem;
