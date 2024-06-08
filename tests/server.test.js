
const request = require('supertest');
const {app} = require('../src/server.js')

describe('Home page route shows an error', () => {
  it('should return an object with a message and error property', async () => {
    // localhost:3000/v2/
    const response = await request(app).get("/v2/");
    console.log(response);
    expect(response.body.message).toBeTruthy();
  });
})

describe('v2/ functionality', () => {
  it('should v2/ POST recieved data correctly', async () => {
    const response = await request(app).post('/v2/').send({
      movie: "Dune"
    });

    /*
    Expected response body:
      {
        message: "Recieved data!"
        data: {
          movie: "Dune"
        }
      }
    */

      expect(response.body.data.movie).toBe("Dune");
      expect(response.body.data.movie).toBeTruthy();
  });
  it('should v2/headercheck/ GET recieved an auth headrer correctly', async () => {
    const response = await request(app).get("/v2/headercheck/").auth('Test1234', {type: "bearer"});
    expect(response.body.data).toBe("Bearer Test1234");
  });
})
