import Rx from 'rx';
import Boom from 'boom';
import db from '../../db';

export default (request, reply) => {
  const put = Rx.Observable.fromCallback(db.put.bind(db));

  put((new Date()).getTime(), {
    o: 'update',
    p: {
      ['test-' + Math.ceil(Math.random() * 5)]: Math.ceil(Math.random() * 10)
    }
  }).subscribe((err) => {
    if (!err) {
      reply({ 'status': 'all good' });
    } else {
      reply(Boom.wrap(err));
    }
  });
}
