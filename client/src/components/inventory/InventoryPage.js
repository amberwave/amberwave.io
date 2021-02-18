import React from 'react';
import InventoryList from './InventoryList';
import InventoryListFilters from './InventoryListFilters';

const InventoryPage = () => (
  <div>
    <h1>Inventory Page</h1>
    <InventoryListFilters />
    <InventoryList />
  </div>
);

export default InventoryPage;
