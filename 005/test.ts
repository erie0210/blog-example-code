import { ExampleController } from "./controller";
import request from "supertest";
import app from './app';

describe("005 sample test", function () {
  let controller: ExampleController;
  
  beforeAll(() =>{
    controller = new ExampleController();
  })
  
  it('요청의 결과 200이 리턴된다.', () => {
    request(app).get('/').expect(200);
  })
})
