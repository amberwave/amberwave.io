// ADD_EXPENSE Action Generator
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

// REMOVE_EXPENSE Action Generator
export const removeNode = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// EDIT_EXPENSE Generator
export const editNode = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
