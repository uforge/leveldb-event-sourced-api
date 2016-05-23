import Hapi from 'hapi';
import vision from 'vision';
import inert from 'inert';
import lout from 'lout';
import routes from './routes';

const server = new Hapi.Server();

server.connection({ port : 3001 })

server.register(
  [
    vision,
    inert,
    {
      register: lout
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
