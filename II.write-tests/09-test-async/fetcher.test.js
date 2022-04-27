const { fetcher } = require('./fetcher');
const fetch = require("node-fetch");
jest.mock('node-fetch');

describe('given the fetcher function', () => {
    const url = "https://api.github.com/users/kabaros/repos";
    it('should return data', () => {
        //arrange
        const func = () => {
            return [{ name: "aws-lambda-starter" }, { name: "dom-ajax-repo" }]
        }
        fetch.mockResolvedValue({ status: 201, url: "http://www.url.cl", statusText: "created", json: func });
        //act
        return fetcher(url).then(response => {
            // assert
            expect(response).toEqual([{ name: "aws-lambda-starter" }, { name: "dom-ajax-repo" }])
        });
    });

    it('should return error code if the promise is rejected', () => {
        //arrange
        fetch.mockRejectedValue({ status: 403 });
        //act
        return fetcher(url).catch(response => {
        //assert
        expect(response).toEqual({ status: 403 });
        });
    });
});