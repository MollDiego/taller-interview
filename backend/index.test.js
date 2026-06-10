const request = require('supertest');
const app = require('./index');

describe('POST /transaction', () => {
  test('should save transaction data correctly', async () => {
    const transactionData = {
      amount: 100,
      description: 'Groceries'
    };

    const response = await request(app)
      .post('/transaction')
      .send(transactionData);

    expect(response.statusCode).toBe(201);

    expect(response.body.message)
      .toBe('Transaction created successfully');

    expect(response.body.data.amount)
      .toBe(100);

    expect(response.body.data.description)
      .toBe('Groceries');

    expect(response.body.data.id)
      .toBeDefined();
  });
});