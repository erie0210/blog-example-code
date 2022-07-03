import 'reflect-metadata';
import { ExampleService } from './service';
import { Service, Container } from 'typedi';
import { FindUserInformationRequest } from './DTO/FindUserInformationRequest';
import { FindUserInformationResponse } from './DTO/findUserInformationResponse';
import { AuthInfo } from 'entity/AuthInfo';

@Service()
export class ExampleController {

  constructor(){}

  getAuthInfo(query: FindUserInformationRequest): FindUserInformationResponse {
    console.log("controller query", query)
      const serviceInstance = Container.get(ExampleService); 
      const authInfo: AuthInfo = serviceInstance.getAuthInfo(query);
      const res =  new FindUserInformationResponse(authInfo);
      return res;
  }
}