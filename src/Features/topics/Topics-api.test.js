const topic = ['NetflixEvents', 'askscience', 'Books', 'PhotoshopBattles']
const random = Math.floor(Math.random() * topic.length);
const request = require("supertest")(`https://www.reddit.com/search.json?q=${topic[random]}&limit=12&type=sr%2Cuser`);
const expect = require("chai").expect;


describe("GET /topics", function () {
  test(`${topic[random]}`, async function () {
    const response = await request.get("");

    expect(response.status).eql(200);
    expect(response.body.data.children.length).greaterThanOrEqual(1);
  });
});