const { fetcher } = require("./fetcher");

const getReposWithFetcher = (repoName) => {
  return fetcher(repoName)
    .then(res => {
      return res.map(rep => {
        return rep.name;
      });
    })
    
};

module.exports = {
  getReposWithFetcher
};
