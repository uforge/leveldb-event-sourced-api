import levelup from 'level';

export default levelup('./events-database', {
  valueEncoding : 'json'
});
