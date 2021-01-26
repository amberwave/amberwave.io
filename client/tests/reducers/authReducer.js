import authReducer from '../../src/reducers/authReducer';
import moment from 'moment';
import auth from '../fixtures/auth';

test('should set default values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});
