const fetch = require("node-fetch");

const getRepos = function(repoName) {
  return fetch(repoName)
    .then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
       // console.log(rep.name)
        return rep.name;
      });
    });
};

module.exports = getRepos;
