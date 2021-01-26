import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
const dotenv = require('dotenv');
dotenv.config({
  path: './.env.test',
});

Enzyme.configure({ adapter: new Adapter() });
