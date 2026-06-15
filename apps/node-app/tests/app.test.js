const request = require('supertest');
const { app, add } = require('../src/app');

describe('Utility function', () => {
  test('add() adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('GET /', () => {
  test('responds with welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/Hello/);
  });
});

describe('GET /health', () => {
  test('responds with status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
