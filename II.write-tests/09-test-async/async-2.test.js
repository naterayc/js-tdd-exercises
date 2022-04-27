const { getReposWithFetcher } = require("./async-2");
const { fetcher } = require("./fetcher");
jest.mock("./fetcher");

describe('given the getReposWithFetcher and the fetcher functions', () => {
  const url = "https://api.github.com/users/kabaros/repos";
  it('gets a list of repositories names (with mock)', () => {
    // arrange
    fetcher.mockResolvedValue([{ name: "js-exercises" }]);
    // act
    return getReposWithFetcher(url).then(result => {
      // assert
      expect(result).toContain("js-exercises");
    });
  });

  it('gets a list of repositories names (with mock repos)', () => {
    //arrange
    const repos = [
      { name: "js-exercises" },
      { name: "otro repo" },
      { name: "otro repo más" }
    ]
    const expected = [
      "js-exercises",
      "otro repo",
      "otro repo más"
    ]
    fetcher.mockResolvedValue(repos);

    //act
    return getReposWithFetcher(url).then(result => {
      //assert
      expect(result).toEqual(expected);
    });
  });

  it('if the promise is rejected with 403', () => {
    // arrange
    fetcher.mockRejectedValue({ status: 403 });
    //act and assert
    return getReposWithFetcher(url).catch(result =>  {
      console.log(result);
      expect(result).toEqual({ status: 403 });
    });
  });
});
