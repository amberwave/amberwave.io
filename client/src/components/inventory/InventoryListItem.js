import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, name, type, location, status }) => (
  <tr>
    <td>{name}</td>
    <td>{id}</td>
    <td>{type}</td>
    <td>
      ({location.latitude}, {location.longitude})
    </td>
    <td>{status}</td>
  </tr>
);

export default ExpenseListItem;
