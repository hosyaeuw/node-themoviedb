import got from "got";

const request = got.extend({
  prefixUrl: "https://data.dbmovies.org",
});

export default request;
