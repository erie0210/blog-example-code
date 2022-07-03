
import { addFunc } from "./simpleTest";
import request from "supertest";
import app from './app';

describe("005 sample test", function () {
  
  it('요청의 결과 200이 리턴된다.', async() => {
   await request(app)
   .get('/?phone=2058')
   .expect(200)
   .expect({"identification":2,"password":"def456"});
  })
})

test('adds 1 + 2 to equal 3', () => {
  expect(addFunc(1, 2)).toBe(3);
});