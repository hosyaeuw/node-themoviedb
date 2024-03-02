import got from 'got';

const request = got.extend({
  prefixUrl: 'https://data.dbmovies.org',
  headers: { 'user-agent': 'node-moviedb/0.2.5' },
});

export default request;
