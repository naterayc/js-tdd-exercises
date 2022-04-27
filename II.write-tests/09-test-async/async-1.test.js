const { getRepos } = require("./async-1");

describe('given the getRepos function', () => {
  it('gets a list if repositoties names', () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    // act
    return getRepos(url).then(result => {
      // assert
      expect(result).not.toContain("js-exercises");
      expect(result).toContain("dom-ajax-repo");
    });
  });
});
