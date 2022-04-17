import { FindUserInformationRequest } from 'DTO/FindUserInformationRequest';
import 'reflect-metadata';
import { Service } from "typedi"
import { AuthInfo } from './entity/AuthInfo';
import { exampleDB } from './db';
// import { Repository, DataSource } from 'typeorm';

@Service()
export class ExampleService {
    
    constructor(){}

    getAuthInfo (dto: FindUserInformationRequest): AuthInfo{
        return exampleDB.filter(cur => cur.phone === Number(dto.phone))[0];
        // return this.authInfoRepository.findOne({where:[{identification:dto.name}, {phone: dto.phoneNumber}]})
    }
}