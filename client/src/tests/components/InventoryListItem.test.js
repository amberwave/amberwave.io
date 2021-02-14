import InventoryListItem from '../../components/inventory/InventoryListItem';
import React from 'react';
import nodes from '../fixtures/nodes';
import { shallow } from 'enzyme';

test('should render InventoryListItem with node data', () => {
  const wrapper = shallow(
    <InventoryListItem key={nodes[0]._id} {...nodes[0]} />
  );
  expect(wrapper).toMatchSnapshot();
});
