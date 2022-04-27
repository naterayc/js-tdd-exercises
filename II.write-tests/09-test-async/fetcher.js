const fetch = require("node-fetch");

const fetcher = (repoName) => {
  return fetch(repoName)
    .then(data => data.json())
    .catch(error => error)
};

module.exports = { fetcher };
