import 'reflect-metadata';
import { ExampleService } from './service';
import { Service, Container } from 'typedi';

@Service()
export class ExampleContainer {
  constructor(){}
  
  flow(req, res) {
    const serviceInstance = Container.get(ExampleService); 
    const result = serviceInstance.hello();
    res.send(result);
  }
}