const fetch = require("node-fetch");

const getRepos = (repoName) => {
  return fetch(repoName)
    .then(data => data.json())
    .then(response =>{
      return response.map(rep => rep.name);
    });
};

module.exports = {
  getRepos
};
