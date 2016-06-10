import RxNode from 'rx-node';
import Boom from 'boom';
import db from '../../db';

export default (request, reply) => {
  const get = RxNode.fromReadableStream(db.createReadStream());

  let res = [];
  get.subscribe(
    ({key, value}) => {
      res = [
        ...res,
        [
          key,
          value
        ]
      ]
    },
    (err) => reply(Boom.wrap(err)),
    () => {
      reply(res);
    }
  );
}
