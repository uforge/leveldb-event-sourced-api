import Hapi from 'hapi';
import vision from 'vision';
import inert from 'inert';
import lout from 'lout';
import good from 'good'
import routes from './routes';

const server = new Hapi.Server();

server.connection({ port : 3001 });

const goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

server.register(
  [
    vision,
    inert,
    {
      register: lout
    },
    {
      register: good,
      goodOptions
    }
  ],
  (err) => {
    if (err) {
      console.error('Registration error', err);
    }
  }
);

routes.forEach((route) => server.route(route));

export default server;
