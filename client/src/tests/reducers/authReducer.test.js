import authReducer from '../../../src/reducers/authReducer';
import moment from 'moment';
import auth from '../fixtures/auth';

test('should set default values', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    isAuthenticated: false,
    user: {},
  });
});