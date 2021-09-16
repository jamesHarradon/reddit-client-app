const request = require("supertest")("https://www.reddit.com/hot.json?&limit=");
const expect = require("chai").expect;

describe("GET /trends", function () {
  test("limit 6", async function () {
    const response = await request.get("6");

    expect(response.status).eql(200);
    expect(response.body.data.children.length).eql(6);
  });
});